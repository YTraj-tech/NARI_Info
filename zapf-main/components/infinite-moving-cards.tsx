// import React from "react";
// import Marquee from "@/components/magicui/marquee";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// const PortfolioExamples = [
//   {
//     img: "/one.jpg",
//     themeName: "perryw",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/one.jpg",
//     themeName: "nari",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/one.jpg",
//     themeName: "nico",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/one.jpg",
//     themeName: "juul",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/one.jpg",
//     themeName: "dillion",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/one.jpg",
//     themeName: "albert",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
// ];

// const PortfolioCard = ({
//   img,
//   themeName,
//   audienceFit,
// }: {
//   img: string;
//   themeName: string;
//   audienceFit: string[];
// }) => {
//   return (
//     <Card className="  border-none shadow-none transition-transform duration-300 ">
//       <CardContent className="p-4">
//         <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
//           <img src={img} alt="img" />
//         </div>
//       </CardContent>
//       <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
//         <h3 className="text-lg font-bold ">{themeName}</h3>
//         <p className="text-sm text-gray-600 ">
//           Audience Fit:{" "}
//           {audienceFit.map((fit, index) => {
//             return (
//               <span key={index}>{`${fit} ${
//                 index !== audienceFit.length - 1 ? "·" : ""
//               } `}</span>
//             );
//           })}
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export function PortfolioMarquee() {
//   const halfLength = Math.ceil(PortfolioExamples.length / 2);
//   const firstRow = PortfolioExamples.slice(0, halfLength);
//   const secondRow = PortfolioExamples.slice(halfLength);

//   return (
//     <div className="relative flex  pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20  w-full flex-col items-center justify-center overflow-hidden ">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((example, index) => (
//           <PortfolioCard key={`first-${index}`} {...example} />
//         ))}
//       </Marquee>
//     </div>
//   );
// }

// export default PortfolioMarquee;

// import React from "react";
// import { motion } from "framer-motion";
// import Marquee from "@/components/magicui/marquee";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// const PortfolioExamples = [
//   {
//     img: "/newone.jpg",
//     themeName: "perryw",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/newtwo.jpg",
//     themeName: "pacolui",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/newthree.jpg",
//     themeName: "nico",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/newfour.jpg",
//     themeName: "juul",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/newfive.jpg",
//     themeName: "dillion",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
//   {
//     img: "/newsix.jpg",
//     themeName: "albert",
//     audienceFit: ["entrepreneurs", "student", "lorem"],
//   },
// ];

// const PortfolioCard = ({
//   img,
//   themeName,
//   audienceFit,
// }: {
//   img: string;
//   themeName: string;
//   audienceFit: string[];
// }) => {
//   return (
//     <Card className="  border-none shadow-none transition-transform duration-300 ">
//       <CardContent className="p-4">
//       <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
//           <img src={img} alt="Portfolio" className="w-full h-full object-fit object-cover rounded-xl" />
//       </div>

 
//       </CardContent>
//       <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
//         <h3 className="text-lg font-bold ">{themeName}</h3>
//         <p className="text-sm text-gray-600 ">
//           Audience Fit:{" "}
//           {audienceFit.map((fit, index) => {
//             return (
//               <span key={index}>{`${fit} ${
//                 index !== audienceFit.length - 1 ? "·" : ""
//               } `}</span>
//             );
//           })}
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export function PortfolioMarquee() {
//   const halfLength = Math.ceil(PortfolioExamples.length / 2);
//   const firstRow = PortfolioExamples.slice(0, halfLength);
//   const secondRow = PortfolioExamples.slice(halfLength);

//   return (
//     <div className="relative flex  pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20  w-full flex-col items-center justify-center overflow-hidden ">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((example, index) => (
//           <PortfolioCard key={`first-${index}`} {...example} />
//         ))}
//       </Marquee>
//     </div>
//   );
// }


// export default PortfolioMarquee;


// import React from "react";
// import Marquee from "@/components/magicui/marquee";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";


// const PortfolioExamples = [
//   {
//     img: "/colab3.jpg",
//     themeName: "Shakti",
//     audienceFit: ["Fearless Women", "Leaders", "Change-makers"],
//   },
//   {
//     img: "/newseven.jpg",
//     themeName: "Sheroes",
//     audienceFit: ["Trailblazers", "Entrepreneurs", "Visionary Women"],
//   },
//   {
//     img: "/newone.jpg",
//     themeName: "Empower",
//     audienceFit: ["Strong Women", "Innovators", "Dreamers"],
//   },
//   {
//     img: "/newfour.jpg",
//     themeName: "Nari Shakti",
//     audienceFit: ["Bold Voices", "Inspiring Women", "Changemakers"],
//   },
//   {
//     img: "/newfive.jpg",
//     themeName: "Resilient",
//     audienceFit: ["Women of Strength", "Warriors", "Fearless Spirits"],
//   },
//   {
//     img: "/newsix.jpg",
//     themeName: "Unstoppable",
//     audienceFit: ["Game Changers", "Risk-Takers", "Future Icons"],
//   },
// ];


// const PortfolioCard = ({
//   img,
//   themeName,
//   audienceFit,
// }: {
//   img: string;
//   themeName: string;
//   audienceFit: string[];
// }) => {
//   return (
//     <Card className="  border-none shadow-none transition-transform duration-300 ">
//       <CardContent className="p-4">
//         <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
//           <img src={img} alt={themeName} className="object-full w-full h-full object-cover" />
//         </div>
//       </CardContent> 
//       <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
//         <h3 className="text-lg font-bold ">{themeName}</h3>
//         <p className="text-sm text-gray-600 ">
//           Audience Fit:{" "}
//           {audienceFit.map((fit, index) => {
//             return (
//               <span key={index}>{`${fit} ${
//                 index !== audienceFit.length - 1 ? "·" : ""
//               } `}</span>
//             );
//           })}
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export function PortfolioMarquee() {
//   const halfLength = Math.ceil(PortfolioExamples.length / 2);
//   const firstRow = PortfolioExamples.slice(0, halfLength);
//   const secondRow = PortfolioExamples.slice(halfLength);

//   return (
//     <div className="relative flex  pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20  w-full flex-col items-center justify-center overflow-hidden ">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((example, index) => (
//           <PortfolioCard key={`first-${index}`} {...example} />
//         ))}
//       </Marquee>
//     </div>
//   );
// }

// export default PortfolioMarquee;


// import React from "react";
// import Marquee from "@/components/magicui/marquee";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// const PortfolioExamples = [
//   {
//     img: "/colab3.jpg",
//     themeName: "Shakti",
//     audienceFit: ["Fearless Women", "Leaders", "Change-makers"],
//   },
//   {
//     img: "/newseven.jpg",
//     themeName: "Sheroes",
//     audienceFit: ["Trailblazers", "Entrepreneurs", "Visionary Women"],
//   },
//   {
//     img: "/newone.jpg",
//     themeName: "Empower",
//     audienceFit: ["Strong Women", "Innovators", "Dreamers"],
//   },
//   {
//     img: "/newfour.jpg",
//     themeName: "Nari Shakti",
//     audienceFit: ["Bold Voices", "Inspiring Women", "Changemakers"],
//   },
//   {
//     img: "/newfive.jpg",
//     themeName: "Resilient",
//     audienceFit: ["Women of Strength", "Warriors", "Fearless Spirits"],
//   },
//   {
//     img: "/newsix.jpg",
//     themeName: "Unstoppable",
//     audienceFit: ["Game Changers", "Risk-Takers", "Future Icons"],
//   },
// ];

// const PortfolioCard = ({
//   img,
//   themeName,
//   audienceFit,
// }: {
//   img: string;
//   themeName: string;
//   audienceFit: string[];
// }) => {
//   return (
//     <Card className="border-none shadow-none transition-transform duration-300">
//       <CardContent className="p-4">
//         <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
//           <img src={img} alt={themeName} className="object-cover w-full h-full" />
//         </div>
//       </CardContent>
      
//       <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
//         <h3 className="text-lg font-bold">{themeName}</h3>
//         <p className="text-sm text-gray-600">
//           Audience Fit:{" "}
//           {audienceFit.map((fit, index) => (
//             <span key={index}>
//               {fit}{index !== audienceFit.length - 1 ? " · " : ""}
//             </span>
//           ))}
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export function PortfolioMarquee() {
//   const halfLength = Math.ceil(PortfolioExamples.length / 2);
//   const firstRow = PortfolioExamples.slice(0, halfLength);
//   const secondRow = PortfolioExamples.slice(halfLength);

//   return (
//     <div className="relative flex flex-col pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20 w-full items-center justify-center overflow-hidden gap-8">
//       {/* First row marquee */}
//       <Marquee 
//         pauseOnHover={false} 
//         className="[--duration:40s]"
//         autoFill={true}
//       >
//         {firstRow.map((example, index) => (
//           <PortfolioCard key={`first-${index}`} {...example} />
//         ))}
//       </Marquee>
      
//       {/* Second row marquee (reverse direction) */}
//       <Marquee 
//         pauseOnHover={false} 
//         className="[--duration:60s]" 
//         reverse={true}
//         autoFill={true}
//       >
//         {secondRow.map((example, index) => (
//           <PortfolioCard key={`second-${index}`} {...example} />
//         ))}
//       </Marquee>
//     </div>
//   );
// }

// export default PortfolioMarquee;


// import React from "react";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// const PortfolioExamples = [
//   {
//     img: "/colab3.jpg",
//     themeName: "Shakti",
//     audienceFit: ["Fearless Women", "Leaders", "Change-makers"],
//   },
//   {
//     img: "/newseven.jpg",
//     themeName: "Sheroes",
//     audienceFit: ["Trailblazers", "Entrepreneurs", "Visionary Women"],
//   },
//   {
//     img: "/newone.jpg",
//     themeName: "Empower",
//     audienceFit: ["Strong Women", "Innovators", "Dreamers"],
//   },
//   {
//     img: "/newfour.jpg",
//     themeName: "Nari Shakti",
//     audienceFit: ["Bold Voices", "Inspiring Women", "Changemakers"],
//   },
//   {
//     img: "/newfive.jpg",
//     themeName: "Resilient",
//     audienceFit: ["Women of Strength", "Warriors", "Fearless Spirits"],
//   },
//   {
//     img: "/newsix.jpg",
//     themeName: "Unstoppable",
//     audienceFit: ["Game Changers", "Risk-Takers", "Future Icons"],
//   },
// ];

// const PortfolioCard = ({
//   img,
//   themeName,
//   audienceFit,
// }: {
//   img: string;
//   themeName: string;
//   audienceFit: string[];
// }) => {
//   return (
//     <Card className="border-none shadow-none transition-transform duration-300 my-6">
//       <CardContent className="p-4">
//         <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
//           <img src={img} alt={themeName} className="object-cover w-full h-full" />
//         </div>
//       </CardContent>
      
//       <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
//         <h3 className="text-lg font-bold">{themeName}</h3>
//         <p className="text-sm text-gray-600">
//           Audience Fit:{" "}
//           {audienceFit.map((fit, index) => (
//             <span key={index}>
//               {fit}{index !== audienceFit.length - 1 ? " · " : ""}
//             </span>
//           ))}
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export function PortfolioMarquee() {
//   // Custom vertical marquee implementation
//   return (
//     <div className="relative w-full flex justify-center overflow-hidden h-screen">
//       <div className="flex relative">
//         {/* Column 1 - Moving downward */}
//         <div className="flex flex-col animate-marquee-down">
//           {PortfolioExamples.map((example, index) => (
//             <PortfolioCard key={`down-${index}`} {...example} />
//           ))}
//           {/* Duplicate items to ensure seamless loop */}
//           {PortfolioExamples.map((example, index) => (
//             <PortfolioCard key={`down-dup-${index}`} {...example} />
//           ))}
//         </div>
        
//         {/* Column 2 - Moving upward (optional for visual interest) */}
//         <div className="flex flex-col animate-marquee-up ml-8">
//           {[...PortfolioExamples].reverse().map((example, index) => (
//             <PortfolioCard key={`up-${index}`} {...example} />
//           ))}
//           {/* Duplicate items to ensure seamless loop */}
//           {[...PortfolioExamples].reverse().map((example, index) => (
//             <PortfolioCard key={`up-dup-${index}`} {...example} />
//           ))}
//         </div>
//       </div>
      
//       {/* Gradient overlays for smooth fade effect at top and bottom */}
//       <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
//     </div>
//   );
// }

// // You'll need to add these animations to your global CSS or tailwind config
// // Add to tailwind.config.js in the extend.animation section:
// // /*
// //   'marquee-down': {
// //     '0%': { transform: 'translateY(0)' },
// //     '100%': { transform: 'translateY(-50%)' }
// //   },
// //   'marquee-up': {
// //     '0%': { transform: 'translateY(-50%)' },
// //     '100%': { transform: 'translateY(0)' }
// //   }
// // */

// // And to the extend.keyframes section:
// /*
//   keyframes: {
//     'marquee-down': {
//       '0%': { transform: 'translateY(0)' },
//       '100%': { transform: 'translateY(-50%)' }
//     },
//     'marquee-up': {
//       '0%': { transform: 'translateY(-50%)' },
//       '100%': { transform: 'translateY(0)' }
//     }
//   },
//   animation: {
//     'marquee-down': 'marquee-down 40s linear infinite',
//     'marquee-up': 'marquee-up 40s linear infinite'
//   }
// */

// export default PortfolioMarquee;


import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PortfolioExamples = [
  {
    img: "/colab3.jpg",
    themeName: "Shakti",
    audienceFit: ["Fearless Women", "Leaders", "Change-makers"],
  },
  {
    img: "/newseven.jpg",
    themeName: "Sheroes",
    audienceFit: ["Trailblazers", "Entrepreneurs", "Visionary Women"],
  },
  {
    img: "/newone.jpg",
    themeName: "Empower",
    audienceFit: ["Strong Women", "Innovators", "Dreamers"],
  },
  {
    img: "/newfour.jpg",
    themeName: "Nari Shakti",
    audienceFit: ["Bold Voices", "Inspiring Women", "Changemakers"],
  },
  {
    img: "/newfive.jpg",
    themeName: "Resilient",
    audienceFit: ["Women of Strength", "Warriors", "Fearless Spirits"],
  },
  {
    img: "/newsix.jpg",
    themeName: "Unstoppable",
    audienceFit: ["Game Changers", "Risk-Takers", "Future Icons"],
  },
];

const PortfolioCard = ({
  img,
  themeName,
  audienceFit,
}: {
  img: string;
  themeName: string;
  audienceFit: string[];
}) => {
  return (
    <Card className="border-none shadow-none transition-transform duration-300 mx-4">
      <CardContent className="p-4">
        <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2">
          <img src={img} alt={themeName} className="object-cover w-full h-full" />
        </div>
      </CardContent>
      
      <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
        <h3 className="text-lg font-bold">{themeName}</h3>
        <p className="text-sm text-gray-600">
          Audience Fit:{" "}
          {audienceFit.map((fit, index) => (
            <span key={index}>
              {fit}{index !== audienceFit.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </CardFooter>
    </Card>
  );
};

export function PortfolioMarquee() {
  return (
    <div className="relative w-full overflow-hidden pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20">
      {/* Custom horizontal marquee implementation */}
      <div className="flex items-center">
        {/* First row - Using our custom animation */}
        <div className="flex animate-marquee-left whitespace-nowrap">
          {PortfolioExamples.map((example, index) => (
            <PortfolioCard key={`left-${index}`} {...example} />
          ))}
          {/* Duplicate items to ensure seamless loop */}
          {PortfolioExamples.map((example, index) => (
            <PortfolioCard key={`left-dup-${index}`} {...example} />
          ))}
        </div>
        
        {/* Duplicate the entire content to create a seamless loop */}
        <div className="flex animate-marquee-left whitespace-nowrap" style={{ animationDelay: "calc(var(--duration) / 2)" }}>
          {PortfolioExamples.map((example, index) => (
            <PortfolioCard key={`left2-${index}`} {...example} />
          ))}
          {/* Duplicate items to ensure seamless loop */}
          {PortfolioExamples.map((example, index) => (
            <PortfolioCard key={`left2-dup-${index}`} {...example} />
          ))}
        </div>
      </div>
      
      {/* Gradient overlays for smooth fade effect on sides */}
      <div className="absolute top-0 left-0 bottom-0 w-24  pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-24 pointer-events-none z-10"></div>
    </div>
  );
}

// NOTE: You'll need to add these animations to your tailwind.config.js
// In the keyframes section:
/*
  "marquee-left": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" }
  }
*/
// In the animation section:
/*
  "marquee-left": "marquee-left 60s linear infinite"
*/

export default PortfolioMarquee;



