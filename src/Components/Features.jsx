import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Features({ setState }) {
  const containerRef = useRef(null);
  useEffect(()=>{
    setState(containerRef.current)
  },[containerRef])
  const scrollref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".rounded-full", {
      scale: 0.5,
      duration: 2,
      ease: "expo.out",
      opacity: 0,
      repeat: 1,
    });
    gsap.from(".name-skill", {
      y: 20,
      opacity: 0,
      duration: 2,

      // repeat:-1,
      scrub: 1,
    });
    gsap.from(".q", {
      y: 20,
      scale: 0.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".q",
        // markers:true,
        start: "top 60%",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to(scrollref.current, {
      transform: "translate(-75%)",
      duration: 20,
      
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "bottom 50%",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="q text-white text-5xl text-center font-bold">Skills</div>
      <div
        ref={containerRef}
        className="container2 flex flex-row overflow-x-hidden  w-96 h-fit p-4  ">
        <div ref={scrollref} className="flex flex-row w-fit">
          <div className="scol flex flex-col">
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "#62dafc",
                }}>
                <div className="name-skill self-center">React.js</div>
              </div>
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/JpjZteV.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px #62dafc",
                }}></div>
            </div>
            <div className="skills flex flex-row  w-screen justify-center gap-3 h-32 my-2">
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/Jpjt3dv.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px #81cf08",
                }}></div>
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "#81cf08",
                }}>
                <div className="name-skill self-center">Node.js</div>
              </div>
            </div>{" "}
          </div>
          <div className="scol flex flex-col">
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "yellow",
                }}>
                <div className="name-skill self-center relative right-4">
                  Express.js
                </div>
              </div>
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://www.factfc.com/wp-content/uploads/2024/04/express-js.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px yellow",
                }}></div>
            </div>
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/JpjtD3G.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px green",
                }}></div>
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "green",
                }}>
                <div className="name-skill relative left-2 self-center">MongoDB</div>
              </div>
            </div>{" "}
          </div>
          <div className="scol flex flex-col">
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "#89cd0a",
                }}>
                <div className="name-skill self-center">GSAP</div>
              </div>
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/JpjpNHJ.md.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px #89cd0a",
                }}></div>
            </div>
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/JpjyTOv.png )",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px #62dafc",
                }}></div>
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "#62dafc",
                }}>
                <div className="name-skill self-center">Python</div>
              </div>
            </div>
          </div>
          <div className="scol flex flex-col">
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "purple",
                }}>
                <div className="name-skill self-center">Github</div>
              </div>
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px purple",
                }}></div>
            </div>
            <div className="skills flex flex-row  w-screen justify-center h-32 my-2">
              <div
                className="rounded-full w-24 self-center h-24"
                style={{
                  backgroundImage: "url(https://iili.io/JpwAff9.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 15px orange",
                }}></div>
              <div
                className="w-40 h-40 text-4xl flex justify-center p-4 font-bold text-center self-center"
                style={{
                  color: "orange",
                }}>
                <div className="name-skill self-center">Java</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//
