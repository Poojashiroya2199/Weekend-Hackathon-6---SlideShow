import React, { Component, useState } from "react";
// import "../styles/App.css";
import slides from "./../data.js";
const App = () => {
  const [displayimage, setimage] = useState(slides[0].title);
  const [displaytext, settext] = useState(slides[0].text);
  const handleReset = () => {
    setimage(slides[0].title);
    settext(slides[0].text);
  };
  const handleprev = (title) => {
    let copydata = [...slides];
    copydata.map((el) => {
      if (el.title === title) {
        let a = copydata.indexOf(el.title);
        //    console.log(a);
        if (a > -1) {
          --a;
          setimage(copydata[a].title);
          settext(copydata[a].text);
        }
      }
      return copydata;
    });
  };
  const handlenext = (title) => {
    let copydata = [...slides];
    copydata.map((el) => {
      if (el.title === title) {
        let a = copydata.indexOf(el.title);
        if (a < copydata.length - 2) {
          let b = a + 1;
          //  console.log(b);
          setimage(copydata[b].title);
          settext(copydata[b].text);
        }
      }
      return copydata;
    });
  };
  return (
    <>
      <button data-testid="button-restart" onClick={handleReset}>
        reset
      </button>
      <button
        data-testid="button-prev"
        onClick={() => handleprev(displayimage)}
      >
        previous
      </button>
      <button
        data-testid="button-next"
        onClick={() => handlenext(displayimage)}
      >
        next
      </button>
      <h1 data-testid="title">{displayimage}</h1>
      <p data-testid="text">{displaytext}</p>
      {/* <slides/> */}
    </>
  );
};

export default App;
