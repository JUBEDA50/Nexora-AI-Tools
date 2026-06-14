import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import tools from "../data/tools";

function Comparison() {
  const { darkMode } = useTheme();

  const [toolA, setToolA] = useState("");
  const [toolB, setToolB] = useState("");

  const selectedToolA = tools.find((t) => t.name === toolA);
  const selectedToolB = tools.find((t) => t.name === toolB);

  const isSameTool = toolA && toolB && toolA === toolB;
  const isReady = selectedToolA && selectedToolB && !isSameTool;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#f3f4f6",
        color: darkMode ? "white" : "black",
        transition: "0.3s ease",
      }}
    >
      <Navbar />

      {/* Header */}
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1>⚖️ AI Tool Comparison</h1>
        <p>Compare tools side by side</p>
      </div>

      {/* Selectors */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={toolA}
          onChange={(e) => setToolA(e.target.value)}
          style={{ padding: "10px", minWidth: "200px" }}
        >
          <option value="">Select Tool A</option>
          {tools.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        <select
          value={toolB}
          onChange={(e) => setToolB(e.target.value)}
          style={{ padding: "10px", minWidth: "200px" }}
        >
          <option value="">Select Tool B</option>
          {tools.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      {/* SAME TOOL WARNING */}
      {isSameTool && (
        <div style={{ textAlign: "center", padding: "30px" }}>
          <h2>⚠️ Please choose two different tools</h2>
          <p>You cannot compare the same AI tool.</p>
        </div>
      )}

      {/* EMPTY STATE */}
      {!toolA || !toolB ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h3>🔍 Select two tools to start comparison</h3>
        </div>
      ) : null}

      {/* COMPARISON */}
      {isReady && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            padding: "30px",
          }}
        >
          {/* Tool A */}
          <div
            style={{
              background: darkMode ? "#1f2937" : "#f3d5d5ff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{selectedToolA.name}</h2>
            <p>{selectedToolA.description}</p>
            <p>⭐ {selectedToolA.rating}</p>
            <p>{selectedToolA.category}</p>
          </div>

          {/* Tool B */}
          <div
            style={{
              background: darkMode ? "#0f172a" : "#f3d5d5ff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{selectedToolB.name}</h2>
            <p>{selectedToolB.description}</p>
            <p>⭐ {selectedToolB.rating}</p>
            <p>{selectedToolB.category}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Comparison;