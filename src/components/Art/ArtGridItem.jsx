import { useState, forwardRef } from "react";

const ArtGridItem = forwardRef(({ artPiece, index, setArtItemIndex }, ref) => {
  // console.log("Art piece width in pixels: ", artPiece.widthInPixels);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setArtItemIndex(index);
    ref.current.showModal();
  };

  const style = {
    width: `${artPiece.widthInPixels}px`,
    backgroundImage: `url(${artPiece.ImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="h-full flex-grow bg-slate-300 mx-1 flex justify-center items-center cursor-pointer"
      style={style}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {hovered ? (
        <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-900 bg-opacity-30 text-slate-200">
          <div>{artPiece.title}</div>
          <div>Click to expand</div>
        </div>
      ) : null}
    </div>
  );
});
ArtGridItem.displayName = "ArtGridItem";

export default ArtGridItem;
