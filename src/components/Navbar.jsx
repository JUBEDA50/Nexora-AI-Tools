import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        background: darkMode ? "#0f172a" : "#111827",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🚀 Nexora AI Tools</h2>

      <div>
  <Link style={linkStyle} to="/">Home</Link>
  <Link style={linkStyle} to="/search">Search</Link>
  <Link style={linkStyle} to="/tools">Tools</Link>
  <Link style={linkStyle} to="/favorites">Favorites</Link>
  <Link style={linkStyle} to="/dashboard">Dashboard</Link>
  <Link style={linkStyle} to="/comparison">Comparison</Link>

  <button
    onClick={toggleTheme}
    style={{
      marginLeft: "15px",
      padding: "6px 12px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      background: darkMode ? "#fbbf24" : "#1f2937",
      color: darkMode ? "#000" : "#fff",
      fontWeight: "bold",
    }}
  >
    {darkMode ? "☀ Light" : "🌙 Dark"}
  </button>
</div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
};

export default Navbar;