import React, { Component, useState } from "react";
import "../styles/App.css";
// import slides from "./../data.js";
const App = ({ slides }) => {
  //   const [displayimage, setimage] = useState(slides[0].title);
  //   const [displaytext, settext] = useState(slides[0].text);
  //   const [resetbtn, setreset] = useState(true);
  //   const [prevbtn, setprev] = useState(true);
  //   const handleReset = () => {
  //     setimage(slides[0].title);
  //     settext(slides[0].text);
  //     setprev(true);
  //   };
  //   const handleprev = (title) => {
  //     let copydata = [...slides];
  //     copydata.map((el) => {
  //       if (el.title === title) {
  //         let a = copydata.indexOf(el.title);
  //         //    console.log(a);
  //         if (a > -1) {
  //           setprev(false);
  //           --a;
  //           setimage(copydata[a].title);
  //           settext(copydata[a].text);
  //         }
  //       }
  //       return copydata;
  //     });
  //   };
  //   const handlenext = (title) => {
  //     let copydata = [...slides];
  //     copydata.map((el) => {
  //       if (el.title === title) {
  //         let a = copydata.indexOf(el.title);
  //         if (a < copydata.length - 2) {
  //           setreset(false);
  //           let b = a + 1;
  //           //  console.log(b);
  //           setimage(copydata[b].title);
  //           settext(copydata[b].text);
  //         }
  //       }
  //       return copydata;
  //     });
  //   };
  //   return (
  //     <>
  //       <button
  //         data-testid="button-restart"
  //         disabled={resetbtn}
  //         onClick={handleReset}
  //       >
  //         reset
  //       </button>
  //       <button
  //         data-testid="button-prev"
  //         disabled={prevbtn}
  //         onClick={() => handleprev(displayimage)}
  //       >
  //         previous
  //       </button>
  //       <button
  //         data-testid="button-next"
  //         onClick={() => handlenext(displayimage)}
  //       >
  //         next
  //       </button>
  //       <h1 data-testid="title">{displayimage}</h1>
  //       <p data-testid="text">{displaytext}</p>
  //       {/* <slides/> */}
  //     </>
  //   );
  // };

  // export default App;
  const [index, setIndex] = useState(0);

  let title = slides[index].title;
  let text = slides[index].text;

  function handleClick(action) {
    //console.log(action);
    if (action === "prev") {
      //if (show.index === 0) return;

      let newIndex = index - 1;
      setIndex(newIndex);
    } else if (action === "next") {
      //if (show.index === slides.length - 1) return;

      let newIndex = index + 1;
      setIndex(newIndex);
    } else if (action === "restart") {
      setIndex(0);
    }
  }

  return (
    <>
      <button
        onClick={() => handleClick("restart")}
        data-testid="button-restart"
        disabled={index === 0 ? true : false}
      >
        Restart
      </button>
      <button
        onClick={() => handleClick("prev")}
        data-testid="button-prev"
        disabled={index === 0 ? true : false}
      >
        Prev
      </button>
      <button
        onClick={() => handleClick("next")}
        data-testid="button-next"
        disabled={index === slides.length - 1 ? true : false}
      >
        Next
      </button>

      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </>
  );
};

export default App;
