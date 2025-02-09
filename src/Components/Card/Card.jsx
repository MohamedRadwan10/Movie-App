import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div
      className=" container group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
     transition-shadow duration-200  overflow-hidden mt-5"
    >
      <Link href={`/movie/${result.id}`}>
        {/* Image Container */}
        <div className="aspect-w-2 aspect-h-3 relative">
          {" "}
          {/* Fixed aspect ratio */}
          <Image
            src={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                : "/placeholder-image.jpg" // Fallback for missing images
            }
            alt={result.title || result.name || "Movie poster"}
            width={500}
            height={750}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 bg-white dark:bg-slate-800">
          <h2 className="text-lg font-bold truncate mb-2 text-gray-900 dark:text-white">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300 mb-4">
            {result.overview || "No overview available."}
          </p>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span className="text-sm">
              {result.release_date || result.first_air_date}
            </span>
            <div className="flex items-center ml-auto">
              <FiThumbsUp className="h-5 w-5 mr-1" />
              <span className="text-sm">{result.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
