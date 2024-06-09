import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Connect() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          //   markers: true,
          trigger: ".connect",
          start: "-120 90%",
        },
      })
      .from(".w", { y: 5, opacity: 0, scale: 1.1, duration: 1 })
      .from(".icon div i", { y: 5, opacity: 0, scale: 1.1, duration: 1 });
  });
  return (
    <>
      <div className="connect w-screen mx-4 h-fit  my-3 flex flex-col relative bottom-7">
        <div className="w text-white  self-center text-4xl font-semibold">
          Connect me
        </div>
        <div className="icon flex flex-row gap-5 justify-center p-4">
        <a href="https://wa.me/qr/2XBHN2XL2XURF1">
          <div className="w-10 flex justify-center h-10">
            <i class="fa-brands text-4xl text-green-500 self-center fa-whatsapp"></i>
          </div>
          </a>
        <a href="https://www.instagram.com/._jenil.p._/">
          <div className="w-10 flex justify-center h-10">
            <i class="fa-brands fa-instagram text-4xl text-white self-center"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jenil-parmar-970b4027b/">
          <div className="w-10 flex justify-center h-10">
            <i class="fa-brands fa-linkedin-in text-4xl text-blue-700 self-center"></i>
          </div>
          </a>
          <a href="mailto:jenilparmar94091@gmail.com">
          <div className="w-10 flex justify-center h-10">
            <i class="fa-regular fa-envelope text-4xl text-red-300 self-center"></i>
          </div>
          </a>
          <a href="https://github.com/jenilparmar">
          <div className="w-10 flex justify-center h-10">
            <i class="fa-brands fa-github text-4xl text-purple-300 self-center"></i>
          </div>
          </a>
        </div>
      </div>
    </>
  );
}
