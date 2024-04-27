import NavBar from "./components/NavBar/index.jsx";
import Home from "./components/Home.jsx";
import Art from "./components/Art/index.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer/index.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  console.log("Shopping cart:", shoppingCart);
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/art"
            element={
              <Art
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route
            path="/shopping_cart"
            element={
              <ShoppingCart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
