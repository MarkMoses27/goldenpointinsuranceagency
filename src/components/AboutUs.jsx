import { useState } from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-amber-500 to-yellow-600 py-10 text-center">
        <h1 className="text-4xl font-bold text-white">About Golden Point Insurance Agency</h1>
        <p className="text-white mt-4">We care about your peace of mind</p>
      </header>

      {/* About Us Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-900">Our Goal</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our goal at Golden Point Insurance Agency is to ensure that the things that are most important to you are protected by the best insurers.
              With years of expertise and a dedication to quality, we provide customized insurance solutions to safeguard your family, investments, and future to enhance your peace of mind.
              Our client-focused methodology guarantees individualized attention and all-inclusive assistance at every stage. With Golden Point Insurance Agency, all your insurance needs are taken care of.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
              alt="Golden Point Insurance"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4">Explore the wide range of services we offer to cater to all your insurance needs.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1326&q=80"
              alt="Motor Insurance"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Motor Insurance</h3>
            <p className="mt-2 text-gray-700">Private & Commercial Vehicles Coverage</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Medical Insurance"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Medical Insurance</h3>
            <p className="mt-2 text-gray-700">For Individuals, SMEs, and Corporates</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Life Insurance"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Life Insurance</h3>
            <p className="mt-2 text-gray-700">Ensure financial protection for your loved ones.</p>
          </div>
        </div>
      </section>

     
    </div>
  );
}
