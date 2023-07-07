import React, { Component } from "react";

class ClassComponent extends Component {
   state = {
      count: 0,
   };

   setCount(num: number) {
      this.setState({
         count: num,
      });
   }
   render() {
      const { count } = this.state;
      return (
         <div>
            <div>
               <p>You clicked {count} times</p>
               <button
                  onClick={() => {
                     this.setCount(count + 1);
                  }}
               >
                  Click Me!
               </button>
            </div>
         </div>
      );
   }
}

export default ClassComponent;
