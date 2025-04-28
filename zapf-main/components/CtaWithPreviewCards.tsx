"use client";

import React from "react";
import { GetStartedBtnWhite } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export const CtaWithPreviewCards = () => {
   const number =[1, 2, 3, 4, 5, 6, 7, 8,9]
   const infenitenumber =[...number,...number,...number]
  return (
    <div className="my-14 hidden md:block">
      <div className="relative w-[104%] -left-4  h-[500px] rounded-2xl overflow-hidden bg-black text-white">
        Vignette overlay with reduced intensity
         <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-black/40 to-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4  uppercase opacity-100">NARI</h1>
            <p className="text-xl  mb-6 max-w-2xl uppercase  opacity-100">
            Take Control of Your Safety with Next-Gen Technology – Smart Wearables & Instant Alerts for Women to Move Fearlessly!
            </p>
            <div className="flex w-full justify-center items-center">
              <GetStartedBtnWhite title="get started" Icon={Zap} />
            </div>
          </div>
        </div>
       
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 w-fit ">
           {[...infenitenumber].map((ele, inx) => (
    <div key={inx} className=" rounded-lg shadow-md flex items-center justify-center ">
      
    <motion.img
            animate={{ y: ["0%", "-50%"] }} 
            transition={{repeat: Infinity , duration:10 , ease: "linear"}}
            src={`/colab${ele}.jpg`}
           alt={`colab-${ele}`}
           className="  object-cover rounded-lg  w-full
            h-96 "
        
         />
      </div>
  
  ))}
</div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-33.33%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .bg-gradient-radial {
            background-image: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </div>
    </div>
  );
};
