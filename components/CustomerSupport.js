import React from 'react';

const CustomerSupport = () => {
  return (
    <div className="bg-[#222] py-16 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl">We’re here to help</h2>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Our support team is available 24/7 to assist you with any inquiries or issues you may have.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Us</h3>
            <div className="mt-6">
              <div className="flex items-center">
               
                <span className="ml-3 text-base text-2xl text-gray-500">+1 (555) 123-4567</span>
              </div>
              <div className="mt-3 flex items-center">
                
                <span className="ml-3 text-base text-2xl  text-gray-500">support@example.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Send Us a Message</h3>
            <form className="mt-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
