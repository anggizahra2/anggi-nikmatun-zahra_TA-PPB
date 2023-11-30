import React, { useState} from "react";
import Article from "../components/Article";

export default function SearchCountry() {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");

    async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }
  
  return (
    <>
      {!countries ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          {/* form */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center mb-8">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="max-w-4xl md:flex-1 "
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country by its name..."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="mt-10 py-3 px-10 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
              />
            </form>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
      );
      }