import React from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import LexicalScoping from "./closure/LexicalScoping";

function App() {
   return (
      <div>
         <ClassComponent />
         <FunctionComponent />
         <LexicalScoping />
      </div>
   );
}

export default App;
