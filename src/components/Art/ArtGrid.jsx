import ArtGridItem from "./ArtGridItem";
import SingleArtItemView from "./SingleArtItemView";
import { useState, useRef } from "react";

const ArtGrid = ({
  art,
  shoppingCart,
  setShoppingCart,
  setLatestShoppingCartItem,
}) => {
  const singleArtViewRef = useRef(null);
  const [artItemIndex, setArtItemIndex] = useState(0);

  const handleMoveToPreviousImage = () => {
    console.log("Previous image clicked");
    const newIndexValue =
      artItemIndex === 0 ? art.length - 1 : artItemIndex - 1;
    console.log("New index value:", newIndexValue);
    setArtItemIndex(newIndexValue);
    console.log("Previous image:", art[newIndexValue].title);
  };

  const handleMoveToNextImage = () => {
    console.log("Next image clicked");
    const newIndexValue =
      artItemIndex === art.length - 1 ? 0 : artItemIndex + 1;
    console.log("New index value:", newIndexValue);
    setArtItemIndex(newIndexValue);
    console.log("Next image:", art[newIndexValue].title);
  };

  return (
    <>
      <h1 className="w-full mb-12 flex-grow text-2xl text-center font-bold">
        Art Works
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center">
        {art.map((artPiece, index) => (
          <ArtGridItem
            ref={singleArtViewRef}
            key={index}
            artPiece={artPiece}
            index={index}
            setArtItemIndex={setArtItemIndex}
          />
        ))}
      </div>
      <SingleArtItemView
        ref={singleArtViewRef}
        art={art[artItemIndex]}
        handleMoveToPreviousImage={handleMoveToPreviousImage}
        handleMoveToNextImage={handleMoveToNextImage}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        setLatestShoppingCartItem={setLatestShoppingCartItem}
      />
    </>
  );
};

export default ArtGrid;
