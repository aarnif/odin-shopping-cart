import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArtGridItem = forwardRef(({ artPiece, index, setArtItemIndex }, ref) => {
  const handleClick = () => {
    setArtItemIndex(index);
    ref.current.showModal();
  };

  const variants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="h-full flex-grow bg-slate-300 mx-1 flex justify-center items-center cursor-pointer"
        style={{
          backgroundImage: `url(${artPiece.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial="hidden"
        whileHover="hover"
        onClick={handleClick}
      >
        <motion.div
          variants={variants}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full flex flex-col justify-center items-center bg-slate-900 bg-opacity-30 text-slate-200 text-xl"
        >
          <div>{artPiece.title}</div>
          <div>Click to expand</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});
ArtGridItem.displayName = "ArtGridItem";

export default ArtGridItem;
