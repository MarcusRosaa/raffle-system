import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "../assets/styles/themes/default";
// import { router } from '../routes';

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import RafflesContainer from "../components/RafflesContainer";
import Winners from "../pages/Winners";
import Terms from "../pages/Terms";
import Purchases from "../pages/Purchases";
import PurchaseDetails from "../pages/PurchaseDetails";
import ProductPage from "../pages/ProductPage";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/sorteios" element={<RafflesContainer />} />

          <Route path="/ganhadores" element={<Winners />} />

          <Route path="/pedidos" element={<Purchases />} />

          <Route path="/pedidos/:id" element={<PurchaseDetails />} />

          <Route path="/sorteios/:id" element={<ProductPage />} />

          <Route path="/termos" element={<Terms />} />

          <Route path="/sobre" element={<Dashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
