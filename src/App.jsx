import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./ pages/Home";
import NotFound from "./ pages/NotFound";
import CountryPage from "./ pages/CountryPage";
import './ styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<div>Country Page</div>} />
          <Route path="/favourites" element={<div>Favourites Page</div>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;