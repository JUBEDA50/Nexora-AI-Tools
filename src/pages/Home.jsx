import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #0f172a, #020617, #1e293b)"
          : "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        color: "white",
        padding: "40px",
        transition: "0.3s ease",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
          Nexora AI Tools Platform
        </h1>

        <h2 style={{ fontSize: "28px", fontWeight: "400" }}>
          Discover the Best AI Tools in One Place
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#e5e7eb",
          }}
        >
          Explore the world's most powerful AI tools for writing, coding,
          image generation, research, productivity, audio, and video creation.
        </p>

        <Link to="/search">
          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              background: darkMode
  ? "linear-gradient(135deg, #0f172a, #020617, #1e293b)"
  : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
              color: darkMode ? "#111827" : "#1e3a8a",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            Explore AI Tools →
          </button>
        </Link>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "80px",
        }}
      >
        {[
          ["15+", "AI Tools"],
          ["10", "Categories"],
          ["4.8★", "Average Rating"],
          ["1000+", "Users"],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0.15)",
              padding: "25px",
              borderRadius: "15px",
              width: "180px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              border: darkMode ? "1px solid #334155" : "none",
            }}
          >
            <h2>{item[0]}</h2>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <h2>Why Choose Nexora?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {[
            { title: "🔍 Smart Search", text: "Find AI tools instantly." },
            { title: "📂 Categories", text: "Browse tools by category." },
            { title: "📖 Detailed Info", text: "Features, ratings & pricing." },
            { title: "⭐ Favorites", text: "Save your preferred tools." },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "#111827",
                width: "250px",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: darkMode
                  ? "0 8px 20px rgba(0,0,0,0.6)"
                  : "0 4px 12px rgba(0,0,0,0.2)",
                border: darkMode ? "1px solid #374151" : "none",
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div
        style={{
          maxWidth: "900px",
          margin: "80px auto",
          textAlign: "center",
        }}
      >
        <h2>About Nexora</h2>

        <p
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#e5e7eb",
          }}
        >
          Nexora AI Tools Directory helps students, developers, and creators
          discover the most useful AI tools with ratings, features, and use cases.
        </p>
      </div>

      <Footer />
    </div>
  );
}
export default Home;