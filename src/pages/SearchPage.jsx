import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ToolCard from "../components/ToolCard";
import tools from "../data/tools";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { darkMode } = useTheme();

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  // ✅ IMPORTANT LOGIC
  const showStartMessage =
    search.length === 0 && category === "All";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#f7f3cfff",
        color: darkMode ? "white" : "#111827",
      }}
    >
      <Navbar />

      {/* Header */}
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1>Search AI Tools</h1>
        <p>Find tools instantly using search & filters</p>
      </div>

      {/* Search Center */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>

      {/* Results Count */}
      {!showStartMessage && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>{filteredTools.length} Results Found</h3>
        </div>
      )}

      {/* MAIN SECTION */}
      {showStartMessage ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px",
            color: darkMode ? "#d1d5db" : "#374151",
          }}
        >
          <h2>🔍 Start Searching</h2>
          <p>Use search or category filter to explore AI tools</p>
        </div>
      ) : filteredTools.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            padding: "30px",
          }}
        >
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px",
            color: darkMode ? "#d1d5db" : "#374151",
          }}
        >
          <h2>😕 No AI Tools Found</h2>
          <p>Try searching something else</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SearchPage;