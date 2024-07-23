import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import CustomerSupport from '@/components/CustomerSupport'
import SpecialOffers from "@/components/SpecialOffers";


export default function HomePage({featuredProduct,newProducts,recommended}) {
  console.log(featuredProduct);
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} name={"New Arrivals"}/>
      <SpecialOffers/>
      <NewProducts products={recommended} name={"Recomended Products"} />

      <CustomerSupport/>
      
      

    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '669cf10c14e7620acf79014e';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:4});
  const recmonended = await Product.find({});

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      recommended: JSON.parse(JSON.stringify(recmonended)),

    },
  };
}