import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCarousel from "./components/MovieCarousel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MovieCarousel />}></Route>
        <Route
          path="/:genre"
          element={<MovieCarousel />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
