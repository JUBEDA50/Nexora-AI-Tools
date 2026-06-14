import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolDetails from "./pages/ToolDetails";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ToolsPage from "./pages/ToolsPage";
import Favorites from "./pages/FavouritesPage";
import Dashboard from "./pages/Dashboard";
import Comparison from "./pages/Comparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tool/:id" element={<ToolDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/comparison" element={<Comparison />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;