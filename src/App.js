import React, { useState } from "react";
import Home from "./Components/Home";

import NameIntro from "./Components/NameIntro";
import Features from "./Components/Features";
import Astronous from "./Components/Astronous";
import Projects from "./Components/Projects";

export default function App() {
 
  const [container , setContainer] = useState("")
  return <>

  <div className="flex  flex-col w-fit">
  <NameIntro/>
  <Home  />

<Features setState={setContainer} />
<Astronous container={container}/>
<Projects/>
  </div>
 
  
  {/* home intro page 
  road page  */}

  
  
  </>;
}
