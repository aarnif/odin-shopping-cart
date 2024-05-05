import utils from "../../utils";
import ArtGridRow from "./ArtGridRow";
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
  const artRows = [];
  const gridRowWidthInPixels = 1600;
  const gridRowHeightInPixels = 400;
  let index = 0;

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

  while (index < art.length) {
    let artRow = [];
    let artRowWidth = 0;

    while (artRowWidth < gridRowWidthInPixels && index < art.length) {
      const aspectRatio = utils.calculateAspectRatio(
        art[index].size.small.width,
        art[index].size.small.height
      );
      const artWidth = gridRowHeightInPixels * aspectRatio;

      art[index].widthInPixels = Math.round(artWidth);

      if (artRowWidth + artWidth <= gridRowWidthInPixels) {
        artRow.push(art[index]);
        artRowWidth += artWidth;
        index++;
      } else {
        break;
      }
    }

    artRows.push(artRow);
  }

  return (
    <>
      <h1 className="w-full flex-grow text-2xl text-center mb-12">Art Works</h1>
      <div className="w-full flex-grow flex flex-col justify-center items-center">
        {artRows.map((row, index) => (
          <ArtGridRow
            ref={singleArtViewRef}
            key={index}
            art={row}
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
