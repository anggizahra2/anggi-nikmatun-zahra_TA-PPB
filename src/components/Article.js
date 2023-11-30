import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
          <img src={flags.svg} alt="" className="md:h-72 w-full object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {name.common}
            </h2>
          </div>
        </article>
      </Link>
    </>
  );
}
