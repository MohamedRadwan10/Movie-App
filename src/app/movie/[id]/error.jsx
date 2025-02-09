"use client";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="text-center text-2xl">
      <h1>Movie details are not available</h1>
      <Link className="hover:text-blue-600" href={`/`}>Go Home</Link>
    </div>
  );
};

export default error;
