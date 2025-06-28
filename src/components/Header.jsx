import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "15px", background: "#7ef" }}>
      <nav style={{ background: "#7fe", padding: "10px", fontSize: "24px"}}>
        <Link to="/">Eventos!</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  );    
}

export default Header;
