import NavBar from "./components/NavBar/index.jsx";
import Home from "./components/Home.jsx";
import Art from "./components/Art/index.jsx";
import ShoppingCart from "./components/ShoppingCart/index.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer/index.jsx";
import LatestShoppingCartItemView from "./components/ShoppingCart/LatestShoppingCartItemView.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showLatestShoppingCartItem, setShowLatestShoppingCartItem] =
    useState(false);
  const [latestShoppingCartItem, setLatestShoppingCartItem] = useState(null);

  useEffect(() => {
    if (latestShoppingCartItem) {
      console.log("Shopping cart updated:", shoppingCart);
      setShowLatestShoppingCartItem(true);
    }
  }, [latestShoppingCartItem]);

  console.log("Shopping cart:", shoppingCart);
  return (
    <>
      <NavBar shoppingCart={shoppingCart} />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/art"
            element={
              <Art
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                setLatestShoppingCartItem={setLatestShoppingCartItem}
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
      <LatestShoppingCartItemView
        showLatestShoppingCartItem={showLatestShoppingCartItem}
        setShowLatestShoppingCartItem={setShowLatestShoppingCartItem}
        latestShoppingCartItem={latestShoppingCartItem}
      />
    </>
  );
};

export default App;
