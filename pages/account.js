import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { baseurl } from '@/constants/baseurl';

const Account = () => {
  return (
    <>
    <Header/>
   
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="#"  className="text-teal-600 hover:text-teal-800">
              Sign Up
            </Link>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Admin?{' '}
            <Link href={`${baseurl}` } className="text-teal-600 hover:text-teal-800">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Account;
