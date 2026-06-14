import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import tools from "../data/tools";
import { getFavorites } from "../utils/favorites";
import { getRecentlyViewed } from "../utils/recentlyViewed";

function Dashboard() {
  const { darkMode } = useTheme();

  const favorites = getFavorites();
  const recentTools = getRecentlyViewed();

  // ✅ STEP 3: REAL DYNAMIC STATS
  const totalTools = tools.length;
  const totalFavorites = favorites.length;

  const topTool = tools.reduce((prev, curr) =>
    curr.rating > prev.rating ? curr : prev
  );

  const categoryCount = {};
  tools.forEach((t) => {
    categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
  });

  const topCategory =
    Object.keys(categoryCount).reduce((a, b) =>
      categoryCount[a] > categoryCount[b] ? a : b
    );

  const cards = [
    {
      title: "Total Tools",
      value: totalTools,
      emoji: "🧠",
      color: "#3b82f6",
    },
    {
      title: "Favorites",
      value: totalFavorites,
      emoji: "⭐",
      color: "#f59e0b",
    },
    {
      title: "Top Category",
      value: topCategory,
      emoji: "📂",
      color: "#10b981",
    },
    {
      title: "Top Tool",
      value: `${topTool.name} ⭐ ${topTool.rating}`,
      emoji: "🚀",
      color: "#8b5cf6",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "#0f172a"
          : "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
        color: darkMode ? "white" : "#111827",
      }}
    >
      <Navbar />

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1>📊 Analytics Dashboard</h1>
        <p style={{ color: darkMode ? "#cbd5e1" : "#25272bff" }}>
          Overview of your AI tools ecosystem
        </p>
      </div>

      {/* DASHBOARD CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "30px",
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              background: darkMode ? "#1f2937" : "white",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: darkMode
                ? "0 10px 25px rgba(0,0,0,0.5)"
                : "0 10px 25px rgba(0,0,0,0.08)",
              border: `2px solid ${item.color}`,
              transition: "0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "28px" }}>{item.emoji}</div>

            <h3 style={{ marginTop: "10px", color: item.color }}>
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* 🕒 STEP 2: RECENTLY VIEWED SECTION (IMPROVED & CLEAN) */}
      {recentTools.length > 0 && (
        <div style={{textAlign: "center", padding: "20px 30px" }}>
          <h2>🕒 Recently Viewed Tools</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            {recentTools.map((tool) => (
              <div
                key={tool.id}
                style={{
                  background: darkMode ? "#1f2937" : "white",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h4>{tool.name}</h4>
                <p style={{ fontSize: "12px", opacity: 0.8 }}>
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INSIGHT SECTION */}
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>🔥 Insight</h2>
        <p style={{ color: darkMode ? "#cbd5e1" : "#000000ff" }}>
        Most used category today: <b>{topCategory}</b>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;