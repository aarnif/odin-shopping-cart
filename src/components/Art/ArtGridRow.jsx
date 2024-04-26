import ArtGridItem from "./ArtGridItem";
import { forwardRef } from "react";

const ArtGridRow = forwardRef(({ art, setArtItemIndex }, ref) => {
  return (
    <div className="w-full h-[300px] flex-grow py-1 flex justify-center items-center">
      <div className="h-full max-w-[1600px] flex-grow flex justify-center items-center">
        {art.map((artPiece) => (
          <ArtGridItem
            ref={ref}
            key={artPiece.id}
            artPiece={artPiece}
            setArtItemIndex={setArtItemIndex}
          />
        ))}
      </div>
    </div>
  );
});
ArtGridRow.displayName = "ArtGridRow";

export default ArtGridRow;
