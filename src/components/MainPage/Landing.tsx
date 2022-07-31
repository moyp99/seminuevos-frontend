import React from 'react'
import Form from "../Form";

const Landing = () => {
  return (
    <div className="block md:flex px-4 pt-16  h-[100vh]">
    <div className=" absolute md:hidden top-0 left-0 z-[-1] w-full bg-gray-600">
      <img src="/static/mobile-car.jpg" />
    </div>
    <div className="md:px-16  md:w-[50vw] xl:px-32 xl:absolute xl:bottom-[12vh]">
      <h2 className="text-left z-10 text-white md:text-title text-5xl drop-shadow-main-text">
        Encuentra tu auto ideal
      </h2>
      <Form />
    </div>

    <div className="hidden md:block absolute right-0 top-0 z-[-1] w-[50vw] h-[100vh] bg-gray-600">
      <img className="max-h-full min-w-full" src="/static/main-car.jpg" />
    </div>
  </div>
  )
}

export default Landing