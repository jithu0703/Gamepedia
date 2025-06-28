import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameDetails } from "../services/api";
import "../style/GameDetails.css";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("working...");
  useEffect(() => {
    async function loadGame() {
      const data = await getGameDetails(id);
      setGame(data);
      setLoading(false);
    }
    loadGame();
  }, [id]);

  function stripNonEnglish(description) {
    const spanishMarkers = [
      "Español",
      "Descripción en español",
      "Spanish", // sometimes labeled explicitly
      "Idiomas:",
    ];

    for (let marker of spanishMarkers) {
      const index = description.indexOf(marker);
      if (index !== -1) {
        return description.slice(0, index).trim();
      }
    }

    return description.trim();
  }

  if (loading) return <div className="spinner"></div>;

  return (
    <>
      <div className="game-details">
        <img src={game.background_image} alt={game.name} className="game-img" />
        <div className="game-description">
          <h2>
            <b>{game.name}</b>
          </h2>
          <h3>
            <b>{game.released?.split("-")[0]}</b>
          </h3>
          {stripNonEnglish(game.description_raw)}
        </div>
      </div>
    </>
  );
}

export default GameDetails;
