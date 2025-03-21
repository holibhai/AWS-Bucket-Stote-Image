import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">AWS S3 Bucket Image Store</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-4">
        Welcome to the AWS S3 Bucket Image Store. This platform allows users to securely upload and manage images in an AWS S3 bucket.
      </p>
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-2">1. Select an image from your device.</p>
        <p className="text-gray-600 mb-2">2. Upload the image to the AWS S3 bucket.</p>
        <p className="text-gray-600">3. Access and manage your uploaded images easily.</p>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2025 AWS S3 Image Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
