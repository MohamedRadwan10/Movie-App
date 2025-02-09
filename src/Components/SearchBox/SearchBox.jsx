"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Set mounted to true once the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/search/${search}?page=1`);
    }
  };

  if (!mounted) return null; 

  return (
    <form
      className="flex justify-between px-4 mx-auto max-w-4xl gap-4 mt-4"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Search for a Movie"
        className="w-full h-14 rounded-md placeholder-gray-500 p-4 bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit" 
        className="text-blue-600 rounded-sm"
        disabled={search.trim() === ""} 
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

