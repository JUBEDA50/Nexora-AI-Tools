import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { getFavorites } from "../utils/favorites";
import ToolCard from "../components/ToolCard";

function FavouritesPage() {
  const { darkMode } = useTheme();

  const favorites = getFavorites();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#fbddeeff",
        color: darkMode ? "white" : "black",
        transition: "0.3s ease",
      }}
    >
      <Navbar />

      {/* Header */}
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1>⭐ Your Favorite AI Tools</h1>
        <p>All your saved tools appear here</p>
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px" }}>
          <h2>No Favorites Yet</h2>
          <p>Add tools to favorites to see them here</p>
        </div>
      ) : (
        /* FULL TOOL CARDS */
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            padding: "30px",
          }}
        >
          {favorites.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default FavouritesPage;