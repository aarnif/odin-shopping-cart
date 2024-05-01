import { forwardRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

const SingleArtItemDetails = forwardRef(
  ({ art, shoppingCart, setShoppingCart, setLatestShoppingCartItem }, ref) => {
    const closeDialog = () => {
      ref.current.close();
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Item added to cart");
      const chosenSize = event.target.size.value;
      const quantity = event.target.quantity.value;

      const newItem = {
        ...art,
        id: uuidv4(), // Generate a unique id for the item so that removing same item with different sizes works correctly
        quantity: quantity,
        chosenSize: chosenSize,
        size: { [chosenSize]: art.size[chosenSize] },
      };

      setLatestShoppingCartItem(newItem);

      const checkIfItemWithSameSizeAndTitleInCart = shoppingCart.find(
        (item) => item.title === art.title && item.chosenSize === chosenSize
      );

      if (checkIfItemWithSameSizeAndTitleInCart) {
        const updatedCart = shoppingCart.map((item) =>
          item.title === art.title && item.chosenSize === chosenSize
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        );
        setShoppingCart(updatedCart);
      } else {
        setShoppingCart((prev) => [...prev, newItem]);
      }
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
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <ul className="flex justify-around items-center">
                  <li>
                    <label htmlFor="size">Size:</label>
                  </li>
                  <li>
                    <select name="size" defaultValue={"medium"}>
                      <option value="small">
                        Small ({art.size.small.width} x {art.size.small.height}{" "}
                        inches)
                      </option>
                      <option value="medium">
                        Medium ({art.size.medium.width} x{" "}
                        {art.size.medium.height} inches)
                      </option>
                      <option value="large">
                        Large ({art.size.large.width} x {art.size.large.height}{" "}
                        inches)
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
                    <button type="submit">Add to cart</button>
                  </li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
);
SingleArtItemDetails.displayName = "SingleArtItemDetails";

const SingleArtItemView = forwardRef(
  (
    {
      art,
      handleMoveToPreviousImage,
      handleMoveToNextImage,
      shoppingCart,
      setShoppingCart,
      setLatestShoppingCartItem,
    },
    ref
  ) => {
    return (
      <dialog id="single-art-item-modal" ref={ref}>
        <div className="w-full flex justify-between items-center p-12">
          <SingleArtImageView
            handleMoveToPreviousImage={handleMoveToPreviousImage}
            handleMoveToNextImage={handleMoveToNextImage}
          />
          <SingleArtItemDetails
            ref={ref}
            art={art}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            setLatestShoppingCartItem={setLatestShoppingCartItem}
          />
        </div>
      </dialog>
    );
  }
);
SingleArtItemView.displayName = "SingleArtItemView";

export default SingleArtItemView;
