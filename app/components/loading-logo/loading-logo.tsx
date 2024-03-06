"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

type LoadingLogoProps = {
  size?: number | string;
  className?: string;
  targetRef: RefObject<HTMLDivElement>;
};

export const LoadingLogo = ({
  size = "2rem",
  className,
  targetRef,
}: LoadingLogoProps) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", ".9 end"],
  });
  const scrollYProgressPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"],
  );

  return (
    <svg
      style={{ width: size, height: "auto" }}
      viewBox="0 0 54 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <clipPath id="myClip">
        <motion.rect
          width="100%"
          height="100%"
          // these two below are to avoid a flash rendering of the svg in nextjs
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 0 }}
          strokeDasharray="0 1"
          style={{ y: scrollYProgressPercentage }}
        />
      </clipPath>
      <path
        d="M30.8121 9.0416V1.57229C30.8121 0.693856 30.0606 -0.0590849 29.1838 0.00366017C13.0889 0.00366017 0 13.0546 0 29.2429C0 30.1213 0.688889 30.8115 1.56566 30.8115H13.4646C14.3414 30.8115 15.0303 30.1213 15.0303 29.2429V28.8664C15.0303 22.0966 19.8794 16.4555 26.2855 15.2415C24.0211 19.396 22.7333 24.1651 22.7333 29.2429C22.7333 30.1213 23.4222 30.8115 24.2989 30.8115H36.1353C37.0121 30.8115 37.701 30.1213 37.701 29.2429V28.8664C37.701 21.2115 43.901 14.9997 51.5414 14.9997H51.9171C52.7939 14.9997 53.4828 14.3095 53.4828 13.4311V1.57229C53.4828 0.693856 52.7313 -0.0590849 51.9171 0.00366017C43.6244 0.00366017 36.1297 3.46831 30.8121 9.0416Z"
        fill="currentColor"
        opacity={0.5}
      />
      <path
        d="M53.4828 1.57229V13.4311C53.4828 14.3095 52.7939 14.9997 51.9171 14.9997H51.5414C43.901 14.9997 37.701 21.2115 37.701 28.8664V29.2429C37.701 30.1213 37.0121 30.8115 36.1353 30.8115H24.2989C23.4222 30.8115 22.7333 30.1213 22.7333 29.2429C22.7333 13.0546 35.8222 0.00366017 51.9171 0.00366017C52.7313 -0.0590849 53.4828 0.693856 53.4828 1.57229Z"
        fill="currentColor"
        clipPath="url(#myClip)"
      />
      <path
        d="M30.8121 1.57229V13.4311C30.8121 14.3095 30.1232 14.9997 29.2465 14.9997H28.8707C21.2303 14.9997 15.0303 21.2115 15.0303 28.8664V29.2429C15.0303 30.1213 14.3414 30.8115 13.4646 30.8115H1.56566C0.688889 30.8115 0 30.1213 0 29.2429C0 13.0546 13.0889 0.00366017 29.1838 0.00366017C30.0606 -0.0590849 30.8121 0.693856 30.8121 1.57229Z"
        fill="currentColor"
        clipPath="url(#myClip)"
      />
    </svg>
  );
};
