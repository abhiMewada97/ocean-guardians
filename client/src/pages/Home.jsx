import React from 'react'
import ocean from "../assets/ocean.jpg"

const Home = () => {
  return (
    <div>
      <img
        src={ocean}
        alt="oceanimg"
        className="w-full max-h-screen relative"
      />
      <div className="container absolute bottom-80 left-44 text-9xl font-bold">
        <div id="title" className="">
          <h1 className="text-[#0048c9] text-center mb-10  w-full ">
            OCEAN GUARDIANS
          </h1>
          <p className="text-6xl text-center text-white">You can be the one!</p>
        </div>
      </div>
    </div>
  );
}

export default Home