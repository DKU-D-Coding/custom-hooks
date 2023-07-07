import React from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import LexicalScoping from "./closure/LexicalScoping";
import Closure from "./closure/Closure";

function App() {
   return (
      <div>
         <ClassComponent />
         <FunctionComponent />
         <LexicalScoping />
         <Closure />
      </div>
   );
}

export default App;
