import { motion } from "framer-motion";
import Section from "../Section";

const images = [
  "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
];

export default function Sponsors() {
  return (
    <Section
      title="Sponsors"
      text="Trusted by the world’s most innovative teams"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-6 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              {images.map((img, index) => (
                <motion.div
                  key={img}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/5 p-6 sm:p-10" key={img}>
                    <picture>
                      <img
                        className="max-h-12 w-full object-contain"
                        src={img}
                        alt="Tuple"
                        height={48}
                      />
                    </picture>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
