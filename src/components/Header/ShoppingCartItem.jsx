import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { motion } from "framer-motion";

const ShoppingCartItem = ({ shoppingCartItemCount }) => {
  return (
    <li className="flex min-w-[80px]">
      <Link to={"/shopping_cart"}>
        <button
          className="p-1 rounded-full border-2 border-white hover:border-green-600 active:scale-95 transition
        dark:border-slate-900"
        >
          <Icon path={mdiCartOutline} size={1.4} />
        </button>
      </Link>

      {shoppingCartItemCount > 0 && (
        <motion.div
          key={shoppingCartItemCount}
          animate={{ scale: [1, 1.3, 1], duration: 0.1 }}
          className="z-20 relative top-[20px] right-[20px] w-[24px] h-[24px] ml-2 flex justify-center items-center
            bg-green-300 rounded-full shadow-xl text-lg font-body font-semibold dark:text-slate-900"
        >
          {shoppingCartItemCount}
        </motion.div>
      )}
    </li>
  );
};

export default ShoppingCartItem;
