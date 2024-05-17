import { motion } from "framer-motion";

const Hero = ({ randomArtPiece }) => {
  if (!randomArtPiece) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      key={randomArtPiece.title}
      className="w-full flex-grow h-[700px] mt-[60px] flex justify-center items-center bg-slate-500"
      style={{
        backgroundImage: randomArtPiece
          ? `url(${randomArtPiece.image})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  );
};

export default Hero;
