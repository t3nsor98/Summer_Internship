import React, { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
          method: "GET",
          headers: {
            "X-Api-Key": API_KEY,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <p className="text-center text-purple-600">Loading quote...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Error fetching quote: {error}</p>
    );
  }

  return (
    <div className="p-4 bg-purple-100 rounded-lg shadow-md mt-4 ">
      <p className="text-purple-800 text-lg italic text-center">"{quote}"</p>
      <p className="text-purple-600 text-sm font-semibold text-right mt-2">
        - {author || "Unknown"}
      </p>
    </div>
  );
}

export default Quote;
