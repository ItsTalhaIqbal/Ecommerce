import Link from 'next/link';
import React from 'react';

const SpecialOffers = () => {
  return (
    <div className="relative bg-white bg-cover mt-20 h-[700px] bg-center py-16" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[150px]">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Don't Miss Our Exclusive Deals!
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto">
          Check out the latest discounts and special offers on our products. Limited time only!
        </p>
        <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/products"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
          >
            Shop Now
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
          >
            View Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
