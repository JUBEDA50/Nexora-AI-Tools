import { useEffect, useState } from "react";

function CategoryFilter({ category, setCategory }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
  }, []);

  const categories = [
    "All",
    "Chatbot",
    "Writing",
    "Coding",
    "Image",
    "Research",
    "Design",
    "Productivity",
    "Video",
    "Audio",
  ];

  return (
    <div style={{ marginBottom: "25px" }}>
      {categories.map((cat) => {
        const isActive = category === cat;

        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s ease",

              background: isActive
                ? "#2563eb"
                : darkMode
                ? "#1f2937"
                : "#e5e7eb",

              color: isActive
                ? "white"
                : darkMode
                ? "#d1d5db"
                : "#111827",

              transform: isActive ? "scale(1.05)" : "scale(1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = isActive
                ? "scale(1.05)"
                : "scale(1)";
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;