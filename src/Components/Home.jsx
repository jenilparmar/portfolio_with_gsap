import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Home({state}) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(
      ".plane",

      {
        y: 2000,
        // rotate: 175, // Move the plane to the upper top corner
        duration: 5,

        scrollTrigger: {
          trigger: "#earth",
          // markers:true, // Adjust the trigger if needed
          start: "top 70%", // Start the animation when the element is at the top 50% of the viewport
          // end: "top 100%", // End the animation when the element is at the top 30% of the viewport
          scrub: 2,
        },
      }
    );

    gsap.to("#earth", {
      scale: 0.7,
      duration: 2,
      direction: "forward",
     
      scrollTrigger: {
        trigger: ".container1",

        // markers: true,
        start: "top 50%",
        end: "bottom 20%",
        scrub: 2,
        // pin: true,
      },
    });

    // gsap.to("#earth", {
    //   rotate: 7200,
    //   duration: 1000,
    //   repeat: -1,
    // });
  });
  return (
    <>
      <div className=" w-screen h-fit flex flex-col">
        <div
          className="z-10 plane w-20 h-20 inline bg-transparent absolute  left-0 -top-20 overflow-x-hidden"
          style={{
            backgroundImage: 'url("https://iili.io/JpjV3HN.md.png" )',
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transform: "rotate(135deg)",
          }}></div>

        <div className="container1 z-50 bg-transparent overflow-x-hidden w-screen h-fit">
          <div
            className="w-screen bg-transparent"
            id="earth"
            style={{
              backgroundImage:
                "url(https://cdn.britannica.com/31/160431-050-C38A5086/Image-Earth-Russian-Elektro-L-weather-satellite-2012.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",


              borderRadius: "50%",
              top: "35em",
              height: "45vh",
            }}></div>
        </div>
        {/* <div className="w-screen h-48 text-white bg-white relative top-40 z-20">vd</div> */}
      </div>
    </>
  );
}
