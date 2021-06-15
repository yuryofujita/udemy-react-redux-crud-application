import React, {Component} from "react";
// function App() {
//   return (
//     <div>Hello World!</div>
//   );
// }
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, world!!"
//   );
// }
function App() {
  const greeting = "Hi! Tom";
  const dom = <h1 className= "foo">{ greeting }</h1>
  return dom;
}

export default App;
