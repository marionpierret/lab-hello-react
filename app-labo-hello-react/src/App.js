// src/App.js
import React from "react"
import './App.css';
import Components from './Components';
import Hello from './Hello';
import img1 from './images/img1.png';
import img2 from './images/img2.png'
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';

const text1 = {
img: img3,
title: "Declarative",
text: "React makes it painless to create interactive UIs" 
}

const text2 = {
  img: img4,
  title: "Components",
  text: "Build encapsulated components that manage their state"
}

const text3 ={
  img: img5,
  title:"Single-Way",
  text: "A set of immutable values are passed to the component's"
}

const text4 ={
  img: img6,
  title:"JSX",
  text:"Statically-typed, designed to run on modern browsers"
}



const App = () => {
  return (
    <div className="App">
      <div className="Bar">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
    </div>
      <div className="Hello">
        <Hello />
      </div>
       <div className="Component">
        <Components {...text1}/>
        <Components {...text2}/>
        <Components {...text3}/>
        <Components {...text4}/>
      </div>
    </div>

  );
}

export default App;
