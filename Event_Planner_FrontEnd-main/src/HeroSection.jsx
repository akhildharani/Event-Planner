import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function HeroSection({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="hero-section flex justify-center items-center flex-grow h-14 m-5">
      <div className="bg-teal-300 shadow-lg rounded-2xl overflow-hidden h-15 w-full max-w-md p-0 relative">
        <div className="flex items-center">
          <FaSearch className="text-gray-600 mx-2 h-15" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 rounded-xl border-1 border-green-500 w-full  focus:outline-none focus:border-green-700 h-15"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
