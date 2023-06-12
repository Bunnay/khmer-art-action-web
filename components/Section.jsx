import { motion } from "framer-motion";

const Section = ({ className, title, text, description, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative isolate pb-12 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            {title && (
              <h2 className="text-lg font-semibold text-primary leading-8 tracking-tight">
                {title}
              </h2>
            )}
            {text && (
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {text}
              </p>
            )}
            {description && (
              <p className="mt-2 text-xl tracking-tight text-gray-500">
                {description}
              </p>
            )}
          </div>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
