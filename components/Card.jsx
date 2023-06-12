import { motion } from "framer-motion";
import clsx from "clsx";

const Card = ({ className, image, title, description, children }) => {
  return (
    <motion.div
      className={clsx(
        "rounded-lg shadow-lg ring-1 ring-white/10 bg-gray-900/1",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {image && (
        <div
          className="h-48 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {title && description && (
        <div className="p-4">
          {title && <div className="font-bold text-lg mb-2">{title}</div>}
          {description && (
            <p className="text-gray-500 text-base">{description}</p>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
