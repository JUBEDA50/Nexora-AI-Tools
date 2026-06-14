import { useTheme } from "../context/ThemeContext";

function SearchBar({ search, setSearch }) {

const { darkMode } = useTheme();

  return (
    <input
      type="text"
      placeholder="🔍 Search AI Tools..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        maxWidth: "500px",
        padding: "14px",
        fontSize: "16px",
        borderRadius: "12px",
        border: darkMode ? "1px solid #334155" : "1px solid #ddd",
        marginBottom: "30px",
        background: darkMode ? "#1f2937" : "white",
        color: darkMode ? "white" : "black",
        outline: "none",
        transition: "0.3s ease",
      }}
      onFocus={(e) => {
        e.target.style.border = "2px solid #2563eb";
      }}
      onBlur={(e) => {
        e.target.style.border = darkMode
          ? "1px solid #334155"
          : "1px solid #ddd";
      }}
    />
  );
}

export default SearchBar;