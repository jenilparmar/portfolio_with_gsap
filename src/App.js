import React, { useState } from "react";
import Home from "./Components/Home";

import NameIntro from "./Components/NameIntro";
import Features from "./Components/Features";

export default function App() {
  const [state, setState]=useState("fixed")
  return <>

  <div className="flex  flex-col">
  <NameIntro/>
  <Home state={state} />

<Features setState={setState}/>
  </div>
 
  
  {/* home intro page 
  road page  */}

  
  
  </>;
}
