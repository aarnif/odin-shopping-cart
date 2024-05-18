import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import { motion } from "framer-motion";

const LoadingIcon = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 90, 180, 270, 360] }}
      transition={{ repeat: Infinity }}
    >
      <Icon path={mdiLoading} size={3} />
    </motion.div>
  );
};

export default LoadingIcon;
