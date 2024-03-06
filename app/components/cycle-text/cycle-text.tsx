"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { RefObject, useState } from "react";
import styles from "./cycle-text.module.scss";
const ANIMATION_TEXTS = ["fotografie", "content creation", "webdesign"];

export const CycleText = ({
  targetRef,
}: {
  targetRef: RefObject<HTMLDivElement>;
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", ".8 end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) {
      setTextIndex(2);
    } else if (latest > 0.5) {
      setTextIndex(1);
    } else {
      setTextIndex(0);
    }
  });

  return (
    <AnimatePresence mode="popLayout">
      <h1 className={styles.root}>
        Uw freelance expert in
        <br />
        <motion.span
          key={textIndex}
          className={styles.cycled}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          {ANIMATION_TEXTS[textIndex]}
        </motion.span>
      </h1>
    </AnimatePresence>
  );
};
