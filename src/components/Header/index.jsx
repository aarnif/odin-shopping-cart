import LinkItem from "./LinkItem";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";

const Header = ({ shoppingCart }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [showHeader, setShowHeader] = useState(0);
  const headerHeightInPixels = 60;
  const headerBuffer = 5;

  useMotionValueEvent(scrollY, "change", () => {
    console.log("Show header:", showHeader);
    console.log("Scroll Y:", scrollY.current);
    console.log("Scroll Y progress:", scrollYProgress.current.toFixed(2));

    if (scrollY.current <= 60) {
      console.log("Page at near top");
      setShowHeader(0);
    } else if (scrollYProgress.current.toFixed(2) >= 0.95) {
      console.log("Page at bottom");
      setShowHeader(-headerHeightInPixels);
    } else if (
      scrollY.current > scrollY.prev &&
      showHeader > -headerHeightInPixels - headerBuffer // Make sure that header is totally hidden by using -5 pixels as buffer
    ) {
      console.log("Page scrolling down");
      setShowHeader((prevState) => prevState - 3);
    } else if (showHeader < 0) {
      console.log("Page scrolling up");
      setShowHeader((prevState) => prevState + 3);
    }
  });

  const shoppingCartItemCount = shoppingCart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  console.log("Shopping cart item count:", shoppingCartItemCount);

  return (
    <motion.header
      className="fixed w-full flex justify-center items-center bg-slate-300"
      style={{
        height: headerHeightInPixels,
        translateY: showHeader,
      }}
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
