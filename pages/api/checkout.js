import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const {
    name, email, city,
    postalCode, streetAddress, country,
    cartProducts,
  } = req.body;

  await mongooseConnect();

  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId);
    const quantity = productsIds.filter(id => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100, // Ensure unit amount is correct
        },
      });
    }
  }

 

  const successUrl = `${process.env.PUBLIC_URL}/cart?success=1`;
  const cancelUrl = `${process.env.PUBLIC_URL}/cart?canceled=1`;

  // Debugging logs
  console.log('Success URL:', successUrl);
  console.log('Cancel URL:', cancelUrl);

  if (!successUrl.startsWith('http') || !cancelUrl.startsWith('http')) {
    res.status(400).json({ message: 'Invalid success or cancel URL' });
    return;
  }

  try {
    const orderDoc = await Order.create({
      line_items, name, email, city, postalCode,
      streetAddress, country, paid: false,
    });
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { orderId: orderDoc._id.toString() },
    });

    res.status(200).json({
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe session creation error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
