function FilterBar({ region, onRegionChange, sortBy, onSortChange }) {
  return (
    <div className="filter-bar">
      <select value={region} onChange={(e) => onRegionChange(e.target.value)}>
        <option>All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Default</option>
        <option value="name">Name (A–Z)</option>
        <option value="population">Population (High–Low)</option>
      </select>
    </div>
  );
}

export default FilterBar;