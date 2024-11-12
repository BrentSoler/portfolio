import { useEffect, useRef, useState } from "react";
import ThreeDots from "../assets/svg/three-dots";
import ProjectCard from "../components/card";
import Links from "../components/links";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { TProject, TProjects } from "../types/project-types";
import Popup from "../components/popup";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  const [data, setData] = useState<TProjects>([]);
  const [selected, setSelected] = useState<TProject>({
    proj_details: "",
    proj_name: "",
    proj_type: "",
    proj_img: "",
    proj_tools: [],
    proj_gh: "",
    proj_site: "",
  });
  const [open, setOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  async function getData() {
    const res = await fetch("api/data", {
      cache: "force-cache",
    });

    const data: TProjects = await res.json();

    setData(data);
  }

  const x = useTransform(useSpring(scrollYProgress), [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section ref={targetRef} className="relative h-[101vh] ">
      <div className="h-screen w-screen overflow-x-hidden sticky top-0">
        <Links className="top-0 z-[999]" />

        <div className="w-full flex justify-end relative mt-3">
          <div className="flex absolute right-[17rem] md:right-[26rem] top-[2rem]">
            <ThreeDots />
            <ThreeDots />
            <ThreeDots />
          </div>
          <div className="text-[#78A083] md:mr-[35px] relative leading-[8rem] ">
            <h1 className="text-[80px] md:text-[110px] outline-stroke absolute top-0 right-[5px] tracking-wider">
              Projects.
            </h1>
            <h1 className="text-[80px] md:text-[110px] top-[2px] right-0 absolute tracking-wider">
              Projects.
            </h1>
          </div>
        </div>

        <div className="sticky top-0 hidden md:flex items-end overflow-hidden h-screen p-4">
          <motion.div
            style={{ x }}
            className="gap-7 mb-2 flex"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {data.map((proj) => (
              <ProjectCard
                project={proj}
                onClick={() => {
                  setOpen(true);
                  setSelected(proj);
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:hidden gap-10 mt-[8rem] items-center">
          {data.map((proj) => (
            <ProjectCard
              project={proj}
              onClick={() => {
                setOpen(true);
                setSelected(proj);
              }}
            />
          ))}
        </div>
      </div>
      <Popup
        open={open}
        onClick={() => {
          setOpen(false);
        }}
        project={selected}
      />
    </section>
  );
}
