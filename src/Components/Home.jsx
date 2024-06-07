import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    
      gsap.fromTo(".plane",{
        x:-350,
        duration:4,
        scrollTrigger: {
          trigger: "#earth", // Adjust the trigger if needed
          start: "top 60%", // Start the animation when the element is at the top 50% of the viewport
          end: "top 30%", // End the animation when the element is at the top 30% of the viewport
          scrub: 2,
        },
      }, {
        x: 350,
        y: 350,
        rotate:98, // Move the plane to the upper top corner
        duration: 5,
       
        scrollTrigger: {
          trigger: "#earth", // Adjust the trigger if needed
          start: "top 50%", // Start the animation when the element is at the top 50% of the viewport
          end: "top 30%", // End the animation when the element is at the top 30% of the viewport
          scrub: 2,
        },
      });
 
    gsap.to("#earth", {
      scale: 0.6,
      y:-250,
      duration: 0.5,
      backgroundSize: "440px",
      scrollTrigger: {
        trigger: "#earth",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 45%",
        scrub: 2,
        pin: true,
        onUpdate: (self) => {
          if (self.progress === 1) {
            gsap.to("#earth", {
              rotate: 7200,
              duration: 1000,
              repeat: -1,
            });
          }
        },
      },
    });
  });
  return (
    <>
    <div className="overflow-x-hidden w-screen">
    <div className="z-10 plane w-20 h-20 inline bg-transparent absolute left-0 top-5 overflow-x-hidden" style={{
      backgroundImage:'url("https://iili.io/JpjV3HN.md.png" )',
      backgroundPosition:"center",
      backgroundSize:"contain",
      backgroundRepeat:'no-repeat'
    }}></div>
      <div className="bg-black w-screen h-fit">
        <div
          className="bg-transparent w-screen h-full "
          id="earth"
          style={{
            backgroundImage:"url(https://cdn.britannica.com/31/160431-050-C38A5086/Image-Earth-Russian-Elektro-L-weather-satellite-2012.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize:"440px",
            backgroundPosition:"center",
            position:"absolute",
            top:"50%"
          }}></div>
        
      </div>
    </div>
    </>
  );
}