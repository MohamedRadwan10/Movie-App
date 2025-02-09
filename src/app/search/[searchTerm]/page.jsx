import Pagination from "@/Components/Pagination/Pagination";
import Result from "@/Components/Result/Result";
import React from "react";

const API_KEY = process.env.API_KEY;

const page = async ({ params }) => {
  const searchParams = params.searchTerm;
  const page = searchParams.page || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchParams}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 10000 } } 
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <>
          <Result results={results} />
        </>
      )}
    </div>
  );
};

export default page;
