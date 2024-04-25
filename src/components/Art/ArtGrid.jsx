import ArtGridRow from "./ArtGridRow";

const ArtGrid = ({ art }) => {
  const artRows = [];
  const gridRowWidthInPixels = 1600;
  const gridRowHeightInPixels = 400;
  let index = 0;

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
    <div className="w-full flex-grow flex flex-col justify-center items-center">
      {artRows.map((row, index) => (
        <ArtGridRow key={index} art={row} />
      ))}
    </div>
  );
};

export default ArtGrid;
