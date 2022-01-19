import React from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const LineDrinks = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0.92, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <svg
      width="full"
      height="auto"
      viewBox="0 0 333 559"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M119.192 138.168C117.958 146.921 128.026 149.128 128.026 149.128C128.026 149.128 117.742 158.222 115.885 175.57C114.028 192.918 129.237 201.69 129.237 201.69C129.237 201.69 144.065 193.56 143.927 176.059C143.789 158.559 135.882 150.035 135.882 150.035C135.882 150.035 144.101 148.706 143.755 139.627C131.203 144.021 119.192 138.168 119.192 138.168Z"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M121.858 172.013C123.307 168.625 128.751 168.217 131.052 171.067C132.286 167.868 137.675 166.839 139.621 169.044"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M123.832 164.138C125.051 161.145 129.277 160.952 130.717 163.222C132.151 160.039 136.461 160.059 137.639 161.795"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M128.021 156.124C129.196 153.744 133.23 153.434 134.77 155.712"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </g>
      {/* <path d="M181 4C131 44 19 205.5 148 328.5C185.756 364.5 212 374.516 259.5 376C307 377.484 329 333 329 304.5C329 258.5 299 237 255.5 237C143 237 -70 376 30.5 556.5" stroke="white" stroke-width="8"/> */}
      <motion.path
        fill="none"
        strokeWidth="7"
        stroke="white"
        strokeDasharray="0 1"
        d="M181 4C131 44 19 205.5 148 328.5C185.756 364.5 212 374.516 259.5 376C307 377.484 329 333 329 304.5C329 258.5 299 237 255.5 237C143 237 -70 376 30.5 556.5"
        style={{
          pathLength,
        }}
      />
      <defs>
        <clipPath id="clip0">
          <rect
            width="65.7564"
            height="30.2044"
            fill="white"
            transform="matrix(0.0721518 -0.997394 0.997113 0.0759284 113 201.585)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LineDrinks;
