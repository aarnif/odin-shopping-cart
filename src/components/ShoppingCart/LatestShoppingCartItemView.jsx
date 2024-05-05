import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";

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
          className="flex-grow min-h-[300px] max-w-[400px] mb-4 bg-slate-500 mx-1 flex justify-center items-center"
          style={style}
        >
          Image
        </div>
        <h1 className="flex-grow mb-4 text-2xl">
          {latestShoppingCartItem.title}
        </h1>
        <div className="flex-grow text-lg">
          Quantity: {latestShoppingCartItem.quantity}
        </div>
        <div className="flex-grow text-2xl">
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
    <AnimatePresence mode={"sync"}>
      {showLatestShoppingCartItem && (
        <motion.div
          key={"latestShoppingCartItemView"}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          initial={{ width: "0vw", opacity: 0 }}
          animate={{ width: "100vw", opacity: 1, duration: 1.0 }}
          exit={{ width: "0vw", opacity: 0, transition: { delay: 0.5 } }}
        >
          <motion.div
            key={"latestShoppingCartItem"}
            className="fixed top-0 bottom-0 right-0 h-screen w-full max-w-[500px] min-w-[300px] flex flex-col justify-start items-center bg-slate-100"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1, duration: 0.5 }}
            transition={{ delay: 1.0, type: "tween" }}
            exit={{ x: 1000, opacity: 0, transition: { delay: 0 } }}
          >
            <div className="w-full flex justify-center items-center py-6 mb-8 bg-green-400">
              <div className="w-[40px] h-[40px] mr-2 flex justify-center items-center bg-white rounded-full">
                <Icon path={mdiCheck} size={1.2} color={"rgb(74 222 128)"} />
              </div>
              <h1 className="text-white text-2xl font-bold text-center">
                Added following item to cart:
              </h1>
            </div>
            <AddItemContent latestShoppingCartItem={latestShoppingCartItem} />
            <div className="w-full m-4 flex flex-col items-center">
              <button
                onClick={closeLatestShoppingCartItemView}
                className="confirm-button"
              >
                <Link to={"/shopping_cart"}>{"Move to Shopping Cart"}</Link>
              </button>
              <button
                onClick={closeLatestShoppingCartItemView}
                className="cancel-button"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LatestShoppingCartItemView;
