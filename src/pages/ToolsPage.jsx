import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";
import tools from "../data/tools";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function ToolsPage() {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  // fake loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const hasTools = tools && tools.length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "#0f172a"
          : "linear-gradient(135deg, #e0f2fe, #f0f9ff)",
        color: darkMode ? "white" : "#111827",
        transition: "0.3s ease",
      }}
    >
      <Navbar />

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1>🚀 Explore AI Tools</h1>
        <p style={{ color: darkMode ? "#cbd5e1" : "#2a2c2fff" }}>
             Browse all available AI tools in one place
        </p>
      </div>
{loading ? (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      padding: "30px",
    }}
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        style={{
          height: "180px",
          borderRadius: "15px",
          background: darkMode ? "#1f2937" : "#e5e7eb",
          animation: "pulse 1.5s infinite",
        }}
      />
    ))}
  </div>
) : (
        <>
          {/* EMPTY STATE */}
          {!hasTools ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                color: darkMode ? "#cbd5e1" : "#475569",
              }}
            >
              <div style={{ fontSize: "50px" }}>🧠</div>
              <h2>No AI Tools Available</h2>
              <p>Please check back later or add tools to the list</p>
            </div>
          ) : (
            /* TOOLS GRID */
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
                padding: "30px",
              }}
            >
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}

export default ToolsPage;