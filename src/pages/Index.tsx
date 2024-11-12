import PlusSvg from "../assets/svg/plus";
import { useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import Links from "../components/links";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function Index() {
  const el = useRef<HTMLDivElement | null>(null);

  function move(e: MouseEvent) {
    if (!el.current) return;

    const rect = el.current.getBoundingClientRect();
    const radius = 1000;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rangeX = (e.clientX - centerX) / radius;
    const rangeY = (e.clientY - centerY) / radius;

    const translationIntensity = 24;
    const maxTranslation = translationIntensity * 2;
    const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;

    el.current.animate(
      {
        translate: currentTranslation,
      },
      { duration: 3000, fill: "forwards", easing: "ease" },
    );
  }

  useEffect(() => {
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <Links className="top-0 z-[999]" />
      <div className="h-screen w-screen grid place-items-center relative overflow-hidden">
        <motion.div
          className="absolute right-[20px] top-[20px] md:right-[30px] md:top-[30px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-end">
            <PlusSvg />
            <PlusSvg />
            <PlusSvg />
          </div>
          <div className="flex items-center justify-end">
            <PlusSvg />
            <PlusSvg />
          </div>
          <div className="flex items-center justify-end">
            <PlusSvg />
          </div>
        </motion.div>

        <div className="text-[#78A083] leading-[7rem] md:leading-[10rem] absolute pointer-events-none text-center">
          <motion.h1
            className="text-[200px] md:text-[450px] text-transparent outline-stroke"
            initial={{ right: 150, position: "absolute" }}
            animate={{
              right: 0,
              position: "relative",
            }}
          >
            Brent
          </motion.h1>
          <motion.h1
            className="text-[200px] md:text-[450px] md:ml-[110px]"
            initial={{ left: 150, position: "absolute" }}
            animate={{
              left: 0,
              position: "relative",
            }}
          >
            Soler
          </motion.h1>
        </div>

        <div
          className={`text-black text-[23px] md:text-[30px] flex flex-col items-center fixed leading-[2rem] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]`}
          ref={el}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Brent Stephen D. Soler
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Software Engineer
          </motion.p>
        </div>

        <motion.div
          className="absolute left-[20px] bottom-[20px] md:left-[30px] md:bottom-[30px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center">
            <PlusSvg />
          </div>
          <div className="flex items-center">
            <PlusSvg />
            <PlusSvg />
          </div>
          <div className="flex items-center">
            <PlusSvg />
            <PlusSvg />
            <PlusSvg />
          </div>
        </motion.div>
      </div>
    </>
  );
}
