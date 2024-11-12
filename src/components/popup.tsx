import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";
import Badge from "./badge";
import { TProject } from "../types/project-types";
import { text } from "stream/consumers";
import { p } from "framer-motion/m";

const colors = ["bgred", "bggreen", "bgblue", "bgpurple"];

export default function Popup({
  open,
  onClick,
  project,
}: {
  open: boolean;
  onClick: () => void;
  project: TProject;
}) {
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(`${colors[Math.floor(Math.random() * colors.length)]}`);
  }, [open]);
  return (
    <>
      {open && (
        <>
          <div
            className={`fixed top-0 h-full w-full bg-black opacity-[.3]`}
            onClick={onClick}
          ></div>
          <motion.div
            className={`w-full md:w-[80vw] ${color} h-[95vh] absolute bottom-0 translate-x-[-50%] left-[50%] border-black border-[1px]`}
            initial={{
              bottom: -300,
            }}
            animate={{
              bottom: 0,
            }}
          >
            <div className="min-h-[20rem] max-h-[20rem] border-b-[1px] border-black w-full relative">
              <img
                src={`${import.meta.env.BASE_URL}resource/${project.proj_img}`}
                alt="Project cover"
                className="object-contain absolute w-full h-full"
              />
              <button className="absolute top-0 right-0 p-2" onClick={onClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-10 items-center flex-col md:flex-row">
              <div className="p-3">
                <div className="leading-[2.8rem]">
                  <h1 className="text-[1.5rem]">{project.proj_type}</h1>
                  <h1 className="text-[5rem]">{project.proj_name}</h1>
                </div>

                <div className="flex items-center gap-2 mt-10">
                  {project.proj_tools.map((tool) => (
                    <Badge title={tool} />
                  ))}
                </div>

                <div className="mono text-[13px] font-bold mt-10 flex flex-col gap-8">
                  <a
                    href={project.proj_site}
                    className={`w-max flex items-center gap-2 ${project.proj_site === "" ? "text-gray-700 pointer-events-none" : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <h1>
                      Visit Site
                      {project.proj_site === "" ? "(Not Available)" : ""}
                    </h1>
                  </a>
                  <a
                    href={project.proj_gh}
                    className={`w-max flex items-center gap-2 ${project.proj_gh === "" ? "text-gray-700 pointer-events-none" : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                    >
                      <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                        fill="#24292f"
                      ></path>
                    </svg>

                    <h1>
                      Visit Code
                      {project.proj_site === "" ? "(Not Available)" : ""}
                    </h1>
                  </a>
                </div>
              </div>

              <div className="mono text-[15px] w-[20rem]">
                <p>{project.proj_details}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
