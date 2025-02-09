import Pagination from "@/Components/Pagination/Pagination";
import Result from "@/Components/Result/Result";
import Scroll from "@/Components/Scroll/Scroll";
import React from "react";

const API_KEY = process.env.API_KEY;

const HomePage = async ({ searchParams }) => {
  const genre = (await searchParams?.genre) || "fetchTrending";
  const page = parseInt(searchParams?.page) || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div className="mx-auto">
      <Result results={results} />
      <Pagination currentPage={page} totalPages={50} />
      <Scroll />
    </div>
  );
};

export default HomePage;
