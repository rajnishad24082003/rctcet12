import React from "react";
import "../assets/css/hobby.css";

const arr = [
  { image: require("../assets/img/images/inight.jpg") },
  { image: require("../assets/img/images/inight.jpg") },
  { image: require("../assets/img/images/inight.jpg") },
];

const world = () => {
  return (
    <>
      {arr.map((i) => (
        <div className="hobby-container">
          <div className="firstcard">
            <div
              className="imag-card"
              style={{
                backgroundImage: `url(${i.image})`,
              }}
            ></div>
            <div className="text-card">
              <h2>Astronomy Club</h2>
              <ul>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
                <li>
                  lorem12 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Nostrum, corporis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default world;
