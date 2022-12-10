import React, { useState } from "react";

function Our_Projects({ visibleCheck }) {
  let [popUp, setPopUp] = useState("none");
  let popUpFunOpen = () => {
    setPopUp(null);
  };
  let popUpFunClose = () => {
    setPopUp("none");
  };
  return (
    <>
      <div
        className="grid grid-rows-4 grid-flow-col gap-4 p-2 bg-white border-b-2 border-black absolute w-full"
        style={{ display: popUp ? `${visibleCheck}` : popUp }}
        onMouseEnter={popUpFunOpen}
        onMouseLeave={popUpFunClose}
      >
        <div className="m-1">
          <h3>Club Service</h3>
        </div>
        <div className="m-1">
          <h3>Community Service</h3>
        </div>
        <div className="m-1">
          <h3>Shiksha</h3>
        </div>
        <div className="m-1">
          <h3>Professional Development</h3>
        </div>
        <div className="m-1">
          <h3>Insernational Service</h3>
        </div>
        <div className="m-1">
          <h3>Public Relation And Marketing</h3>
        </div>
        <div className="m-1">
          <h3>Sports</h3>
        </div>
        <div className="m-1">
          <h3>Enterprenurship Development</h3>
        </div>
        <div className="m-1">
          <h3>Partner In Service</h3>
        </div>
        <div className="m-1">
          <h3>Editorial Service</h3>
        </div>
        <div className="m-1">
          <h3>Digital Communication</h3>
        </div>
        <div className="m-1">
          <h3>Social Media Relations</h3>
        </div>
        <div className="m-1">
          <h3>Media Production</h3>
        </div>
      </div>
    </>
  );
}

export default Our_Projects;
