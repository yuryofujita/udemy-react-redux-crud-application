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
// function App() {
//   const greeting = "Hi! Tom";
//   const dom = <h1 className= "foo">{ greeting }</h1>
//   return dom;
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
