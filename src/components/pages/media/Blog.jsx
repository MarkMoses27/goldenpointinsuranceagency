import React from 'react';

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Welcome to the Blog Page
      </h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        <p className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md text-gray-700">
          This is where you can find the latest news and updates.
        </p>
        <p className="bg-white/90 backdrop-blur rounded-lg p-6 shadow-md text-gray-700">
          Stay tuned for more content!
        </p>
      </div>
    </div>
  );
}
