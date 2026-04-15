import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

function Home({ countries }) {
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 400);
    return () => clearTimeout(t);
  }, [query]);

  const isTyping = query !== debouncedQuery;

  const safeCountries = Array.isArray(countries) ? countries : [];

  const displayed = safeCountries
    .filter((c) =>
      c.name.common.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
    .filter((c) => region === "All" || c.region === region)
    .sort((a, b) => {
      if (sortBy === "name")
        return a.name.common.localeCompare(b.name.common);
      if (sortBy === "population")
        return b.population - a.population;
      return 0;
    });

  if (!countries) {
    return <p className="page-status">Loading countries...</p>;
  }

  return (
    <main>
      <SearchBar query={query} onQueryChange={setQuery} />

      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {isTyping && <p className="page-status">Searching...</p>}

      <div className="cards-grid">
        {displayed.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>

      {!isTyping && displayed.length === 0 && (
        <p className="page-status">No countries found</p>
      )}
    </main>
  );
}

export default Home;