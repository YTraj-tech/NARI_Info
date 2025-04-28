// "use client";

// import { useState } from "react";
// import { Play, X } from "lucide-react";

// interface HeroVideoDialogProps {
//   videoSrc: string;
//   thumbnailSrc: string;
//   thumbnailAlt: string;
//   className?: string;
//   animationStyle?: "from-center" | "from-top" | "from-bottom";
// }

// const HeroVideoDialog = ({
//   videoSrc,
//   thumbnailSrc,
//   thumbnailAlt,
//   className = "",
//   animationStyle = "from-center",
// }: HeroVideoDialogProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openDialog = () => setIsOpen(true);
//   const closeDialog = () => setIsOpen(false);

//   const dialogAnimationClass = {
//     "from-center": "scale-in-center",
//     "from-top": "slide-in-top",
//     "from-bottom": "slide-in-bottom",
//   }[animationStyle];

//   return (
//     <div className={`hero-video-dialog ${className}`}>
//       {/* 📷 Thumbnail */}
//       <div 
//         className="relative cursor-pointer rounded-2xl overflow-hidden shadow-xl w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto lg:mx-0" 
//         onClick={openDialog}
//       >
//         <img 
//           src={thumbnailSrc} 
//           alt={thumbnailAlt} 
//           className="w-full h-auto rounded-2xl object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
//           <div className="bg-black bg-opacity-50 p-6 rounded-full hover:bg-opacity-70 transform hover:scale-110 transition-all duration-300">
//             <Play className="w-16 h-16 text-white" />
//           </div>
//         </div>
//       </div>

//       {/* 🎬 Video Dialog */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
//           onClick={closeDialog} // click outside to close
//         >
//           <div 
//             className={`relative w-11/12 max-w-5xl ${dialogAnimationClass} transition-all duration-300`}
//             onClick={(e) => e.stopPropagation()} // prevent close on video click
//           >
//             <button 
//               onClick={closeDialog}
//               className="absolute -top-12 right-0 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
//               aria-label="Close dialog"
//             >
//               <X className="w-8 h-8" />
//             </button>

//             {videoSrc.includes("youtube.com") ? (
//               <iframe
//                 src={videoSrc}
//                 className="w-full aspect-video rounded-lg shadow-2xl"
//                 allowFullScreen
//                 title="Video player"
//               ></iframe>
//             ) : (
//               <video 
//                 src={videoSrc} 
//                 controls 
//                 autoPlay
//                 className="w-full rounded-lg shadow-2xl"
//               />
//             )}
//           </div>
//         </div>
//       )}

//       {/* ✨ Animations */}
//       <style jsx>{`
//         .scale-in-center {
//           animation: scaleInCenter 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//         }

//         .slide-in-top {
//           animation: slideInTop 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//         }

//         .slide-in-bottom {
//           animation: slideInBottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//         }

//         @keyframes scaleInCenter {
//           0% {
//             transform: scale(0);
//             opacity: 0;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInTop {
//           0% {
//             transform: translateY(-50px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInBottom {
//           0% {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroVideoDialog;



"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

interface HeroVideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  className?: string;
  animationStyle?: "from-center" | "from-top" | "from-bottom";
}

const HeroVideoDialog = ({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt,
  className = "",
  animationStyle = "from-center",
}: HeroVideoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const dialogAnimationClass = {
    "from-center": "scale-in-center",
    "from-top": "slide-in-top",
    "from-bottom": "slide-in-bottom",
  }[animationStyle];

  return (
    <div className={`hero-video-dialog ${className}`}>
      {/* 📷 Thumbnail */}
      <div 
        className="relative cursor-pointer rounded-2xl overflow-hidden shadow-xl w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto lg:mx-0" 
        onClick={openDialog}
      >
        <img 
          src={thumbnailSrc} 
          alt={thumbnailAlt} 
          className="w-full h-auto rounded-2xl object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
          <div className="bg-black bg-opacity-50 p-6 rounded-full hover:bg-opacity-70 transform hover:scale-110 transition-all duration-300">
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>

      {/* 🎬 Video Dialog */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeDialog} // click outside to close
        >
          <div 
            className={`relative w-11/12 max-w-5xl ${dialogAnimationClass} transition-all duration-300`}
            onClick={(e) => e.stopPropagation()} // prevent close on video click
          >
            <button 
              onClick={closeDialog}
              className="absolute -top-12 right-0 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
              aria-label="Close dialog"
            >
              <X className="w-8 h-8" />
            </button>

            {videoSrc.includes("youtube.com") ? (
              <iframe
                src={videoSrc}
                className="w-full aspect-video rounded-lg shadow-2xl"
                allowFullScreen
                title="Video player"
              ></iframe>
            ) : (
              <video 
                src={videoSrc} 
                controls 
                autoPlay
                className="w-full rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}

      {/* ✨ Animations */}
      <style jsx>{`
        .scale-in-center {
          animation: scaleInCenter 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        .slide-in-top {
          animation: slideInTop 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        .slide-in-bottom {
          animation: slideInBottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @keyframes scaleInCenter {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInTop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInBottom {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroVideoDialog;

