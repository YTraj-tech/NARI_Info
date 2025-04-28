// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export function Faq() {
//   return (
//     <div className="w-full flex flex-col justify-center items-center p-14">
//       <div className="w-full flex flex-col justify-start items-start">
//         <h2 className="text-base font-bold mb-2 text-slate-400">FAQs</h2>
//         <h1 className="text-7xl font-bold mb-8">Questions → Answers</h1>
//       </div>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="item-1">
//           <AccordionTrigger className="text-left">
//             How does the money-back guarantee work?
//           </AccordionTrigger>
//           <AccordionContent>
//             Our money-back guarantee ensures your satisfaction. If youre not
//             happy with our service within 30 days of purchase, well provide a
//             full refund, no questions asked.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger className="text-left">
//             Do you provide on-going support?
//           </AccordionTrigger>
//           <AccordionContent>
//             Yes, we offer continuous support for all our clients. Our dedicated
//             support team is available via email and live chat during business
//             hours to address any questions or concerns you may have.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger className="text-left">
//             I already have the designs, can you develop them?
//           </AccordionTrigger>
//           <AccordionContent>
//             Were happy to work with your existing designs. Our development team
//             can take your designs and turn them into fully functional websites
//             or applications, ensuring they match your vision perfectly.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-4">
//           <AccordionTrigger className="text-left">
//             What if I dont like the designs?
//           </AccordionTrigger>
//           <AccordionContent>
//             We value your satisfaction and offer revision options. If youre not
//             happy with the initial designs, well work closely with you to
//             understand your preferences and make necessary adjustments until
//             youre completely satisfied with the result.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-5">
//           <AccordionTrigger className="text-left">
//             What if I want to work with someone else after the website is built?
//           </AccordionTrigger>
//           <AccordionContent>
//             While we hope youll continue to work with us, we understand that
//             circumstances may change. We provide all necessary documentation and
//             access to your websites codebase, making it easy for you or another
//             developer to take over the project if needed.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }
  //one task -1
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,

} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center  p-3 md:p-14 lowercase"
      style={{ lineHeight: 1 }}
      id="faq"
    >
      <div className="w-full flex flex-col justify-center items-center px-2.5">
        <h2 className=" text-sm ml-3 mb-2 text-slate-400">{`FAQs`}</h2>
        <h3 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl text-center  ">
         {` Questions → Answers`}
        </h3>
      </div>

      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left ">
            {` What is Nari`}
          </AccordionTrigger>
          <AccordionContent>
            {`Nari is a company committed to womens safety
          creating innovative products designed to protect and empower them
          It focuses on using technology to ensure women feel secure in any environment.
           With Nari, safety becomes a right, not a privilege`}
         
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
          {`How do Nari products help in emergency situations `}         
          </AccordionTrigger>
          <AccordionContent>
         {` Nari products are designed to respond quickly during emergencies with features like instant alerts, GPS tracking, and alarm systems.
           These tools help notify trusted contacts or authorities right away.
            Our goal is to provide peace of mind in every situation.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
          {`Who can use Nari's safety products`}          
          </AccordionTrigger>
          <AccordionContent>
         {` Nari products are made for women of all ages, whether students, working professionals, or homemakers.
           They’re easy to use, lightweight, and designed to fit into daily routines. 
           Anyone seeking extra safety and confidence can benefit from Nari.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
          {`Are Nari devices easy to carry and use`}
          </AccordionTrigger>
          <AccordionContent>
          {`Yes, Nari devices are designed to be compact, stylish, and user-friendly for everyday use.
           They can be worn or carried effortlessly, without drawing attention.
            With just a simple press or action, help is always just seconds away.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
          {`How is Nari different from other safety solutions?`}
          </AccordionTrigger>
          <AccordionContent>
        
         {` Nari is a company committed to womens safety
          creating innovative products designed to protect and empower them
          It focuses on using technology to ensure women feel secure in any environment.
           With Nari, safety becomes a right, not a privilege. `}
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            How can I provide feedback?
          </AccordionTrigger>
          <AccordionContent>
            We’d love to hear from you! Reach out via our contact form on the
            website or email us at support@zapfolio.in.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </div>
  );
}
