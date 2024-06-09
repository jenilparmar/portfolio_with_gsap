import React, { useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const images = {
    1:'https://iili.io/Jp6GP7S.md.png',
    2:"https://iili.io/Jp6jtQ1.md.png",
    3:"https://iili.io/Jp6NqNV.md.png"
  }


  useEffect(() => {
    // Get all elements with the same class
    const elements = document.querySelectorAll(".project");
     const box = document.querySelectorAll(".underline")
    elements.forEach((element,index) => {
      // Create a GSAP timeline for each element
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 102%", // Adjust as needed
          end: "bottom center", // Adjust as needed
          toggleActions: "play none none reverse", // Adjust as needed
        },
      });

      // Define your animation for each element
      tl.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
      tl.to(`.${element.classList[0]} .two .${"underline:nth-child("+(index+1)+")"}`,{
        width:"40vw",
        duration:2,
      })
    });
  }, []);

  useGSAP(()=>{
   
    gsap.from('.projects',{
        scale:0.5,
        y:40,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:".c1",
            // markers:true,
        }
    })
})
  return (
   <>
   <div className='c1 flex flex-col  w-screen gap-5 h-fit p-2'style={{
       position:"absolute",
       top:"107em"
       }}>
       <div className='projects text-3xl font-semibold text-white'>Projects</div>
    <div className='project w-screen overflow-x-hidden h-fit justify-start gap-4 flex flex-row'>
        <div className='bg-transparent w-24 self-center justify-center z-10 flex flex-col h-36  mx-2 rounded-md'>
        <div className='photo w-full h-full bg-transparent self-center' 
        style={{
            backgroundImage:`url(${"https://iili.io/Jp6gT9n.png"})`,
            backgroundPosition:"center",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat"
        }}></div>
    
        </div>
        <div className='two w-40 h-fit self-center flex flex-col gap-2'>
            <div className='text-2xl text-white text-nowrap p-2 font-medium first-letter:text-yellow-500'>Social-Media</div>
            <div className='underline w-0 bg-yellow-500 -my-3 relative -top-1 mx-2 rounded-sm h-0.5'></div>
            <div>
                <ul className='text-white text-nowrap text-sm p-2'>
                    <li className='list-disc '>Innovative Liking Arrangements</li>
                    <li className='list-disc '>Share,See,Comment on posts</li>
                    <li className='list-disc '>Visit other user's profile</li>
                    <li className='list-disc '>follow user</li>
                </ul>
            </div>
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7204103308611850240/'>
            <button className='text-yellow-500 w-24 border-yellow-500 active:bg-yellow-500 transition-active duration-100 active:text-transparent self-center border-2 rounded-lg p-0.5 h-8 text-nowrap text-sm'>See Demo</button>
            </a>
        </div>
    </div>
    <div className='project w-screen overflow-x-hidden h-80 justify-start gap-4 flex flex-row'>
        
        <div className='two w-40 h-fit self-center relative top-6 left-8  flex flex-col gap-2'>
            <div className='text-xl text-white self-center p-2 font-medium first-letter:text-red-600'>Restaurant Management</div>
            <div className='underline w-0 bg-red-600 -my-3 relative -top-1 mx-2 rounded-sm h-0.5'></div>
            <div>
                <ul className='text-white text-nowrap text-sm p-4 -my-2'>
                    <li className='list-disc '>Online order</li>
                    <li className='list-disc '>Bill print & KOT print</li>
                    <li className='list-disc '>Finance management</li>
                </ul>
            </div>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7181125711003348992/">
            <button className='text-red-600 w-24 border-red-600 active:bg-red-600 transition-active duration-100 active:text-transparent self-center border-2 rounded-lg p-0.5 h-8 text-nowrap text-sm'>See Demo</button>
            </a>
        </div>
        <div className='bg-transparent w-28 self-center h-32 relative left-12 rounded-md' style={{
       
            backgroundImage:`url(${"https://iili.io/Jp6gaP2.png"})`,
            backgroundPosition:"center",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat"
        }}></div>
    </div>
    <div className='project w-screen overflow-x-hidden h-fit justify-start gap-4 flex flex-row'>
    <div className='bg-transparent w-24 self-center justify-center z-10 flex flex-col h-36  mx-2 rounded-md'>
        <div className='photo w-full h-full bg-transparent self-center' 
        style={{
            // "https://iili.io/Jp6gaP2.png"
            backgroundImage:`url(${"https://iili.io/Jp6gmDG.png"  })`,
            backgroundPosition:"center",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat"
        }}></div>
    
        </div>
        <div className='two w-40 h-fit self-center flex flex-col gap-2'>
            <div className='text-2xl text-white text-nowrap p-2 font-medium first-letter:text-green-600'>Wedding Web</div>
            <div className='underline w-0 bg-green-600 -my-3 relative -top-1 mx-2 rounded-sm h-0.5'></div>
            <div>
                <ul className='text-white text-nowrap text-sm p-2'>
                    <li className='list-disc '>Date of wedding</li>
                    <li className='list-disc '>Pre-wedding memories</li>
                    <li className='list-disc '>Ceremony Schedual</li>
                </ul>
            </div>
            <a href="https://jenilparmar.github.io/wedding--2/">
            <button className='text-green-600 w-24 border-green-600 active:bg-green-600 transition-active duration-100 active:text-transparent self-center border-2 rounded-lg p-0.5 h-8 text-nowrap text-sm'>Visit here</button>
            </a>
        </div>
    </div>
    <div className='project w-screen overflow-x-hidden h-80 justify-start gap-4 flex flex-row'>
        
        <div className='two w-40 h-fit self-center relative left-10 top-1 flex flex-col gap-2'>
            <div className='text-xl text-white  self-center p-3 font-medium first-letter:text-pink-600'>Coaching Web</div>
            <div className='underline w-0 bg-pink-600 -my-3 relative -top-1 mx-2 rounded-sm h-0.5'></div>
            <div>
                <ul className='text-white text-nowrap text-sm p-4 -my-2'>
                    <li className='list-disc '>Achievement page</li>
                    <li className='list-disc '>Fecualty infomation</li>
                    <li className='list-disc '>Contact us</li>
                </ul>
            </div>
            <a href="https://exlavya.vercel.app/">
            <button className='text-pink-600 w-24 border-pink-600 active:bg-pink-600 transition-active duration-100 active:text-transparent self-center border-2 rounded-lg p-0.5 h-8 text-nowrap text-sm'>Visit here</button>
            </a>
        </div>
        <div className='bg-transparent w-28 self-center h-32 relative left-12 rounded-md'
        style={{
            // "https://iili.io/Jp6gaP2.png"
            backgroundImage:`url(${"https://iili.io/Jp6r812.md.png" })`,
            backgroundPosition:"center",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat"
        }}></div>
    </div>
    <div className='project w-screen overflow-x-hidden h-fit justify-start gap-4 flex flex-row'>
        <div className='bg-transparent w-28 self-center h-32 mx-2 rounded-md'
        style={{
            // "https://iili.io/Jp6gaP2.png"
            backgroundImage:`url(${"https://iili.io/Jp6r55F.png"})`,
            backgroundPosition:"center",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat"
        }}></div>
        <div className='two w-40 h-fit self-center flex flex-col gap-2'>
            <div className='text-2xl text-white  p-2 font-medium first-letter:text-blue-600'>Hospital Management</div>
            <div className='underline w-0 bg-blue-600 -my-3 relative -top-1 mx-2 rounded-sm h-0.5'></div>
            <div>
                <ul className='text-white text-nowrap text-sm p-2'>
                    <li className='list-disc '>Information About Hospital</li>
                    <li className='list-disc '>Online Visit form</li>
                </ul>
            </div>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7165248291171885057/">
            <button className='text-blue-600 w-24 border-blue-600 active:bg-blue-600 transition-active duration-100 active:text-transparent self-center border-2 rounded-lg p-0.5 h-8 text-nowrap text-sm'>See Demo</button>
            </a>
        </div>
    </div>

   </div>
   </>
  )
}
