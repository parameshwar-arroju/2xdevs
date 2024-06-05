"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../app/components/ui/hero-highlight"

export default function Home() {

  const intro = `
██████╗ ██╗  ██╗██████╗ ███████╗██╗   ██╗███████╗
╚════██╗╚██╗██╔╝██╔══██╗██╔════╝██║   ██║██╔════╝
 █████╔╝ ╚███╔╝ ██║  ██║█████╗  ██║   ██║███████╗
██╔═══╝  ██╔██╗ ██║  ██║██╔══╝  ╚██╗ ██╔╝╚════██║
███████╗██╔╝ ██╗██████╔╝███████╗ ╚████╔╝ ███████║
╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝
`
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="font-bold text-[8px] sm:text-sm md:text-lg lg:text-2xl text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center "
      >{" "}
        <pre>
          {intro}
        </pre>
        <Highlight className="text-black dark:text-white p-2">
          Parameshwar | VamsiPunnaReddy
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
