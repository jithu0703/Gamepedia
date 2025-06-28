import "../style/GameGrid.css";
import GameCard from "./GameCard"; // Use relative path if in the same folder

function GameGrid({ games }) {
  if (!games || games.length === 0) {
    return <p className="no-games-message">No games found.</p>;
  }

  return (
    <div className="games-grid">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
}

export default GameGrid;
