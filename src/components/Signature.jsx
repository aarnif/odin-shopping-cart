import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Signature = () => {
  return (
    <>
      <h3 className="text-xl px-2">Created By aarnif</h3>
      <motion.div
        whileHover={{
          scale: 1.5,
          rotate: 360,
        }}
        transition={{ duration: 0.5 }}
      >
        <a href="https://github.com/aarnif" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "black" }}
            size={"xl"}
          />
        </a>
      </motion.div>
    </>
  );
};

export default Signature;
