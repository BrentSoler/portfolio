import { useEffect, useState } from "react";
import Badge from "./badge";
import * as motion from "framer-motion/client";
import { TProject } from "../types/project-types";

const colors = ["bgred", "bggreen", "bgblue", "bgpurple"];

export default function ProjectCard({
  project,
  onClick,
}: {
  project: TProject;
  onClick: () => void;
}) {
  const [color, setColor] = useState("");
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    setColor(`${colors[Math.floor(Math.random() * colors.length)]}`);
    setDeg(Math.floor(Math.random() * (5 - -5 + 1)) + -5);
  }, []);

  return (
    <motion.div
      className={`w-[280px] h-[474px] border-black border-[1px] flex flex-col ${color} cursor-pointer overflow-hidden`}
      initial={{
        translateY: 100,
        rotateZ: 0,
      }}
      animate={{
        translateY: [50, 0, 0],
        rotateZ: [0, 0, deg],
      }}
      whileHover={{
        translateY: -50,
        rotateZ: 0,
      }}
      transition={{ type: "keyframes" }}
      onClick={onClick}
    >
      <div className="min-h-[165px] border-black border-b-[1px]">
        <img
          src={`${import.meta.env.BASE_URL}resource/${project.proj_img}`}
          alt="Project cover"
          className="w-full h-full"
        />
      </div>

      <div className={`p-2 `}>
        <h1 className="text-[20px]">{project.proj_type}</h1>
        <h1 className="text-[80px] leading-[4rem] mt-3">{project.proj_name}</h1>

        <div className="flex gap-1 mt-8">
          {project.proj_tools.map((tool) => (
            <Badge title={tool} />
          ))}
        </div>
      </div>

      <div className="h-full flex items-end justify-end">
        <div
          className={`justify-end self-end border-t-[1px] border-l-[1px] border-black flex flex-col mono text-[12px] font-bold w-[8rem] p-1 items-end min-h-[4rem] mt-2`}
        >
          <div className="self-start">
            <div>{"<View "}</div>
            <div>{"Code/>"}</div>
          </div>
          <svg
            width="80"
            height="15"
            viewBox="0 0 86 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.63 8.25081C86.0205 7.86028 86.0205 7.22712 85.63 6.83659L79.266 0.472633C78.8755 0.0821091 78.2423 0.0821091 77.8518 0.472633C77.4613 0.863158 77.4613 1.49632 77.8518 1.88685L83.5086 7.5437L77.8518 13.2006C77.4613 13.5911 77.4613 14.2242 77.8518 14.6148C78.2423 15.0053 78.8755 15.0053 79.266 14.6148L85.63 8.25081ZM0.922852 8.5437H84.9229V6.5437L0.922852 6.5437V8.5437Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
