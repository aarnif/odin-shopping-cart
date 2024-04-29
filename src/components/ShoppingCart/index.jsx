import utils from "../../utils";
import Hero from "../Hero";
import { useState } from "react";

const ShoppingCartHeaderRow = () => {
  return (
    <thead>
      <tr>
        <th className="w-[500px]">Product</th>
        <th>Title</th>
        <th>Size</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
  );
};

const ShoppingCartItem = ({ item, setShoppingCart, setTotalSumOfItems }) => {
  console.log("Shopping cart item:", item);
  const aspectRatio = utils.calculateAspectRatio(
    item.size[item.chosenSize].width,
    item.size[item.chosenSize].height
  );
  const [quantity, setQuantity] = useState(Number(item.quantity));

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    item.quantity = quantity + 1;
    setTotalSumOfItems((prevTotalSum) => prevTotalSum + item.price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity - 1 === 0) {
      setShoppingCart((prevShoppingCart) =>
        prevShoppingCart.filter((cartItem) => cartItem.id !== item.id)
      );
      setTotalSumOfItems((prevTotalSum) => prevTotalSum - item.price);
      return;
    }

    setQuantity(quantity - 1);
    item.quantity = quantity - 1;
    setTotalSumOfItems((prevTotalSum) => prevTotalSum - item.price);
  };
  return (
    <tr>
      <td className="w-[500px] flex justify-center items-center my-8">
        <div
          className="bg-slate-400"
          style={{ height: 150, width: 150 * aspectRatio }}
        ></div>
      </td>
      <td className="text-center">{item.title}</td>
      <td className="text-center">
        {item.chosenSize} ({item.size[item.chosenSize].width} x{" "}
        {item.size[item.chosenSize].height} inches)
      </td>
      <td className="text-center">{item.price}</td>
      <td className="text-center">
        <div className="flex justify-around items-center">
          <button onClick={handleIncreaseQuantity}>+</button>
          <div>{quantity}</div>
          <button onClick={handleDecreaseQuantity}>-</button>
        </div>
      </td>
      <td className="text-center">{item.price * quantity} $</td>
    </tr>
  );
};

const ShoppingCartItems = ({
  shoppingCart,
  setShoppingCart,
  setTotalSumOfItems,
}) => {
  return (
    <>
      <h1 className="text-center">Shopping Cart</h1>
      {!shoppingCart.length ? (
        <div className="flex-grow text-center mt-8">
          Your shopping cart is empty.
        </div>
      ) : (
        <table>
          <ShoppingCartHeaderRow />
          <tbody>
            {shoppingCart.map((item, index) => (
              <ShoppingCartItem
                key={index}
                item={item}
                setShoppingCart={setShoppingCart}
                setTotalSumOfItems={setTotalSumOfItems}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  const [totalSumOfItems, setTotalSumOfItems] = useState(
    shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  return (
    <>
      <Hero />
      <div className="w-full flex-grow max-w-[1600px] my-24 flex flex-col">
        <ShoppingCartItems
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          setTotalSumOfItems={setTotalSumOfItems}
        />
        <div className="flex justify-end">
          <div className="flex flex-col justify-around">
            <div>Total {totalSumOfItems} $</div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
