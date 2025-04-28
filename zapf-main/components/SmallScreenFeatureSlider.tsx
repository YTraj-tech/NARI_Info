// "use client";
// import { newAgeFontBold } from "@/lib/fonts/font";
// import Link from "next/link";

// interface SlideContentProps {
//   title: string;
//   description: string;
//   imgAlt: string;
// }

// export const SmallScreenFeatureSlider = () => {
//   const slideContents: SlideContentProps[] = [
//     {
//       title: "Choose Your Style",
//       description: "NARI",
//       imgAlt: "Various portfolio templates",
//     },
//     {
//       title: "Import from LinkedIn",
//       description:"NARI",
//       imgAlt: "LinkedIn profile import",
//     },
//     {
//       title: "Meet Zappy AI",
//       description: "NARI",
//       imgAlt: "AI-powered portfolio assistant",
//     },
//   ];
//   return (
//     <div
//       className="flex flex-col w-full justify-center items-center lg:hidden py-10 px-3"
//       style={{ lineHeight: 1, backgroundImage: "url('/top.svg')" }}
//     >
//       <div className="flex flex-col justify-center items-center space-y-1.5  sm:space-y-2">
//         <span className="text-[#BABBBA] text-sm">features</span>
//         <h2 className="text-[2.6rem] sm:text-[3.7rem] font-semibold  text-center px-2.5 ">
//         NARI THE GREAT
//         </h2>
//         <p
//           className={`text-sm md:text-lg tracking-wide text-black py-2 text-center ${newAgeFontBold.className}`}
//         >
//          NEW ERA
//         </p>

//         <div className="flex justify-start items-center">
//           <Link
//             href={"/themes"}
//             className="bg-black text-white px-4 py-2.5 rounded-lg"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//       <div
//         className="flex mt-8 w-full flex-col justify-center items-center 
//      space-y-8 sm:space-y-12 md:space-y-16 "
//       >
//         {slideContents.map((content, index) => (
//           <SlideContent {...content} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const SlideContent = ({
//   title,
//   description,
//   imgAlt,
// }: {
//   title: string;
//   description: string;
//   imgAlt: string;
// }) => {
//   return (
//     <div
//       className="flex w-[95%] sm:w-10/12  md:w-9/12 justify-center items-center m-4 cursor-pointer"
//       style={{ lineHeight: 1 }}
//     >
//       <div className="flex flex-col w-full ">
//         <div className="w-full h-52 sm:h-72 md:h-72 rounded-2xl bg-[#EFEFEE] border" />
//         <div className="flex pl-6  pt-4 flex-col text-black">
//           <p className="text-base  sm:text-xl md:text-2xl font-light capitalize text-center">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };




"use client";
import { newAgeFontBold } from "@/lib/fonts/font";
import Link from "next/link";

interface SlideContentProps {
  title: string;
  description: string;
  imgAlt: string;
  imageUrl: string;  // Added the image URL property for the slide content
}

export const SmallScreenFeatureSlider = () => {
  const slideContents: SlideContentProps[] = [
    {
      title: "Nari Shakti – Strength in Every Step",
      description: "Empowering women with smart technology to stay safe and confident.",
      imgAlt: "Women empowerment through technology",
      imageUrl: "/colab1.jpg",
    },
    {
      title: "Smart Safety, Fearless Freedom",
      description: "Innovative solutions designed to protect women anytime, anywhere.",
      imgAlt: "Smart safety devices for women",
      imageUrl: "/colab7.jpg",
    },
    {
      title: "Guardian Tech for Women",
      description: "Wearable safety gadgets and instant alert systems for protection on the go.",
      imgAlt: "Women using safety technology",
      imageUrl: "/colab9.jpg",
    },
    {
      title: "Nari Shield – Protection, Anytime",
      description: "Smart tools that ensure women's security with a single touch.",
      imgAlt: "Women safety innovations",
      imageUrl: "/colab4.jpg",
    }
  ]

  return (
    <div
      className="flex flex-col w-full justify-center items-center lg:hidden py-10 px-3"
      style={{ lineHeight: 1, backgroundImage: "url('/top.svg')" }}
    >
      <div className="flex flex-col justify-center items-center space-y-1.5 sm:space-y-2">
        <span className="text-[#BABBBA] text-sm">Features</span>
        <h2 className="text-[2.6rem] sm:text-[3.7rem] font-semibold text-center px-2.5 ">
          NARI THE GREAT
        </h2>
        <p
          className={`text-sm md:text-lg tracking-wide text-black py-2 text-center ${newAgeFontBold.className}`}
        >
          NEW ERA
        </p>

        <div className="flex justify-start items-center">
          <Link
            href={"/themes"}
            className="bg-black text-white px-4 py-2.5 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      
      <div
        className="flex mt-8 w-full flex-col justify-center items-center 
        space-y-8 sm:space-y-12 md:space-y-16"
      >
        {slideContents.map((content, index) => (
          <SlideContent {...content} key={index} />
        ))}
      </div>
    </div>
  );
};

const SlideContent = ({
  title,
  description,
  imgAlt,
  imageUrl,
}: SlideContentProps) => {
  return (
    <div
      className="flex w-[95%] sm:w-10/12 md:w-9/12 justify-center items-center m-4 cursor-pointer"
      style={{ lineHeight: 1 }}
    >
      <div className="flex flex-col w-full">
        {/* Image section */}
        <div className="w-full h-52 sm:h-72 md:h-72 rounded-2xl bg-[#EFEFEE] border flex justify-center items-center">
          <img src={imageUrl} alt={imgAlt} className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* Description section */}
        <div className="flex pl-6 pt-4 flex-col text-black">
          <h3 className="text-base sm:text-xl md:text-2xl font-light capitalize text-center">
            {title}
          </h3>
          <p className="text-sm sm:text-lg font-light text-center mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
