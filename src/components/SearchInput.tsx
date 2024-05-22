import React from 'react'

const SearchInput = () => {
  return (
    <div className="relative max-w-96 mt-4 w-full px-5">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded focus:outline-none focus:bg-white focus:border focus:border-blue-400"
      />
      <img
        src="/search-alt-1-svgrepo-com.svg"
        className="absolute w-6 top-2 right-8 flex items-center text-gray-500"
      ></img>
    </div>
  );
}

export default SearchInput