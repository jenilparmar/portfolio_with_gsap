import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#earth", {
      scale: 0.6,
      duration: 0.5,
      backgroundSize: "440px",
      scrollTrigger: {
        trigger: "#earth",
        scroller: "body",
        markers: true,
        start: "top 40%",
        end: "top 50%",
        scrub: 2,
        pin: true,
        onUpdate: (self) => {
          if (self.progress === 1) {
            gsap.to("#earth", {
              rotate: 7200,
              duration: 1000,
              repeat: -1,
            });
          } else {
            gsap.killTweensOf("#earth", "rotate"); // Kill the rotation animation if not scaled to 0.6
          }
        },
      },
    });
  });
  return (
    <>
      <div className="bg-black w-screen h-screen">
        <div
          className="bg-transparent w-full h-full "
          id="earth"
          style={{
            backgroundImage:"url(https://cdn.britannica.com/31/160431-050-C38A5086/Image-Earth-Russian-Elektro-L-weather-satellite-2012.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize:"550px",
            backgroundPosition:"center",
            position:"absolute",
            top:"50%"
          }}></div>
      </div>
    </>
  );
}
