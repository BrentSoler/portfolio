import AboutBG from "../components/about-bg";
import Links from "../components/links";
import Pic from "../assets/brent.jpg";
import * as motion from "framer-motion/client";

export default function AboutMe() {
  return (
    <div className="h-screen overflow-hidden w-screen">
      <Links className="top-0 z-[999]" />
      <AboutBG />

      <div className="z-[990] absolute top-0 flex justify-between w-full overflow-hidden items-center h-full flex-col md:flex-row">
        <div className="w-full text-center md:text-left md:w-[57vw] p-8 ">
          <motion.h1
            className="text-[2rem] md:text-[2.7rem] font-bold leading-[2rem] md:leading-tight"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
          >
            Hi, I'm Brent Soler{""}
            <motion.span
              className="w-min inline-block origin-bottom"
              animate={{
                rotateZ: [-10, 10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              👋
            </motion.span>
            , a software engineer with three years of experience based in{" "}
            <span className="text-[#78A083]">Makati, Philippines</span>. I
            specialize in developing user-friendly with clean UI and
            high-performance software solutions, including{" "}
            <span className="text-[#9678A0]">
              web applications, websites, and desktop applications.
            </span>
          </motion.h1>
        </div>
        <motion.div
          className="w-[17rem] h-[30rem] md:w-[35vw] md:max-w-[420px] md:h-[95vh] border-[18px] border-[#A08478]"
          initial={{
            position: "absolute",
            right: -300,
            rotateZ: 0,
          }}
          animate={{
            position: "relative",
            right: [-300, 10, 0],
            rotateZ: [0, -11],
          }}
          transition={{ type: "spring", duration: 1 }}
        >
          <img src={Pic} className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}
