import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Astronous({container}) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.ass',{
        x:-80
    },{
       x:350,
       y:-200,
        duration:3,
        scrollTrigger:{
            trigger:'.container4',
            // markers:true,
            start:"top 45%",
            end:"bottom 20%",
            scrub:2,
            pin:true
        },
       
    })
  });

  return (

    <div className="container4 w-screen h-20">
         <div
      className="ass bg-transparent w-20 h-20"
      id="ass"
      style={{
        backgroundImage: "url(https://iili.io/JpUMJr7.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></div>

    </div>
  );
}
