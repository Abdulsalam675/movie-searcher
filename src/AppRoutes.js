import { Routes, Route } from "react-router-dom";
import MovieDetails from "./page/movieDetails";
import App from "./App";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movieDetails/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default AppRoutes;
