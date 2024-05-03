import LinkItem from "./LinkItem";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";

const Header = ({ shoppingCart }) => {
  const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const headerHeightInPixels = 60;

  useMotionValueEvent(scrollY, "change", () => {
    console.log("Scroll Y:", scrollY.current);
    if (
      scrollY.current > scrollY.prev &&
      scrollY.current >= headerHeightInPixels
    ) {
      console.log("Page scrolling down");
      setShowHeader(false);
    } else {
      console.log("Page scrolling up");
      setShowHeader(true);
    }
  });

  const shoppingCartItemCount = shoppingCart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  console.log("Shopping cart item count:", shoppingCartItemCount);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -headerHeightInPixels },
      }}
      animate={showHeader ? "visible" : "hidden"}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="fixed w-full flex justify-center items-center bg-slate-300"
      style={{ height: headerHeightInPixels }}
    >
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
    </motion.header>
  );
};

export default Header;
