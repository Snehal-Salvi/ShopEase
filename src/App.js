import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing BrowserRouter and routing components
import Header from "./components/Header"; // Importing Header component
import Footer from "./components/Footer"; // Importing Footer component
import ProductList from "./features/products/ProductList"; // Importing ProductList component
import Cart from "./components/Cart"; // Importing Cart component
import { ToastContainer } from "react-toastify"; // Importing ToastContainer for toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing CSS for toast notifications

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header /> {/* Header component */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductList />} />{" "}
            {/* Route for ProductList component */}
            <Route path="/cart" element={<Cart />} />{" "}
            {/* Route for Cart component */}
          </Routes>
          <ToastContainer />{" "}
          {/* ToastContainer for displaying toast notifications */}
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </BrowserRouter>
  );
}

export default App;
