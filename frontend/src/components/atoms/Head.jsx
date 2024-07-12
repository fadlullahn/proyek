import React from "react";
import { Link } from "react-router-dom";

const Head = ({ Title, Deskripsi, ButtonText, LinkTo }) => {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="font-bold leading-6 text-gray-900">{Title}</h1>
        <p className="font-semibold mt-2 text-sm text-gray-700">{Deskripsi}</p>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link
          to={LinkTo}
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {ButtonText}
        </Link>
      </div>
    </div>
  );
};

export default Head;
