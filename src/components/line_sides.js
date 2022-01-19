import React, { useRef, useState } from "react";
import {InView, useInView } from 'react-intersection-observer';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  
} from "framer-motion";

const LineSlides = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });



  return (
      <div ref={ref}> 
    <svg
      width="full"
      height="auto"
      viewBox="0 0 692 712"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <path d="M65.67 3C-0.330009 80 -5.36307 167.575 13.6698 227C58.6698 367.5 219.5 437 377.67 437C583.67 437 611.67 452.5 645.17 486.5C714.695 557.063 694.67 642 617.17 708" stroke="white" stroke-width="8"/> */}
      <motion.path
        fill="none"
        strokeWidth="7"
        stroke="white"
         strokeDasharray="0 1"
        d="M65.67 3C-0.330009 80 -5.36307 167.575 13.6698 227C58.6698 367.5 219.5 437 377.67 437C583.67 437 611.67 452.5 645.17 486.5C714.695 557.063 694.67 642 617.17 708"
        style={inView&&{
          pathLength,
        }}
      />
      <g clip-path="url(#clip0)">
        <path
          d="M30.1808 207.839C32.5197 216.352 42.5935 214.171 42.5935 214.171C42.5935 214.171 36.7985 226.767 41.9736 243.393C47.1487 260.018 64.5194 261.691 64.5194 261.691C64.5194 261.691 74.8468 248.081 67.7891 232.148C60.7315 216.215 50.1308 211.724 50.1308 211.724C50.1308 211.724 57.1137 207.083 53.2012 198.931C43.4733 208.179 30.1808 207.839 30.1808 207.839Z"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M46.0225 237.652C46.004 233.953 50.8168 231.309 54.0479 232.954C53.9087 229.518 58.4248 226.33 61.0767 227.534"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M44.7061 229.634C44.6344 226.391 48.419 224.453 50.634 225.927C50.6831 222.421 54.6293 220.641 56.3932 221.736"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M45.3604 220.564C45.4913 217.9 49.0538 215.935 51.363 217.374"
          stroke="#272CC0"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="65.5779"
            height="30.2905"
            fill="white"
            transform="matrix(-0.330029 -0.943971 0.938464 -0.345377 49.6426 268.365)"
          />
        </clipPath>
      </defs>
    </svg>
    </div>
  );
};

export default LineSlides;
