import { Link } from "wouter";
import CircleSvg from "../assets/svg/circle";
import * as motion from "framer-motion/client";

export default function Links({ className }: { className: string }) {
  return (
    <div
      className={
        "my-2 mono text-[14px] flex items-center gap-1 absolute justify-center w-max left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]" +
        className
      }
    >
      <Link href="/">
        <motion.p
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
        >
          Home
        </motion.p>
      </Link>
      <CircleSvg />
      <Link href="/projects">
        <motion.p
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
        >
          Projects
        </motion.p>
      </Link>
      <CircleSvg />
      <Link href="/aboutme">
        <motion.p
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
        >
          About Me
        </motion.p>
      </Link>
      <CircleSvg />
      <Link href="/socials">
        <motion.p
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
        >
          Socials
        </motion.p>
      </Link>
    </div>
  );
}
