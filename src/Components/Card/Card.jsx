import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {/* Image Container */}
        <div className="aspect-w-2 aspect-h-3"> {/* Fixed aspect ratio */}
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
        <div className="p-2">
          <p className="line-clamp-2 text-md text-gray-500">
            {result.overview || "No overview available."}
          </p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-gray-400">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;