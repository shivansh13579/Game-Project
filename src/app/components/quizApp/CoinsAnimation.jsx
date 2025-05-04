import { motion } from "framer-motion";

const CoinsAnimation = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-[1000px]">
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.img
        key={i}
        src="/coin.png"
        alt="coin"
        initial={{
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotate: -45,
        }}
        animate={{
          x: "50vw", // simulate flying right
          y: "-60vh", // simulate flying up
          scale: 0.2, // scale down to simulate depth
          opacity: 0,
          rotate: 0,
        }}
        transition={{ duration: 1, delay: i * 0.1, ease: "easeInOut" }}
        className="w-8 h-8 absolute bottom-[50%] left-[60%] -translate-x-1/2"
        style={{
          transformOrigin: "center",
        }}
      />
    ))}
  </div>
);

export default CoinsAnimation;
