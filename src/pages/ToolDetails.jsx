import { useParams, Link } from "react-router-dom";
import tools from "../data/tools";
import Footer from "../components/Footer";

function ToolDetails() {
  const { id } = useParams();

  const tool = tools.find(
    (item) => item.id === Number(id)
  );

  if (!tool) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Tool Not Found
      </h1>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
     <img
  src={tool.image}
  alt={tool.name}
  style={{
    width: "150px",
    height: "150px",
    objectFit: "contain"
  }}
/>

      <h1>{tool.name}</h1>

      <h3>
        Category: {tool.category}
      </h3>

      <hr />

      <h2>Description</h2>

      <p>{tool.description}</p>

      <h2>Features</h2>

      <ul>
        {tool.features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <h2>Use Cases</h2>

      <ul>
        {tool.useCases.map((useCase, index) => (
          <li key={index}>
            {useCase}
          </li>
        ))}
      </ul>

      <h2>Pricing</h2>

      <p>{tool.pricing}</p>

      <h2>Rating</h2>

      <p>{tool.rating}</p>

      <h2>Official Website</h2>

      <a
        href={tool.website}
        target="_blank"
        rel="noreferrer"
      >
        <h3>Visit Website</h3>
      </a>

      <br />
      <br />

      <Link to="/tools">
  <button
    style={{
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "20px"
    }}
  >
    ← Back to Tools
  </button>
</Link>

<Footer />

</div>
);
}

export default ToolDetails;