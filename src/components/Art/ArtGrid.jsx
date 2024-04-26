import { useState, useRef } from "react";
import ArtGridRow from "./ArtGridRow";
import SingleArtItemView from "./SingleArtItemView";

const ArtGrid = ({ art }) => {
  const dialogRef = useRef(null);
  const [artItemIndex, setArtItemIndex] = useState(0);
  const artRows = [];
  const gridRowWidthInPixels = 1600;
  const gridRowHeightInPixels = 400;
  let index = 0;

  const handleMoveToPreviousImage = () => {
    const newIndexValue =
      artItemIndex === 0 ? art.length - 1 : artItemIndex - 1;
    setArtItemIndex(newIndexValue);
    console.log("Previous image:", art[newIndexValue].title);
  };

  const handleMoveToNextImage = () => {
    const newIndexValue =
      artItemIndex === art.length - 1 ? 0 : artItemIndex + 1;
    setArtItemIndex(newIndexValue);
    console.log("Next image:", art[newIndexValue].title);
  };

  while (index < art.length) {
    let artRow = [];
    let artRowWidth = 0;

    while (artRowWidth < gridRowWidthInPixels && index < art.length) {
      const aspectRatio = art[index].width / art[index].height;
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
      <div className="w-full flex-grow flex flex-col justify-center items-center">
        {artRows.map((row, index) => (
          <ArtGridRow
            ref={dialogRef}
            key={index}
            art={row}
            setArtItemIndex={setArtItemIndex}
          />
        ))}
      </div>
      <SingleArtItemView
        ref={dialogRef}
        art={art[artItemIndex]}
        handleMoveToPreviousImage={handleMoveToPreviousImage}
        handleMoveToNextImage={handleMoveToNextImage}
      />
    </>
  );
};

export default ArtGrid;
