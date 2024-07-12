import React from "react";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const TH = ({ Text }) => {
  return (
    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
      {Text}
    </th>
  );
};

const THA = () => {
  return (
    <th
      scope="col"
      className="text-right text-sm font-semibold py-3.5 pl-3 pr-4 sm:pr-6"
    >
      Actions
    </th>
  );
};

const TD = ({ Variabel }) => {
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {Variabel}
    </td>
  );
};

const TDA = ({ LinkTo, onDelete }) => {
  return (
    <td className="flex whitespace-nowrap py-4 pl-3 pr-4 justify-end text-sm font-medium sm:pr-6">
      <Link to={LinkTo}>
        <PencilSquareIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-900" />
      </Link>
      <span className="px-1.5">|</span>
      <button onClick={onDelete}>
        <TrashIcon className="h-6 w-6 text-red-600 hover:text-red-900" />
      </button>
    </td>
  );
};

export { TH, THA, TD, TDA };
