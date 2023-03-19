import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <>
      <div className=" bg-white/50 max-sm:bg-white/80 md:bg-white/50">
        <div className=" flex justify-around">
          <div className="nav1ele mt-3 flex-initial">
            <img
              src="https://static.wixstatic.com/media/74d974_2a37c3fefb834d63b1dbc7b202ecb7ce~mv2.png/v1/fill/w_78,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/RCTCET%20LOGO.png"
              alt="rctcet logo"
              className="bg-white p-1 rounded-full shadow-2xl"
            />
          </div>
          <div className="nav1ele mt-3 flex-initial max-sm:hidden sm:hidden md:block">
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
          <div className="hidden md:block my-auto ">
            <button>
              <Link to="./Login">Login </Link>
            </button>
          </div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <div className="nav1ele mt-3 flex-initial flex max-sm:flex md:hidden justify-center">
            <img
              src="https://static.wixstatic.com/media/8f62ff_d1a38fed0bba45b08f7afaef2869cbd1~mv2.png/v1/crop/x_0,y_39,w_1000,h_172/fill/w_406,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp_Image_2022-08-14_at_10_53_19_PM-removebg-preview.png"
              alt="logo"
              className=""
            />
          </div>
        </div>
        <div className="">
          <nav className=" max-sm:hidden sm:hidden md:flex justify-around p-0">
            <li className="list-none  p-2 hover:border-b-2 hover:border-black">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2 ">
              <Link to={"/HobbyBasedClubs"}>Hobby Based Clubs</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/GetInvolved"}>Get Involved</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/AboutUs"}>About Us</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/UpcomingEvents"}>Upcoming Events</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/OurProjects"}>Our Projects</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/ClubInsight"}>Club Insight</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/Members"}>Members</Link>
            </li>
            <li className="list-none hover:border-b-2 hover:border-black p-2">
              <Link to={"/MeetTheTeam"}>Meet the Team</Link>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
