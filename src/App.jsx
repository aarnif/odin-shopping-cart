import dataService from "./services/dataService";
import Header from "./components/Header/index.jsx";
import Hero from "./components/Hero.jsx";
import Home from "./components/Home.jsx";
import Art from "./components/Art/index.jsx";
import ShoppingCart from "./components/ShoppingCart/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import LatestShoppingCartItemView from "./components/ShoppingCart/LatestShoppingCartItemView.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [art, setArt] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showLatestShoppingCartItem, setShowLatestShoppingCartItem] =
    useState(false);
  const [latestShoppingCartItem, setLatestShoppingCartItem] = useState(null);
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  const handleChangeHeroImage = () => {
    console.log("Changing hero image...");
    console.log("Art:", art);
    setRandomArtPiece(
      art.filter((art) => art.type === "landscape")[
        Math.floor(
          Math.random() * art.filter((art) => art.type === "landscape").length
        )
      ]
    );
  };

  useEffect(() => {
    dataService.getAll().then((data) => {
      console.log(data);
      setArt(data);
    });
  }, []);

  useEffect(() => {
    handleChangeHeroImage();
  }, [art]);

  useEffect(() => {
    if (latestShoppingCartItem) {
      console.log("Shopping cart updated:", shoppingCart);
      setShowLatestShoppingCartItem(true);
    }
  }, [latestShoppingCartItem]);

  console.log("Shopping cart:", shoppingCart);
  console.log("Random art piece:", randomArtPiece);

  return (
    <>
      <Header
        shoppingCart={shoppingCart}
        handleChangeHeroImage={handleChangeHeroImage}
      />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Hero randomArtPiece={randomArtPiece} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/art"
            element={
              <Art
                art={art}
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
