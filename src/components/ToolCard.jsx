import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../utils/favorites";
import { addRecentlyViewed } from "../utils/recentlyViewed";
import { showToast } from "../utils/toast";

function ToolCard({ tool }) {
  const { darkMode } = useTheme();

  const [isFavorite, setIsFavorite] = useState(
    getFavorites().some((item) => item.id === tool.id)
  );

  const handleViewClick = () => {
  addRecentlyViewed(tool);
  showToast(`Viewing ${tool.name}`, "info");
};
  
const handleFavorite = () => {
  if (isFavorite) {
    removeFavorite(tool.id);
    setIsFavorite(false);

    showToast("Removed from Favorites", "error");
  } else {
    addFavorite(tool);
    setIsFavorite(true);

    showToast("Added to Favorites", "success");
  }
};

  return (
    <div
      style={{
        background: darkMode ? "#1f2937" : "white",
        color: darkMode ? "white" : "black",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: darkMode
          ? "0 8px 20px rgba(0,0,0,0.6)"
          : "0 8px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        cursor: "pointer",
        border: darkMode ? "1px solid #374151" : "none",
        transition: "0.25s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* IMAGE */}
      <img
        src={tool.image}
        alt={tool.name}
        style={{
          width: "90px",
          height: "90px",
          objectFit: "contain",
          marginBottom: "15px",
        }}
      />

      {/* CATEGORY */}
      <div
        style={{
          display: "inline-block",
          background: darkMode ? "#334155" : "#dbeafe",
          color: darkMode ? "#93c5fd" : "#1e40af",
          padding: "5px 12px",
          borderRadius: "20px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {tool.category}
      </div>

      {/* NAME */}
      <h2 style={{ fontSize: "22px", margin: "10px 0" }}>
        {tool.name}
      </h2>

      <p
  style={{
    color: darkMode ? "#94a3b8" : "#64748b",
    fontSize: "13px",
    marginBottom: "10px",
  }}
>
  {tool.category} AI Tool
</p>

      {/* RATING */}
      <p style={{ color: "#f59e0b", fontWeight: "bold" }}>
        ⭐ {tool.rating}
      </p>


      {/* BUTTONS */}
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={handleFavorite}
          aria-label="Add or remove favorite"
          style={{
            background: isFavorite ? "#dc2626" : "#16a34a",
            color: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {isFavorite ? "♥ Remove" : "♡ Favorite"}
        </button>

        <Link to={`/tool/${tool.id}`} onClick={handleViewClick}>
  <button
    style={{
      marginTop: "10px",
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    View Details →
  </button>
</Link>
      </div>
    </div>
  );
}

export default ToolCard;