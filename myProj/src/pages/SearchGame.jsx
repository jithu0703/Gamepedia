import "../style/SearchGame.css";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchGames } from "../services/api";

function SearchGame() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const games = await searchGames(query, page);
        if (page === 1) {
          setResults(games);
        } else {
          setResults((prev) => [...prev, ...games]);
        }
        setError(null);
      } catch (err) {
        setError("Failed to load search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, page]);

  useEffect(() => {
    setPage(1);
    setResults([]);
  }, [query]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="search-page">
      <SearchBar />
      <h2>Search results for "{query}"</h2>
      {error && <p className="error-message">{error}</p>}
      <GameGrid games={results} />
      {loading && <div className="spinner"></div>}
      {!loading && results.length === 0 && <p>No games found for "{query}".</p>}
    </div>
  );
}

export default SearchGame;
