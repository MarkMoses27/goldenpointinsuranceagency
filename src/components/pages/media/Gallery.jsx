import React from 'react';

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8">Gallery</h1>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Explore our collection of images showcasing our services and events.
      </p>
      <div className="space-y-6 max-w-3xl mx-auto">
        <p className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md text-gray-700">
          Stay tuned for more updates and photos!
        </p>
        <p className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md text-gray-700">
          Check back often to see the latest additions to our gallery.
        </p>
        <p className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md text-gray-700">
          We love sharing our journey with you through these images.
        </p>
        <p className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md text-gray-700">
          Thank you for visiting our gallery page!
        </p>
      </div>
    </div>
  );
}
