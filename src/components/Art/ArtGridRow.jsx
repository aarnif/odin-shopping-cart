import ArtGridItem from "./ArtGridItem";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const ArtGridRow = forwardRef(({ art, setArtItemIndex }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-[300px] flex-grow py-1 flex justify-center items-center"
    >
      <div className="h-full max-w-[1600px] flex-grow flex justify-center items-center">
        {art.map((artPiece, index) => (
          <ArtGridItem
            ref={ref}
            key={index}
            artPiece={artPiece}
            index={index}
            setArtItemIndex={setArtItemIndex}
          />
        ))}
      </div>
    </motion.div>
  );
});
ArtGridRow.displayName = "ArtGridRow";

export default ArtGridRow;
