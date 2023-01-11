import React from "react";
import Gallery from "./Gallery";

function Home() {
  return (
    <>
      <div className="container mx-auto bg-black bg-opacity-10 p-5 lg:w-3/4">
        <div className="text-center font-bold text-4xl ">
          <h1 className="p-3">EXPERIENCE</h1>
          <h1 className="p-2">ROTARACT CLUB OF TCET</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <div className="rounded-lg">
            <img
              src="https://static.wixstatic.com/media/8f62ff_4bd8a8e58f3a4b949e2e3b8c2714452e~mv2.png/v1/fill/w_1311,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8f62ff_4bd8a8e58f3a4b949e2e3b8c2714452e~mv2.png"
              alt=""
              className="p-6 "
            />
          </div>
          <div>
            <p className="p-6">
              At Rotaract Club of TCET, wellbeing is at the forefront of what
              we’re working together towards. Our programs and activities are
              designed to be a catalyst that helps community members reach their
              goals and fulfill their potential. Learn more about the positive
              impact we have and join us in bringing about positive change.
            </p>
            <p className="text-right p-2">Chartered on 15th September 2017 </p>
            <br />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="bg-regalblueby-400 px-16 w-fit p-5 text-white font-bold rounded-xl hover:bg-white hover:text-black shadow-aboutshadow hover:shadow-none transition ease-in-out delay-100">
            ABOUT AS
          </p>
        </div>
      </div>
      <div className="lg:w-3/4 container mx-auto text-center p-12">
        <img
          src="https://static.wixstatic.com/media/8f62ff_6070c543eb474e8f811ca37ce8038b85~mv2.png/v1/fill/w_437,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ThemeLogo_webp.png"
          alt=""
          className="mx-auto my-auto"
        />
        <h1 className="text-3xl font-extrabold p-9">RISE OF THE OLYMPIANS</h1>
        <p className="text-left">
          Just like how the mighty gods of Mount Olympus faced the challenges
          early in their lives and overcame them bravely and rose to glory, we
          at RCTCET aim to conquer all challenges that come our way and thrive
          towards betterment of ourselves and everyone around us. Growing
          together and pushing forth for what is just despite the implications
          is undoubtedly arduous, but it is vital. As RCTCET, we strive to work
          towards improvement, facing and overcoming obstacles, and rising to
          heights of Mount Olympus!
        </p>
      </div>
      <div className="container mx-auto lg:w-3/4 p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_a873d3cef7314fd0a63c365dd026ebbe~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_a873d3cef7314fd0a63c365dd026ebbe~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_637c0aca37254e95a4fe3579c1bf281c~mv2.png/v1/fill/w_260,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f62ff_637c0aca37254e95a4fe3579c1bf281c~mv2.png"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_9c02c51091f34524a189c2887e96d5fa~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_9c02c51091f34524a189c2887e96d5fa~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/8f62ff_5529529e74d64df2bd1199790aab2ba9~mv2.jpg/v1/fill/w_260,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f62ff_5529529e74d64df2bd1199790aab2ba9~mv2.jpg"
              alt=""
              className="hover:bg-slate-200 hover:bg-opacity-50 hover:opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="border border-slate-800 p-12 text-center">
        <Gallery></Gallery>
      </div>
      <div>
        <div className="">
          <h1 className="text-center text-3xl font-extrabold p-9">FOUNDER</h1>
        </div>
        <div className="mb-10 border border-black rounded-lg container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:w-3/4">
          <div>
            <img
              src="https://static.wixstatic.com/media/74d974_5569edfe00de44dc9ca0934e350d857d~mv2.jpg/v1/fill/w_529,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/399ff69f-9aab-49f5-9a3a-7673a790ac4c.jpg"
              alt=""
              className="rounded-l-lg"
            />
          </div>
          <div className="bg-regalblueby-400 p-4 bg-rounded-r-lg opacity-80 text-white relative">
            <p className="font-bold text-2xl">
              "Personality has power to uplift, power to depress, power to
              curse, and power to bless."
            </p>
            <div className=" text-black absolute bottom-0 left-0 m-4">
              <p>- Paul P. Harris</p>
              <p>- Founder, Rotary International</p>
            </div>
          </div>
        </div>
        <div className=" bg-black bg-opacity-50">
          <div className="p-5 ">
            <h1 className="text-center text-white font-extrabold text-4xl">
              CONTACT ROTARACT CLUB OF TCET
            </h1>
          </div>
          <div className="">
            <p className="text-center mx-auto w-1/2 md:w-1/4 p-3 ">
              Thakur College of Engineering and Technology A Block, Thakur
              Educational Campus, Thakur Village, Kandivali East, Mumbai 400101,
              MH-IN tcetrotaract@gmail.com
            </p>
          </div>
          <div className="container mx-auto flex justify-around flex-wrap border border-yellow-800 max-w-full pb-9 ">
            <div className="border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">INSTAGRAM</h2>
            </div>
            <div className="border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">YOUTUBE</h2>
            </div>
            <div className="border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">TWITTER</h2>
            </div>
            <div className="border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">LINKEDIN</h2>
            </div>
            <div className="border w-fit border-black rounded-full text-white bg-slate-900 hover:text-black hover:bg-white transition delay-100">
              <h2 className="px-4 py-2">DISCORD</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
