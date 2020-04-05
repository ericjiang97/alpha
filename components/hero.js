import React from "react";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto py-auto flex flex-row justify-around">
      <div className="max-w-4xl mx-auto py-auto p-8 flex flex-col justify-around">
        <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-left font-bold">
          Hello I'm Eric.
        </h1>
        <h3 className="m-0 w-full pt-10 leading-tight text-4xl text-left font-bold">
          I’m a Software Engineer
        </h3>
        <p className="text-left my-4 text-m">
          And I make impact by building awesome software solutions and I love
          building the communities around me.
        </p>
      </div>
      <div className="max-w-4xl mx-auto py-auto pb-8 flex flex-col justify-end">
        <img
          className="hidden md:inline"
          src="/images/transparent_profile.png"
          alt="Eric"
        />
      </div>
    </div>
  );
};

export default Hero;
