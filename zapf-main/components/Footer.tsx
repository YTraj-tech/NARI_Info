// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaYoutube, FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";

// export const Footer = () => {
//   return (
//     <footer className="text-black pb-6 lg:py-16 sm:px-3 md:px-6">
//       <div className="flex flex-col">
//         {/* Social Links and Quick Links */}
//         <div className="hidden xl:flex px-12 w-full justify-between items-start">
//           <div>
//             <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
//               <div className="h-2 w-2 bg-black rounded-full mb-1"></div>
//               <h3 className="text-xl font-semibold">Social Links</h3>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <Link href={"https://chatgpt.com/"} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#F2F3F2] border">
//                 <AiFillInstagram className="h-7 w-8 text-black" />
//               </Link>
//               <Link href={""} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#F2F3F2] border">
//                 <FaLinkedinIn className="h-7 w-8 text-black" />
//               </Link>
//               <Link href={""} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#F2F3F2] border">
//                 <FaTwitter className="h-7 w-8 text-black" />
//               </Link>
//               <Link href={""} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#F2F3F2] border">
//                 <FaYoutube className="h-7 w-8 text-black" />
//               </Link>
//             </div>
//           </div>

//           {/* Center - Quick Links */}
//           <div>
//             <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
//               <div className="h-2 w-2 bg-black rounded-full mb-2"></div>
//               <h3 className="text-lg font-semibold">Quick Links</h3>
//             </div>
//             <div className="grid grid-cols-3 gap-4">
//               {["About Us", "How It Works","insta"].map((link) => (
//                 <div key={link} className="flex justify-center items-center w-40">
//                   <Link
//                     href={`/${link.toLowerCase().replace(" ", "-")}`}
//                     className="transition-colors bg-[#F2F3F2] w-full text-center rounded-2xl border p-2.5"
//                   >
//                     {link}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Legals */}
//           <div>
//             <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
//               <div className="h-2 w-2 bg-black rounded-full mb-2"></div>
//               <h3 className="text-lg font-semibold">Legals</h3>
//             </div>
            
//           </div>
//         </div>

//         {/* Mobile view for Quick Links */}
//         <div className="flex flex-col px-1.5 w-full justify-center items-center xl:hidden">
//           <div className="text-[2.5rem] py-4 sm:text-[3.3rem] md:text-[4.2rem] lg:text-[5.0rem] font-semibold sm:hidden text-center px-2.5">
//             Quick Links
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-3">
//             {["Support", "Dashboard", "Pricing", "About Us", "How It Works", "Testimonials", "Privacy Policy", "Terms of Service"].map((link) => (
//               <div key={link} className="flex justify-center items-center">
//                 <Link
//                   href={`/${link.toLowerCase().replace(" ", "-")}`}
//                   className="text-sm transition-colors bg-[#F2F3F2] w-full text-center rounded-xl border px-3 py-1.5"
//                 >
//                   {link}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Background and Logo */}
//         <div className="mt-8 pt-8 flex flex-wrap justify-between items-center" style={{ backgroundImage: "url('/top.svg')" }}></div>

//         {/* Responsive Logo */}
//         <div className="md:px-3 h-[60px] mx-auto ">
//           <img
//             className="w-full h-auto max-w-[500px] mx-auto pb-7" // Adjust this class for responsiveness
//             src="/narimain.jpg"
//             alt="Zapfolio Logo"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// };





"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <AiFillInstagram className="h-6 w-6 transition-transform duration-300 ease-in-out" />,
      url: "https://instagram.com/",
      name: "Instagram",
      color: "bg-white"
    },
    {
      icon: <FaLinkedinIn className="h-6 w-6 transition-transform duration-300 ease-in-out" />,
      url: "https://www.linkedin.com/in/shruti-kumari-813a4827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      name: "LinkedIn",
      color: "bg-blue-600"
    },
    {
      icon: <FaTwitter className="h-6 w-6 transition-transform duration-300 ease-in-out" />,
      url: "https://twitter.com/",
      name: "Twitter",
      color: "bg-blue-400"
    }
  ];

  return (
    <footer className="bg-white relative overflow-hidden"
    id="contact">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-gray-100"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-gray-100"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-gray-100"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Logo, description and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <img
              className="h-20 w-auto object-contain mb-6"
              src="/narimain.jpg"
              alt="Company Logo"
            />
            
            <p className="text-gray-600 max-w-md mb-8 text-center md:text-left">
              We're dedicated to providing exceptional experiences and connecting with our community. 
              Follow us on social media to stay updated with our latest news and events.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-500" />
                <span className="text-gray-600">contact@NARI.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-500" />
                <span className="text-gray-600">+91 8123956777</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-500" />
                <span className="text-gray-600">REVA Incubation Center, Reva University,Bengalore,karnataka-560064</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <h3 className="text-center md:text-left text-2xl font-bold mb-8 relative">
              Connect With Us
              <span className="block h-1 w-20 bg-gray-800 mt-3 mx-auto md:mx-0"></span>
            </h3>
            
            <div className="grid grid-cols-3 gap-6 w-full max-w-md">
              {socialLinks.map((social, index) => (
                <Link 
                  href={social.url} 
                  key={index}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex flex-col items-center md:items-start">
                    <div className={`
                      p-5 rounded-xl border border-gray-200 
                      transition-all duration-300
                      bg-gray-50 
                        ${social.color === 'bg-gradient-to-br from-purple-500 to-pink-500' 
                        ? 'group-hover:bg-purple-500' 
                        : `group-hover:${social.color}`}
                      group-hover:shadow-lg group-hover:scale-105
                      w-full flex justify-center
                    `}>
                      {social.icon}
                    </div>
                    <span className="mt-3 font-medium text-center md:text-left opacity-70  duration-300">
                      {social.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 opacity-0  duration-300">
                      Follow us
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side - Feedback Form & Newsletter */}
          <div className="flex flex-col justify-start h-[400px]">
            {/* Feedback Section */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <h4 className="font-bold text-lg mb-3">Share Your Feedback</h4>
              <p className="text-gray-600 text-sm mb-4">We value your opinion and would love to hear from you</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <textarea 
                  placeholder="Your feedback" 
                  rows={4}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                ></textarea>
                <button className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors w-full sm:w-auto self-end">
                  Submit Feedback
                </button>
              </div>
            </div>
            
           
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} NARI InfoTECH. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};



