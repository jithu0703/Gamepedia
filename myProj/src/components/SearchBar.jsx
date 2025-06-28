import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/SearchBar.css"; // optional if styling separately

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const encoded = encodeURIComponent(searchQuery.trim());
    navigate(`/search/${encoded}`);
    setSearchQuery(""); // optional: clear after search
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search games..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
