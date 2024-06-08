import React, { useState } from "react";
import Home from "./Components/Home";

import NameIntro from "./Components/NameIntro";
import Features from "./Components/Features";
import Astronous from "./Components/Astronous";

export default function App() {
  const [state, setState]=useState("fixed");
  const [container , setContainer] = useState("")
  return <>

  <div className="flex  flex-col">
  <NameIntro/>
  <Home state={state} />

<Features setState={setContainer} />
<Astronous container={container}/>
  </div>
 
  
  {/* home intro page 
  road page  */}

  
  
  </>;
}
