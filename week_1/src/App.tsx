import React from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import LexicalScoping from "./closure/LexicalScoping";
import Closure from "./closure/Closure";
import Foo from "./closure/Foo";

function App() {
   return (
      <div>
         <ClassComponent />
         <FunctionComponent />
         <LexicalScoping />
         <Closure />
         <Foo />
      </div>
   );
}

export default App;
