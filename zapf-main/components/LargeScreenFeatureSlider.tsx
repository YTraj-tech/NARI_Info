//the slide content using gsap

'use client'

import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GetStartedBtn } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";
import { newAgeFontBold } from "@/lib/fonts/font";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SlideContentProps {
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string; // Add image source property
}

const SlideContent: React.FC<SlideContentProps> = memo(
  ({ title, description, imgAlt, imgSrc }) => (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col w-[670px] p-4">
        <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2 overflow-hidden">
          {/* Image container with proper sizing and positioning */}
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full  h-full object-cover "
          />
          
        </div>
        <div className="flex pl-6 flex-col text-black">
          <h2 className="text-2xl pt-5 font-semibold capitalize">{title}</h2>
          <p className="text-sm font-light capitalize">{description}</p>
        </div>
      </div>
    </div>
  )
);

SlideContent.displayName = "SlideContent";

// const slideContents: SlideContentProps[] = [
//   {
//     title: "Customize Your Theme",
//     description: "Personalize colors, fonts, and layouts with ease",
//     imgAlt: "Custom theme editor",
//     imgSrc: "/five.jpg",
//   },
//   {
//     title: "Import from LinkedIn",
//     description: "Instantly populate your portfolio with your LinkedIn profile",
//     imgAlt: "LinkedIn profile import",
//     imgSrc: "/six.jpg" ,
//   },
//   {
//     title: "Meet Zappy AI",
//     description: "Let our AI assistant help craft your perfect portfolio",
//     imgAlt: "AI-powered portfolio assistant",
//     imgSrc: "/two.jpg",
//   },
//   {
//     title: "Meet Zappy AI",
//     description: "Let our AI assistant help craft your perfect portfolio",
//     imgAlt: "AI-powered portfolio assistant",
//     imgSrc: "/three.jpg",
//   }
// ];


const slideContents: SlideContentProps[] = [
  {
    title: "Nari Shakti – Strength in Every Step",
    description: "Empowering women with smart technology to stay safe and confident.",
    imgAlt: "Women empowerment through technology",
    imgSrc: "/colab1.jpg",
  },
  {
    title: "Smart Safety, Fearless Freedom",
    description: "Innovative solutions designed to protect women anytime, anywhere.",
    imgAlt: "Smart safety devices for women",
    imgSrc: "/colab7.jpg",
  },
  {
    title: "Guardian Tech for Women",
    description: "Wearable safety gadgets and instant alert systems for protection on the go.",
    imgAlt: "Women using safety technology",
    imgSrc: "/colab9.jpg",
  },
  {
    title: "Nari Shield – Protection, Anytime",
    description: "Smart tools that ensure women's security with a single touch.",
    imgAlt: "Women safety innovations",
    imgSrc: "/colab4.jpg",
  }
];


export const LargeScreenFeatureSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    
    return () => {
      if (pin) pin.kill();
    };
  }, []);
  
  return (
    <section
      className="overflow-hidden hidden lg:block"
      ref={triggerRef}
      style={{ lineHeight: 1, backgroundImage: "url('/top.svg')" }}
    >
      <div
        ref={sectionRef}
        className="h-screen flex lg:w-[380vw] xl:w-[300vw]"
      >
        <div className="h-full w-full flex justify-evenly items-center">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col space-y-3">
              <span className="text-[#BABBBA]">features</span>
              <div className="flex flex-col text-6xl text-black">
                <h1 className="font-extrabold">NARI THE GREAT</h1>
                <h1 className="font-extralight">NEW ERA</h1>
              </div>
              <p
                className={`text-lg tracking-wide text-black py-2 ${newAgeFontBold.className}`}
              >
                steps towards the new technology to protect women
              </p>
              <div className="flex justify-start items-center">
                <GetStartedBtn title="Build Now" Icon={Zap} />
              </div>
            </div>
          </div>
          {slideContents.map((content, index) => (
            <SlideContent key={index} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
};