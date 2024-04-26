import { forwardRef, useState } from "react";

const SingleArtImageView = ({
  handleMoveToPreviousImage,
  handleMoveToNextImage,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-full flex-grow basis-2/3">
      <div
        className="h-full w-full bg-slate-400 flex justify-center items-center"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {hovered && (
          <div className="flex-grow flex justify-center items-center">
            <ul className="flex-grow flex justify-between items-center px-8">
              <li>
                <button onClick={handleMoveToPreviousImage}>Previous</button>
              </li>
              <li>Image</li>
              <li>
                <button onClick={handleMoveToNextImage}>Next</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const SingleArtItemDetails = forwardRef(({ art }, ref) => {
  const closeDialog = () => {
    ref.current.close();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Item added to cart");
    closeDialog();
  };

  return (
    <div className="h-full flex-grow basis-1/3 flex flex-col justify-between px-8">
      <div>
        <h1 className="text-center">{art.title}</h1>
        <h2 className="text-center">By {art.artist}</h2>
      </div>
      <div>
        <h3 className="text-center">{art.description}</h3>
      </div>
      <div>
        <h3 className="text-center">
          All of our prints are individually printed and hand signed by the
          artist.
        </h3>
      </div>
      <div>
        <form>
          <ul>
            <li>
              <ul className="flex justify-around items-center">
                <li>
                  <label htmlFor="size">Size:</label>
                </li>
                <li>
                  <select name="size" defaultValue={"medium"}>
                    <option value="small">
                      Small ({art.width * 0.5} x {art.height * 0.5} inches)
                    </option>
                    <option value="medium">
                      Medium ({art.width} x {art.height} inches)
                    </option>
                    <option value="large">
                      Large ({art.width * 2} x {art.height * 2} inches)
                    </option>
                  </select>
                </li>
              </ul>
            </li>

            <li>
              <ul className="flex justify-around items-center">
                <li>
                  <label htmlFor="quantity">Quantity:</label>
                </li>
                <li>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue={1}
                  />
                </li>
              </ul>
            </li>

            <li>
              <ul className="flex justify-around items-center">
                <li>
                  <button type="button" onClick={closeDialog}>
                    Cancel
                  </button>
                </li>
                <li>
                  <button type="submit" onClick={handleSubmit}>
                    Add to cart
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
});
SingleArtItemDetails.displayName = "SingleArtItemDetails";

const SingleArtItemView = forwardRef(
  ({ art, handleMoveToPreviousImage, handleMoveToNextImage }, ref) => {
    return (
      <dialog id="dialog" ref={ref}>
        <div className="w-full flex justify-between items-center p-12">
          <SingleArtImageView
            handleMoveToPreviousImage={handleMoveToPreviousImage}
            handleMoveToNextImage={handleMoveToNextImage}
          />
          <SingleArtItemDetails ref={ref} art={art} />
        </div>
      </dialog>
    );
  }
);
SingleArtItemView.displayName = "SingleArtItemView";

export default SingleArtItemView;
