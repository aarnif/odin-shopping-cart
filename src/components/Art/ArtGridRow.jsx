import ArtGridItem from "./ArtGridItem";

const ArtGridRow = ({ art }) => {
  return (
    <div className="w-full h-[300px] flex-grow py-1 flex justify-center items-center">
      <div className="h-full max-w-[1600px] flex-grow flex justify-center items-center">
        {art.map((artPiece) => (
          <ArtGridItem key={artPiece.id} artPiece={artPiece} />
        ))}
      </div>
    </div>
  );
};

export default ArtGridRow;
