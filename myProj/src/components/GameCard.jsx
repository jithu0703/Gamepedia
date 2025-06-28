import "../style/Gamecard.css";
import { getPopularGames } from "../services/api.js";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  function onLike() {
    alert("Liked");
  }

  return (
    <Link to={`/game/${game.id}`}>
      <div className="game-card">
        <div className="game-poster">
          <img src={game.background_image} alt={game.name} />
          <div className="game-overlay">
            <button className="fav-btn" onClick={onLike}>
              ❤︎
            </button>
          </div>
        </div>
        <div className="game-info">
          <h3>{game.name}</h3>
          <p>{game.released?.split("-")[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
