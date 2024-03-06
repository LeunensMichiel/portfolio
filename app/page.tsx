"use client";

import styles from "./page.module.scss";
import { CycleText } from "./components/cycle-text/cycle-text";
import { Navbar } from "./components/navbar/navbar";
import { LoadingLogo } from "./components/loading-logo/loading-logo";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.hero} ref={heroRef}>
        <div className={styles.hero_wrapper}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            disableRemotePlayback
            disablePictureInPicture
          >
            <source src="/test.mp4" type="video/mp4" />
          </video>
          <div className={styles.hero__content}>
            <LoadingLogo targetRef={heroRef} size="8rem" />
            <CycleText targetRef={heroRef} />
          </div>
          <div className={styles["hero__scroll-down"]}>
            <svg
              width="8"
              height="41"
              viewBox="0 0 8 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1H4.5ZM3.64645 40.3536C3.84171 40.5488 4.15829 40.5488 4.35355 40.3536L7.53553 37.1716C7.7308 36.9763 7.7308 36.6597 7.53553 36.4645C7.34027 36.2692 7.02369 36.2692 6.82843 36.4645L4 39.2929L1.17157 36.4645C0.976311 36.2692 0.659728 36.2692 0.464466 36.4645C0.269204 36.6597 0.269204 36.9763 0.464466 37.1716L3.64645 40.3536ZM3.5 1V40H4.5V1H3.5Z"
                fill="currentColor"
              />
            </svg>
            <span>scroll down</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "100vh", background: "red" }}>
        This is content below
      </div>
    </main>
  );
}
