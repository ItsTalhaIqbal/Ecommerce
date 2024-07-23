// pages/api/products.js
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handler(req, res) {
  const { category } = req.query;

  await mongooseConnect();

  let products;
  if (category) {
    products = await Product.find({ category });
  } else {
    products = await Product.find({});
  }

  res.status(200).json(products);
}
