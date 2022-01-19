import React, { useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  
} from "framer-motion";

const LineCombos = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  

  return (
     
   
   
    <svg width="full"
      height="auto" viewBox="0 0 669 655" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M561.621 52.34C565.783 60.1253 575.258 56.0171 575.258 56.0171C575.258 56.0171 572.275 69.3693 581.003 84.4529C589.73 99.5364 607.25 97.7181 607.25 97.7181C607.25 97.7181 614.49 82.4859 604.053 68.4463C593.617 54.4068 582.17 52.1538 582.17 52.1538C582.17 52.1538 588.057 46.2747 582.42 39.1509C574.824 50.0375 561.621 52.34 561.621 52.34Z" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M583.752 78.0889C582.929 74.5084 587.107 70.9944 590.656 71.9484C589.771 68.6461 593.538 64.663 596.419 65.3045" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M580.709 70.5811C579.933 67.4525 583.249 64.8256 585.757 65.815C585.043 62.4083 588.553 59.9029 590.534 60.6145" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M579.382 61.6643C578.932 59.0571 582.023 56.4477 584.616 57.3849" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
</g>
<g clip-path="url(#clip1)">
<path d="M495.347 352.336C487.251 355.375 490.135 365.515 490.135 365.515C490.135 365.515 477.453 360.542 461.688 367.098C445.923 373.653 445.615 391.551 445.615 391.551C445.615 391.551 459.626 401.083 474.575 392.654C489.524 384.226 493.085 373.04 493.085 373.04C493.085 373.04 498.125 379.832 505.751 375.211C496.025 365.96 495.347 352.336 495.347 352.336Z" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M467.574 370.804C471.168 370.504 474.102 375.227 472.748 378.657C476.078 378.254 479.519 382.633 478.55 385.437" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M475.267 368.85C478.414 368.53 480.584 372.255 479.32 374.633C482.731 374.417 484.759 378.319 483.829 380.207" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
<path d="M484.131 368.83C486.73 368.762 488.91 372.257 487.687 374.729" stroke="#272CC0" stroke-width="2" stroke-miterlimit="10"/>
</g>
{/* <path d="M589 3.5C639 43.5 723.964 191 602.678 332.5C530.679 416.5 323.178 468 153.678 468C20.6785 468 4.5 406 4.5 377.5C4.5 310 87.6785 304 131.178 304C324.5 304 336 512 198 651.5" stroke="white" stroke-width="8"/> */}
<motion.path
        fill="none"
        strokeWidth="7"
        stroke="white"
         strokeDasharray="0 1"
        d="M589 3.5C639 43.5 723.964 191 602.678 332.5C530.679 416.5 323.178 468 153.678 468C20.6785 468 4.5 406 4.5 377.5C4.5 310 87.6785 304 131.178 304C324.5 304 336 512 198 651.5"
        style={{
          pathLength,
        }}
      />
<defs>
<clipPath id="clip0">
<rect width="65.6933" height="30.235" fill="white" transform="matrix(-0.530363 -0.847771 0.853306 -0.52141 594.009 107.13)"/>
</clipPath>
<clipPath id="clip1">
<rect width="64.3803" height="30.8554" fill="white" transform="matrix(0.908972 -0.416857 0.39941 0.916772 438 376.837)"/>
</clipPath>
</defs>
</svg>
    
  );
};

export default LineCombos 
  
