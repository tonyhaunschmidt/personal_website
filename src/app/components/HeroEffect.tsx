"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroEffect() {
  const [secretFound, setSecretFound] = useState(false);
  const router = useRouter();

  function Square({
    secret,
    secretFound,
    setSecretFound,
  }: {
    secret: boolean;
    secretFound: boolean;
    setSecretFound: (secred: boolean) => void;
  }) {
    const [hover, setHover] = useState(false);

    const hoverTimeout = () => {
      setHover(true);
      setTimeout(() => {
        setHover(false);
      }, 1500);
    };

    const hoverStyles = clsx({
      "group-hover:delay-0 group-hover:opacity-100": hover,
    });

    const handleFoundSecret = () => {
      setSecretFound(true);
      setTimeout(() => {
        router.push("/game");
      }, 1500);
    };

    return (
      <div
        onMouseEnter={hoverTimeout}
        className="group aspect-square relative h-28"
      >
        {secret ? (
          <div className="absolute rounded-lg inset-0 bg-dprimary dark:bg-primary group-hover:opacity-100 delay-300 group-hover:delay-0 opacity-0 ease-in-out duration-300 transition-all">
            <AnimatePresence>
              {secretFound && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 100 }}
                  transition={{ duration: 5 }}
                  className="z-10 bg-blue-500 rounded-lg absolute inset-0"
                />
              )}
            </AnimatePresence>
            <div className="absolute rounded-lg inset-0 bg-blue-500 group-hover:delay-[7000ms] group-hover:opacity-100 opacity-0 ease-in-out duration-300 transition-all">
              <div
                onClick={handleFoundSecret}
                className="w-0 relative h-0 rounded-lg group-hover:w-full group-hover:h-full group-hover:delay-[7000ms] hover:cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <div
            className={`${hoverStyles} absolute rounded-lg inset-0 bg-dprimary dark:bg-primary delay-300 opacity-0 ease-in-out duration-300 transition-all`}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`${
        secretFound && "z-50"
      } absolute [@media(pointer:fine)]:block hidden inset-0 overflow-hidden`}
    >
      <div className="w-[calc(100%+248px)] -mx-32 h-full flex flex-wrap justify-center">
        {Array(500)
          .fill(null)
          .map((n, index) => (
            <Square
              key={index}
              secretFound={secretFound}
              setSecretFound={setSecretFound}
              secret={index === 4}
            />
          ))}
      </div>
    </div>
  );
}
