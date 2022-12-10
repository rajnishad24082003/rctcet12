import React, { useState } from "react";
import Our_Projects from "./Our_Projects";
import "./navbar.css";
import "../App.css";
function Navbar() {
  let [popUp, setPopUp] = useState("none");
  let popUpFunOpen = () => {
    setPopUp("");
  };
  let popUpFunClose = () => {
    setPopUp("none");
  };
  return (
    <>
      <div className=" bg-white/50">
        <div className=" flex justify-around">
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/74d974_2a37c3fefb834d63b1dbc7b202ecb7ce~mv2.png/v1/fill/w_78,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/RCTCET%20LOGO.png"
              alt="rctcet logo"
              className="bg-white p-1 rounded-full shadow-2xl"
            />
          </div>
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/8f62ff_d1a38fed0bba45b08f7afaef2869cbd1~mv2.png/v1/crop/x_0,y_39,w_1000,h_172/fill/w_406,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp_Image_2022-08-14_at_10_53_19_PM-removebg-preview.png"
              alt="logo"
            />
          </div>
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/8f62ff_6070c543eb474e8f811ca37ce8038b85~mv2.png/v1/fill/w_125,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ThemeLogo_webp.png"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <nav className="flex justify-around p-2">
            <li className="list-none  p-2 hover:border-b-2 hover:border-black">
              Home
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2 ">
              Hobby Based Clubs
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Get Involved
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              About Us
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Upcoming Events
            </li>
            <li
              className="list-none hover:border-b-2 hover:border-black p-2"
              onMouseEnter={popUpFunOpen}
              onMouseLeave={popUpFunClose}
            >
              Our Projects
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Club Insight
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Contact
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Members
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              Meet the Team
            </li>
          </nav>
        </div>
      </div>
      <Our_Projects visibleCheck={popUp}></Our_Projects>
    </>
  );
}

export default Navbar;
