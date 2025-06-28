import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import "../style/Home.css";
import { getPopularGames } from "../services/api";

function Home() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPopularGames = async () => {
      setLoading(true);
      try {
        const newGames = await getPopularGames(page);
        setGames((prevGames) => [...prevGames, ...newGames]);
      } catch (err) {
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    };
    loadPopularGames();
  }, [page]);

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
    <div className="home">
      <SearchBar />
      {error && <div className="error-message">{error}</div>}
      <GameGrid games={games} />
      {loading && <div className="spinner"></div>}
    </div>
  );
}

export default Home;
