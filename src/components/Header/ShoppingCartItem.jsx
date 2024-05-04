import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { motion } from "framer-motion";

const ShoppingCartItem = ({ shoppingCartItemCount }) => {
  return (
    <li className="flex min-w-[80px]">
      <Link to={"/shopping_cart"}>
        <motion.div
          whileHover={{ rotate: [0, -30, 30, 0] }}
          whileTap={{ scale: 0.9 }}
          style={{ rotate: 0 }}
        >
          <Icon path={mdiCartOutline} size={1.5} />
        </motion.div>
      </Link>
      <Link to={"/shopping_cart"}>
        {shoppingCartItemCount > 0 && (
          <motion.div
            key={shoppingCartItemCount}
            animate={{ scale: [1, 1.3, 1], duration: 0.1 }}
            className="z-20 relative top-[20px] right-[20px] w-[24px] h-[24px] ml-2 flex justify-center items-center bg-green-300 rounded-full shadow-xl text-lg font-body font-semibold"
          >
            {shoppingCartItemCount}
          </motion.div>
        )}
      </Link>
    </li>
  );
};

export default ShoppingCartItem;
