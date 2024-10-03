"use client"
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-400 shadow-md p-4">
      <div className="container mx-auto flex justify-center md:justify-center space-x-8">
        <Link href="/" className="text-white font-bold mr-5 hover:text-gray-400">Home</Link>
        <Link href="/country" className="text-white font-bold mr-5 hover:text-gray-400">Country</Link>
      </div>
    </nav>
  );
};

export default Header;
