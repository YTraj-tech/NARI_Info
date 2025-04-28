// //main vedio//

// "use client";
// import { GetEarlyAccess } from "@/components/GetEarrlyAcess";
// import { MarqueeDemo } from "@/components/ScrollingFeatures";
// import { Play } from "lucide-react";
// import { useRef } from "react";
// export const HeroSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const playVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//         }
//   };


//   const PauseVedio = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//         }
//   };



//   return (
    
//     <section
//       className={`w-full  relative flex  lowercase flex-col items-center justify-center
// my-10 sm:my-14 lg:my-16 xl:my-20  px-2`}
//     >
//       <div className="group p-1 rounded-full hover:border z-10">
//         <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
//           <img className="h-3 w-3 sm:h-4 sm:w-4"  />
//           <span
//             className="text-[1rem] sm:text-xs md:text-sm uppercase "
//             style={{
//               lineHeight: 1,
//             }}
//           >
//            A Strong Woman Builds a Stronger World!
//           </span>
//         </div>
//       </div>

//       {/* hero text */}
//       <div className="my-5 sm:my-8 flex flex-col justify-center items-center text-black">
//         <h1
//           className="text-[2.4rem] hidden sm:block sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl  text-center px-1.5 sm:px-3 xl:px-14"
//           // style={{ lineHeight: 1.1 }}
//         >

//           A Step towards new Era
//         </h1>

//         <h1 
//         className="text-[2.4rem]  lg:text-[5.4rem] uppercase font-sans"
//         >
//           A STEP TOWARDS TO NEW ERA
//           </h1>
//         <h1
//           className="text-[3.2rem] font-semibold sm:hidden  text-center px-2.5 "
//           style={{ lineHeight: 1 }}
//         >
//           Portfolio in a Zap.
//         </h1>
//       </div>

//       {/* sub heading */}
//       <div className="flex mt-2 mb-3 flex-col  text-sm text-black justify-center items-center">
//         <h4
//           className="text-sm text-center px-2 sm:text-base lg:text-[1.15rem] xl:text-xl"
//           style={{ lineHeight: "1.25rem" }}
//         >
//          <span className="uppercase">s</span>tep Forward, Claim Your Power!
//         </h4>
//       </div>

//       <div className="z-50 flex justify-center  items-center">
//         <GetEarlyAccess />
//       </div>

//       <MarqueeDemo />
//       <div className="flex  justify-between w-full">
//         <img className="h-4 w-4 relative -left-4 -top-2" src="/star.svg" />
//         <img className="h-4 w-4 relative -right-4 -top-2" src="/star.svg" />
//       </div>
//       <div className="relative z-50 w-screen flex justify-center items-center">
//       <div className="flex justify-start px-4 sm:px-8">
//   <video
//     ref={videoRef}
//     className="mt-8 border rounded-2xl w-[90vw] sm:w-[70vw] lg:w-[60vw] max-h-[70vh] object-cover object-top"
//     onMouseEnter={playVideo}
//     onClick={PauseVedio}
//     autoPlay
//     loop
//     playsInline
//   >
//     <source src="/mainvedio.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// </div>


//       </div>
//     </section>
//   );
// };



// "use client";

// import { GetEarlyAccess } from "@/components/GetEarrlyAcess";
// import { MarqueeDemo } from "@/components/ScrollingFeatures";
// import HeroVideoDialog from "@/components/HeroVideoDialog";
// import { useRef } from "react";
// import { motion } from "framer-motion";

// export const HeroSection = () => {
//   return (
//     <section
//       className={`w-full relative flex lowercase flex-col items-center justify-center my-10 sm:my-14 lg:my-16 xl:my-20 px-2`}
//     >
//       <div className="group p-1 rounded-full hover:border z-10">
//         <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center group-hover:cursor-pointer">
//           <img className="h-3 w-3 sm:h-4 sm:w-4" />
//           <span
//             className="text-[1rem] sm:text-xs md:text-sm uppercase"
//             style={{
//               lineHeight: 1,
//             }}
//           >
//             A Strong Woman Builds a Stronger World!
//           </span>
//         </div>
//       </div>

//       {/* hero text */}
//       <div className="my-5 sm:my-8 flex flex-col justify-center items-center text-black">
//         <h1
//           className="text-[2.4rem] hidden sm:block sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl text-center px-1.5 sm:px-3 xl:px-14"
//         >
//           A Step towards new Era
//         </h1>

//         <h1 className="text-[2.4rem] lg:text-[5.4rem] uppercase font-sans">
//           A STEP TOWARDS TO NEW ERA
//         </h1>
       
//       </div>

//       {/* sub heading */}
//       <div className="flex mt-2 mb-3 flex-col text-sm text-black justify-center items-center">
//         <h4
//           className="text-sm text-center px-2 sm:text-base lg:text-[1.15rem] xl:text-xl"
//           style={{ lineHeight: "1.25rem" }}
//         >
//           <span className="uppercase">s</span>tep Forward, Claim Your Power!
//         </h4>
//       </div>

//       <div className="z-50 flex justify-center items-center">
//         <GetEarlyAccess />
//       </div>

//       <MarqueeDemo />
      
//       <div className="flex justify-between w-full">
//         <img className="h-4 w-4 relative -left-4 -top-2" src="/star.svg" />
//         <img className="h-4 w-4 relative -right-4 -top-2" src="/star.svg" />
//       </div>
      
//       {/* Video Dialog Section */}
//       <div className="relative z-50 w-screen flex justify-center items-center mt-8">
//         <div className="relative w-[90vw] sm:w-[70vw] lg:w-[60vw]">
//           <HeroVideoDialog
//             className="block dark:hidden"
//             animationStyle="from-center"
//             videoSrc="/mainvedio.mp4"
//             thumbnailSrc="/Thumnil.jpg"
//             thumbnailAlt="Hero Video"
//           />
//           <HeroVideoDialog
//             className="hidden dark:block"
//             animationStyle="from-center"
//             videoSrc="/mainvedio.mp4"
//             thumbnailSrc="/Thumnil.jpg"
//             thumbnailAlt="Hero Video"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";
import { GetEarlyAccess } from "@/components/GetEarrlyAcess";
import { MarqueeDemo } from "@/components/ScrollingFeatures";
import HeroVideoDialog from "@/components/HeroVideoDialog";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideUp: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 } 
    }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  return (
    <section className="w-full relative flex flex-col items-center justify-center my-10 sm:my-14 lg:my-16 xl:my-20 px-2 overflow-hidden bg-transparent">
      
      {/* Top Tagline */}
      <motion.div
        className="group p-1 rounded-full hover:border z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="rounded-full px-4 py-2 border flex space-x-2 items-center justify-center group-hover:cursor-pointer transition-colors duration-300">
          <motion.img 
            className="h-3 w-3 sm:h-4 sm:w-4" 
            src="/star.svg" 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="text-[1rem] sm:text-xs md:text-sm uppercase text-black"
            style={{ lineHeight: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A Strong Woman Builds a Stronger World!
          </motion.span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        className="my-5 sm:my-8 flex flex-col justify-center items-center text-black"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[2.4rem] hidden sm:block sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl text-center px-1.5 sm:px-3 xl:px-14"
          variants={slideUp}
        >
          A Step towards new Era
        </motion.h1>

        <motion.h1 
          className="text-[2.4rem] lg:text-[5.4rem] uppercase font-sans sm:hidden font-bold text-black text-center"
          variants={slideUp}
        >
          A STEP TOWARDS NEW ERA
        </motion.h1>
      </motion.div>

      {/* Sub Heading */}
      <motion.div 
        className="flex mt-2 mb-3 flex-col text-sm justify-center items-center text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h4
          className="text-sm text-center px-2 sm:text-base lg:text-[1.15rem] xl:text-xl"
          style={{ lineHeight: "1.25rem" }}
          whileHover={{ scale: 1.05 }}
        >
          Step Forward, Claim Your Power!
        </motion.h4>
      </motion.div>

      {/* Early Access Button */}
      <motion.div 
        className="z-50 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <GetEarlyAccess />
      </motion.div>

      {/* Scrolling Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <MarqueeDemo />
      </motion.div>

      {/* Decorative Stars */}
      <motion.div 
        className="flex justify-between w-full mt-4"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.img 
          className="h-4 w-4 relative -left-4 -top-2" 
          src="/star.svg" 
          variants={fadeIn}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.img 
          className="h-4 w-4 relative -right-4 -top-2" 
          src="/star.svg" 
          variants={fadeIn}
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        />
      </motion.div>

      {/* Video Section */}
      <div className="relative z-50 w-screen flex justify-center items-center mt-8">
        <div className="relative w-[90vw] sm:w-[70vw] lg:w-[60vw]">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="/mainvedio.mp4"
            thumbnailSrc="/Thumnil.jpg"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="/mainvedio.mp4"
            thumbnailSrc="/Thumnil.jpg"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>

    </section>
  );
};
