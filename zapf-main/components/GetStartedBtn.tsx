// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// export const GetStartedBtn = ({
//   title,
//   Icon,
//    }: 
// {
//   title: string;
//   Icon: React.ElementType;
// }) => {
//   const buttonRef = useRef<HTMLButtonElement | null>(null);
//   const arrowRef = useRef<SVGSVGElement | null>(null);
//   const roundedDivRef = useRef<HTMLDivElement | null>(null);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const timelineRef = useRef<gsap.core.Timeline | null>(null);

//   useEffect(() => {
//     timelineRef.current = gsap.timeline({ paused: true });

//     if (roundedDivRef.current && arrowRef.current) {
//       timelineRef.current
//         .to(roundedDivRef.current, {
//           duration: 0.5,
//           height: "3rem",
//           width: "3rem",
//           borderRadius: "0.5rem",
//           opacity: 1,
//           marginLeft: 0,
//         })
//         .to(
//           arrowRef.current,
//           {
//             duration: 0.5,
//             height: "1.75rem",
//             width: "1.75rem",
//             opacity: 1,
//             x: 40,
//             color: "#000000",
//             display: "block",
//           },
//           "-=0.25"
//         );
//     }

//     return () => {
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (timelineRef.current) {
//       if (isHovered) {
//         timelineRef.current.play();
//       } else {
//         timelineRef.current.reverse();
//       }
//     }
//   }, [isHovered]);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <button
//       ref={buttonRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-black text-white transition-colors duration-300 text-lg w-auto p-2"
//     >
//       <Icon
//         ref={arrowRef}
//         className="absolute z-10 h-7 w-9 opacity-0 -left-6"
//       />
//       <div
//         className="h-[0.70rem] w-[0.70rem] rounded-full ml-5 bg-white mr-4"
//         ref={roundedDivRef}
//       ></div>
//       <span className="pr-5">Join Us</span>
//     </button>
//   );
// };

// export const GetStartedSmallBtn = ({
//   title,
//   Icon,
// }: {
//   title: string;
//   Icon: React.ElementType;
// }) => {
//   const buttonRef = useRef<HTMLButtonElement | null>(null);
//   const arrowRef = useRef<SVGSVGElement | null>(null);
//   const roundedDivRef = useRef<HTMLDivElement | null>(null);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const timelineRef = useRef<gsap.core.Timeline | null>(null);

//   useEffect(() => {
//     timelineRef.current = gsap.timeline({ paused: true });

//     if (roundedDivRef.current && arrowRef.current) {
//       timelineRef.current
//         .to(roundedDivRef.current, {
//           duration: 0.4,
//           height: "2rem",
//           width: "2rem",
//           borderRadius: "0.375rem",
//           opacity: 1,
//           marginLeft: 0,
//         })
//         .to(
//           arrowRef.current,
//           {
//             duration: 0.4,
//             height: "1.25rem",
//             width: "1.25rem",
//             opacity: 1,
//             x: 30,
//             color: "#000000",
//             display: "block",
//           },
//           "-=0.2"
//         );
//     }

//     return () => {
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (timelineRef.current) {
//       if (isHovered) {
//         timelineRef.current.play();
//       } else {
//         timelineRef.current.reverse();
//       }
//     }
//   }, [isHovered]);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <button
//       ref={buttonRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="flex relative items-center justify-center gap-1.5 h-10 rounded-md bg-black text-white transition-colors duration-300 text-base w-auto p-1.5"
//     >
//       <Icon
//         ref={arrowRef}
//         className="absolute z-10 h-5 w-7 opacity-0 -left-5"
//       />
//       <div
//         className="h-[0.5rem] w-[0.5rem] rounded-full ml-4 bg-white mr-3"
//         ref={roundedDivRef}
//       ></div>
//     <span>{title}</span>
    
//   );
// };

// export const GetStartedBtnWhite = ({
//   title,
//   Icon,
// }: {
//   title: string;
//   Icon: React.ElementType;
// }) => {
//   const buttonRef = useRef<HTMLButtonElement | null>(null);
//   const arrowRef = useRef<SVGSVGElement | null>(null);
//   const roundedDivRef = useRef<HTMLDivElement | null>(null);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const timelineRef = useRef<gsap.core.Timeline | null>(null);

//   useEffect(() => {
//     timelineRef.current = gsap.timeline({ paused: true });

//     if (roundedDivRef.current && arrowRef.current) {
//       timelineRef.current
//         .to(roundedDivRef.current, {
//           duration: 0.5,
//           height: "3rem",
//           width: "3rem",
//           borderRadius: "0.5rem",
//           opacity: 1,
//           marginLeft: 0,
//           // color:"#ffffff"
//         })
//         .to(
//           arrowRef.current,
//           {
//             duration: 0.5,
//             height: "1.75rem",
//             width: "1.75rem",
//             opacity: 1,
//             x: 40,
//             color: "white",
//             // color: "#ffffff",
//             display: "block",
//           },
//           "-=0.25"
//         );
//     }

//     return () => {
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (timelineRef.current) {
//       if (isHovered) {
//         timelineRef.current.play();
//       } else {
//         timelineRef.current.reverse();
//       }
//     }
//   }, [isHovered]);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <button
//       ref={buttonRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-white text-black transition-colors duration-300 text-lg w-auto p-2 border capitalize"
//     >
//       <Icon
//         ref={arrowRef}
//         className="absolute z-10 text-white h-7 w-9 opacity-0 -left-6 "
//       />
//       <div
//         className="h-[0.70rem] w-[0.70rem] rounded-full ml-5 bg-black mr-4"
//         ref={roundedDivRef}
//       ></div>
//       <span className="pr-5">{title}</span>
//     </button>
//   );
// };



"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export const GetStartedBtn = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const roundedDivRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    if (roundedDivRef.current && arrowRef.current) {
      timelineRef.current
        .to(roundedDivRef.current, {
          duration: 0.5,
          height: "3rem",
          width: "3rem",
          borderRadius: "0.5rem",
          opacity: 1,
          marginLeft: 0,
        })
        .to(
          arrowRef.current,
          {
            duration: 0.5,
            height: "1.75rem",
            width: "1.75rem",
            opacity: 1,
            x: 40,
            color: "#000000",
            display: "block",
          },
          "-=0.25"
        );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-black text-white transition-colors duration-300 text-lg w-auto p-2"
    >
      <Icon
        ref={arrowRef}
        className="absolute z-10 h-7 w-9 opacity-0 -left-6"
      />
      <div
        className="h-[0.70rem] w-[0.70rem] rounded-full ml-5 bg-white mr-4"
        ref={roundedDivRef}
      ></div>
      <span className="pr-5">Join Us</span>
    </button>
  );
};

export const GetStartedSmallBtn = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const roundedDivRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    if (roundedDivRef.current && arrowRef.current) {
      timelineRef.current
        .to(roundedDivRef.current, {
          duration: 0.4,
          height: "2rem",
          width: "2rem",
          borderRadius: "0.375rem",
          opacity: 1,
          marginLeft: 0,
        })
        .to(
          arrowRef.current,
          {
            duration: 0.4,
            height: "1.25rem",
            width: "1.25rem",
            opacity: 1,
            x: 30,
            color: "#000000",
            display: "block",
          },
          "-=0.2"
        );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative items-center justify-center gap-1.5 h-10 rounded-md bg-black text-white transition-colors duration-300 text-base w-auto p-1.5"
    >
      <Icon
        ref={arrowRef}
        className="absolute z-10 h-5 w-7 opacity-0 -left-5"
      />
      <div
        className="h-[0.5rem] w-[0.5rem] rounded-full ml-4 bg-white mr-3"
        ref={roundedDivRef}
      ></div>
      <span>{title}</span>
    </button>
  );
};

export const GetStartedBtnWhite = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const roundedDivRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    if (roundedDivRef.current && arrowRef.current) {
      timelineRef.current
        .to(roundedDivRef.current, {
          duration: 0.5,
          height: "3rem",
          width: "3rem",
          borderRadius: "0.5rem",
          opacity: 1,
          marginLeft: 0,
          // color:"#ffffff"
        })
        .to(
          arrowRef.current,
          {
            duration: 0.5,
            height: "1.75rem",
            width: "1.75rem",
            opacity: 1,
            x: 40,
            color: "white",
            // color: "#ffffff",
            display: "block",
          },
          "-=0.25"
        );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-white text-black transition-colors duration-300 text-lg w-auto p-2 border capitalize"
    >
      <Icon
        ref={arrowRef}
        className="absolute z-10 text-white h-7 w-9 opacity-0 -left-6"
      />
      <div
        className="h-[0.70rem] w-[0.70rem] rounded-full ml-5 bg-black mr-4"
        ref={roundedDivRef}
      ></div>
      <span className="pr-5">{title}</span>
    </button>
  );
};