function SortBar({ sortBy, setSortBy, filters, setFilters }) {
    const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
    function handleFilterChange(className) {
      if (filters.includes(className)) {
        setFilters(filters.filter(c => c !== className));
      } else {
        setFilters([...filters, className]);
      }
    }
  
    return (
      <div className="sortbar">
        <div>
          <label>Sort by: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>
  
        <div>
          <label>Filter by Class: </label>
          {classes.map(cls => (
            <label key={cls}>
              <input
                type="checkbox"
                checked={filters.includes(cls)}
                onChange={() => handleFilterChange(cls)}
              />
              {cls}
            </label>
          ))}
        </div>
      </div>
    )
  }
  
  export default SortBar;
  