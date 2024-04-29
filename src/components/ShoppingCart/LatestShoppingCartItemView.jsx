import { Link } from "react-router-dom";

const AddItemContent = ({ latestShoppingCartItem }) => {
  const style = {
    width: `${latestShoppingCartItem.widthInPixels}px`,
    backgroundImage: `url(${latestShoppingCartItem.ImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex-grow">
      <div className="flex-grow flex flex-col">
        <div
          className="flex-grow min-h-[200px] max-w-[300px] bg-slate-500 mx-1 flex justify-center items-center"
          style={style}
        ></div>
        <div className="flex-grow">{latestShoppingCartItem.title}</div>
        <div className="flex-grow">
          Quantity: {latestShoppingCartItem.quantity}
        </div>
        <div className="flex-grow text-xl">
          {latestShoppingCartItem.price * latestShoppingCartItem.quantity} $
        </div>
      </div>
    </div>
  );
};

const LatestShoppingCartItemView = ({
  showLatestShoppingCartItem,
  setShowLatestShoppingCartItem,
  latestShoppingCartItem,
}) => {
  const closeLatestShoppingCartItemView = () => {
    console.log("Close latest shopping cart item view.");
    setShowLatestShoppingCartItem(false);
  };
  return (
    <>
      {showLatestShoppingCartItem && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 bottom-0 right-0 h-screen w-full max-w-[500px] min-w-[300px] flex flex-col justify-start items-center bg-slate-200">
            <h1>Added following item to cart:</h1>
            <AddItemContent latestShoppingCartItem={latestShoppingCartItem} />
            <div className="w-full flex flex-col items-center">
              <button onClick={closeLatestShoppingCartItemView}>
                <Link to={"/shopping_cart"}>{"Show Cart"}</Link>
              </button>
              <button onClick={closeLatestShoppingCartItemView}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LatestShoppingCartItemView;
