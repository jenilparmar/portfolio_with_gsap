import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function NameIntro() {
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.from('.x', {
            opacity: 0,
            x:-150,
            scale:0.5,
            duration: 1,
            stagger: 0.1,             
        });
    });

    return (
        <div>
            <div className=" text-white p-4 flex flex-col my-10">
                
                    <div className="text-3xl  font-extrabold">I am</div>{" "}
                    <div className="x text-white text-4xl first-letter:text-blue-700 font-bold">Frontend developer</div>
            
                <div className="x text-white text-4xl first-letter:text-blue-700 font-bold">Backend developer</div>
                <div className="x text-white text-4xl first-letter:text-blue-700 font-bold">Fullstack developer</div>
                <div className="x text-white text-4xl first-letter:text-blue-700 font-bold">Web developer</div>
                <div className="x text-white text-4xl first-letter:text-blue-700 font-bold">Jenil Parmar</div>
            </div>
        </div>
    );
}
