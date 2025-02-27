import React from "react";
import Card from "../Card/Card";

const Result = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 gap-5 p-5">
      {results.map((result) => {
        return (
          <Card key={result.id} result={result} />
        );
      })}
    </div>
  );
};

export default Result;
