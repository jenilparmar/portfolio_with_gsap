import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".c", {
      x: -1000, // Start the logos off-screen to the right
      duration: 2,
      scrollTrigger: {
        trigger: ".c",
        start: "top 90%",
        markers:true,
        end:'top 10%',
        scrub: 2,
      },
    });
  });

  return (
    <>
      <center>
        <div
          className="c w-screen h-60 bg-white absolute flex flex-row gap-1 p-4  z-20"
          style={{
            top: "120%",
          }}
        >
          <div
            className="h-40 no-repeat self-center"
            style={{
              width: "50vw",
              backgroundImage: "url(https://iili.io/JpjZteV.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-56 no-repeat self-center"
            style={{
              width: "50vw",
              backgroundImage: "url(https://iili.io/Jpjt3dv.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
            <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/Jpjt0Be.md.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
          <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/JpjtD3G.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
          <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/JpjpNHJ.md.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
             <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/JpjyTOv.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
             <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
             <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/JpwAff9.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
             <div
            className=" h-56 no-repeat self-center"
            style={{
                width:"50vw",
              backgroundImage: "url(https://iili.io/JpwR3mv.md.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}></div>
  

          {/* Add more skills logos here */}
        </div>
      </center>
    </>
  );
}
