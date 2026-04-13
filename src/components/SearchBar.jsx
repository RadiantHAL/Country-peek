function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <span className="search-bar__icon">🔍</span>

        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search for a country..."
          aria-label="Search for a country"
          className="search-bar__input"
        />

        {query && (
          <button
            className="search-bar__clear"
            onClick={() => onQueryChange("")}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;