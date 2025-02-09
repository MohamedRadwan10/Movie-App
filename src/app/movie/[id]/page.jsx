import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Movie Details",
};

const API_KEY = process.env.API_KEY;
const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  const movie = await res.json();
  return (
    <>
      <div className="w-full ">
        <div className="p-4 md:pt-8 flex flex-col justify-center md:flex-row content-center max-w-8xl mx-auto md:space-x-6 ">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            width={500}
            height={200}
            draggable="false"
            className="rounded-xl w-auto"
            style={{ maxWidth: "100%", height: "100%" }}
          ></Image>
          <div className="p-4">
            <h2 className="text-3xl mb-3 font-bold">
              {movie.title || movie.name} (
              {new Date(movie.release_date).getFullYear()})
            </h2>
            <div className="flex items-center space-x-6 mb-3">
              <p>
                {movie.release_date || movie.first_air_date} (
                {movie.origin_country})
              </p>

              <div className="">
                {movie.genres
                  .map((item) => <span key={item.id}>{item.name}</span>)
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </div>
            </div>
            <p className="text-lg text-gray-400">{movie.tagline}</p>
            <p className="text-2xl font-bold">overview</p>{" "}
            <p className="text-xl mb-3">{movie.overview}</p>
            <p className="mb-3 text-lg">
              <span className="font-semibold mr-1 text-blue-600">Rating:</span>
              {movie.vote_count}
            </p>
            <Link href={movie.homepage} target="blank">
              <p className=" hover:text-gray-400">Home Page</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
