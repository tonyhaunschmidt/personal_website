"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-screen bg-blue-500 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Congrats! You found the secret!</p>
      </motion.div>
    </div>
  );
}
