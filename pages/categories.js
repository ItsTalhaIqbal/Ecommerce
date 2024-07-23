import Center from '@/components/Center';
import Header from '@/components/Header';
import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductsGrid from '@/components/ProductsGrid';

const Categories = ({ categories,Allproducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState(Allproducts);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        const response = await axios.get(`/api/products?category=${selectedCategory}`);
        setProducts(response.data);
      } else {
        setProducts(Allproducts);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Center>
          <h1 className="text-2xl font-bold mb-4">Categories</h1>
          <div className="mb-4">
            <label htmlFor="category" className="mr-2">Filter by Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <Center>
          <ProductsGrid products={products} />
          </Center>
        </Center>
      </div>
    </div>
  );
};

export default Categories;

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find({});
  const products = await Product.find({});


  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      Allproducts: JSON.parse(JSON.stringify(products)),

    },
  };
}
