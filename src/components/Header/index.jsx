import LinkItem from "./LinkItem";

const Header = ({ shoppingCart }) => {
  const shoppingCartItemCount = shoppingCart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  console.log("Shopping cart item count:", shoppingCartItemCount);

  return (
    <header className="w-full py-4 px-12 flex justify-center items-center">
      <nav className="flex-grow flex justify-between items-center">
        <h1 className="flex-grow text-xl text-center">Art Store</h1>
        <ul className="max-w-[600px] flex-grow flex justify-around items-center">
          <LinkItem to={"/"} itemName={"Home"} />
          <LinkItem to={"/art"} itemName={"Art"} />
          <LinkItem to={"/contact"} itemName={"Contact"} />
          <LinkItem
            to={"/shopping_cart"}
            itemName={"Shopping Cart"}
            shoppingCartItemCount={shoppingCartItemCount}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;