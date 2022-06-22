import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// V1 using JScript
//<p>Hello World</p>
//onst p1 = React.createElement("p", {id : "firstPara"}, "hows it going");
// const li1 = React.createElement("li", null, "first bullet");
// const li2 = React.createElement("li", null, "second bullet");
// const ul = React.createElement("ul", null, [li1, li2]);
// const ul2 = React.createElement("ul", null, [React.createElement("ul", null, "create something"),React.createElement("ul", null, "create something else")]);
// const myDiv = React.createElement( "div", null, [p1,ul,ul2]);

// V2 using JSX
// const p1 = <p style={{background: "#ff0", "font-size": "14px"}}>Hiya!</p>
// const ul = <ul className="firstList">
//         <li>first</li>
//         <li>second</li>
// </ul>

// const myLabel = <label htmlFor="lbname">Enter your name</label>
// const myInput = <input type="text" id="name"></input>

// const twoParas = <div><p>para1</p><p>para2</p></div>

// const myName = "DQ";
// const greeting = <p>Hello {myName}</p>

// if (myName === "DQ") {
//   console.log("Hi DQ");
// }
// // or ternary statement
// myName === "DQ" ? console.log("Hi DQ") : console.log("You are not DQ");

// // destructuring
// const numArray = [1,2,3,4,5];
// const [first,second] = numArray;
// console.log(first,second);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// //root.render(ul,document.getElementById("root"));
// root.render(ul,document.getElementById("root"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
