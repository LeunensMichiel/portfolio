"use client";

import { motion } from "framer-motion";
import { Logo } from "../logo";

import styles from "./navbar.module.scss";
import { useState } from "react";

const lineProps = {
  stroke: "#ffffff",
  opacity: 0.66,
  strokeWidth: 2,
  vectorEffect: "non-scaling-stroke",
  initial: "closed",
};

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 8,
  },
};

const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -8,
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variant = isOpen ? "opened" : "closed";

  return (
    <div className={styles.root}>
      <Logo className={styles.navbar__logo} size="15rem" variant="default" />
      <div className={styles.navbar__right}>
        <button className={styles.navbar__button}>contact</button>
        <button
          style={{
            border: "none",
            margin: 0,
            padding: 0,
            width: "auto",
            overflow: "visible",
            background: "transparent",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.svg
            overflow="visible"
            preserveAspectRatio="none"
            width={52}
            height={16}
          >
            <motion.line
              x1="0"
              x2={52}
              y1="0"
              y2="0"
              variants={top}
              animate={variant}
              {...lineProps}
            />
            <motion.line
              x1="0"
              x2={52}
              y1="16"
              y2="16"
              variants={bottom}
              animate={variant}
              {...lineProps}
            />
          </motion.svg>
        </button>
      </div>
    </div>
  );
};
