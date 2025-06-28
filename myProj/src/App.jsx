import "./style/App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import SearchGame from "./pages/SearchGame";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="search/:query" element={<SearchGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
