// import React from 'react';
// // import {Bot, Code, LayoutTemplate, SquareBottomDashedScissors, GripVertical, Linkedin } from 'lucide-react';
// import { GiQueenCrown } from "react-icons/gi";



// // Since we don't have access to your actual Marquee component,
// // I'll create a simple version that accepts the props you're using
// const Marquee = ({ 
//   children, 
//   pauseOnHover, 
//   style, 
//   className 
// }: { 
//   children: React.ReactNode; 
//   pauseOnHover?: boolean; 
//   style?: React.CSSProperties; 
//   className?: string;
// }) => {
//   return (
//     <div 
//       className={`overflow-hidden whitespace-nowrap ${className || ''}`}
//       style={{
//         ...style,
//         animationName: 'marquee',
//         animationIterationCount: 'infinite',
//         animationTimingFunction: 'linear'
//       }}
//     >
//       <div 
//         className="inline-block"
//         style={{ 
//           animationPlayState: pauseOnHover ? 'paused' : 'running' 
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// // FeatureCard component with properly typed props
// const FeatureCard = ({
//   name,
//   Icon,
// }: {
//   name: string;
//   Icon: React.ComponentType<{ className?: string }>;
// }) => {
//   return (
//     <figure
//       className="w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] flex space-x-3 justify-center items-center cursor-pointer overflow-hidden bg-white py-1 sm:py-2 md:py-3 font-sans"
//       style={{ backgroundImage: "url('/right.svg')" }}
//     >
//       <div className="p-2.5 md:p-3 rounded-xl bg-[#F2F3F2] border">
//         <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-8 text-black" />
//       </div>
//       <span className="text-sm md:text-lg font-semibold">{name}</span>
//     </figure>
//   );
// };

// export function MarqueeDemo() {
//   return (
//     <div
//       className="="
//       style={{ backgroundImage: "url('/bottom.svg')" }}
//     >
//       <Marquee
//         pauseOnHover
//         className="border-none"
//         style={{ animationDuration: "60s", backgroundImage: "url('/top.svg')" }}
//       >
//         <div className="flex space-x-4"  Icon={Icon} >
//           <FeatureCard name="zappy/ai"  />
//           <FeatureCard name="Linkedin Data Import"  />
//           <FeatureCard name="Free Templates" />
//           <FeatureCard name="no-code" />
//           <FeatureCard name="Drag & Drop" />
//           <FeatureCard name="Customizable Portfolio"/>
//         </div>
//       </Marquee>
//     </div>
//   );
// }



import React from 'react';
import { GiQueenCrown } from "react-icons/gi";
import { FaUserTie, FaBalanceScale, FaFistRaised, FaLightbulb ,FaShieldAlt  } from "react-icons/fa";

// Simple Marquee component
const Marquee = ({ 
  children, 
  pauseOnHover, 
  style, 
  className 
}: { 
  children: React.ReactNode; 
  pauseOnHover?: boolean; 
  style?: React.CSSProperties; 
  className?: string;
}) => {
  return (
    <div 
      className={`overflow-hidden whitespace-nowrap ${className || ''}`}
      style={{
        ...style,
        animationName: 'marquee',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }}
    >
      <div 
        className="inline-block"
        style={{ animationPlayState: pauseOnHover ? 'paused' : 'running' }}
      >
        {children}
      </div>
    </div>
  );
};

// FeatureCard component
const FeatureCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <figure
      className=" mt-20 w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] flex space-x-3 justify-center items-center cursor-pointer overflow-hidden bg-white py-1 sm:py-2 md:py-3 font-sans"
      style={{ backgroundImage: "url('/right.svg')" }}
    >
      <div className="p-2.5 md:p-3 rounded-xl bg-[#F2F3F2] border">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-8 text-black" />
      </div>
      <span className="text-sm md:text-lg font-semibold">{name}</span>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div
      className="bg-cover "
      style={{ backgroundImage: "url('/bottom.svg')" }}
    >
      <Marquee
        pauseOnHover
        className="border-none"
        style={{ animationDuration: "60s", backgroundImage: "url('/top.svg')" }}
      >
        <div className="flex space-x-4">
          <FeatureCard name="Nari Power" Icon={GiQueenCrown} />
          <FeatureCard name="Women Leadership" Icon={FaUserTie} />
          <FeatureCard name="Equality & Strength" Icon={FaBalanceScale} />
          <FeatureCard name="Empowerment Hub" Icon={FaFistRaised} />
          <FeatureCard name="Secure & Safe" Icon={FaShieldAlt} />
          <FeatureCard name="Inspiration & Growth" Icon={FaLightbulb} />
        </div>
      </Marquee>
    </div>
  );
}
