import React, { useState } from "react";
import Layout from "../../layout/layout";
import randCar from '../../assets/images/randCar.png';
import mask from '../../assets/images/mask.svg';
import lgLogo from '../../assets/images/lg_logo.png';
import roadmapBack from '../../assets/images/roadmap_back.png';
import roadOne from "../../assets/images/road_1.png";
import roadTwo from "../../assets/images/road_2.png";
import roadThree from "../../assets/images/road_3.png";
import roadFour from "../../assets/images/road_4.png";

import './index.css';
import caritem from "./caritem";
import CarItem from "./caritem";
import { useNavigate } from "react-router-dom";
import { carList } from "../car/carlist";
import { roadMap } from "./data";

const MintPage = () => {
  const [count, setCount] = useState(0)
  const limit = 500;
  const handleCount = (e) => {
    setCount((parseInt(e.target.value) > 0 ? parseInt(e.target.value) < limit ? e.target.value : limit : 0))
  }
  const roadmapIcons = [roadOne, roadTwo, roadThree, roadFour];
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate("/car", {
      state: {
        id: id
      }
    })
  }

  return (
    <Layout>
      <div className="relative flex flex-col overflow-hidden w-full">
        <div className="flex flex-row">
          <div className="w-2/5 relative">
            <img src={randCar} alt="random car" className=" z-0 h-auto flex-shrink-0  " />
            <img src={mask} alt="mask" className="absolute h-full right-0 top-0 transform translate-x-1 translate-y-1" />
          </div>
          <div className="bg-app-primary-light w-3/5 justify-end items-center flex px-10">
            <div className="flex flex-row items-center gap-8 h-full px-10 absolute left-1/2 transform -translate-x-1/2 w-1/3">
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <img src={lgLogo} alt="logo" className="w-2/3" />
                <p className="text-xl text-white">0/10000 minted!</p>
                <div className="flex flex-row justify-between text-3xl text-white font-bold">
                  <button onClick={() => { setCount(count > 1 ? count - 1 : 0) }}>-</button>
                  <div className="rounded-md w-2/3 bg-white">
                    <input className="w-full outline-none rounded-md text-black text-center" value={count} onChange={handleCount} type="number" />
                  </div>
                  <button onClick={() => setCount(count < limit ? count + 1 : limit)}>+</button>
                </div>
                <button className="bg-app-primary-dark w-1/3 text-white hover:bg-app-yellow-dark px-8 py-2 rounded-md">mint</button>
              </div>

            </div>
            <div className="w-1/2">
              <p className="text-white text-xl">
                Project description: all those days watching from the windows. all those years outside looking in. all that time never even knowing just how blind I have been, Now I am here blinking from the starlight now I am here suddenly I see, standing here it's oh so clear
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-app-primary-light py-8 flex flex-col gap-10 ">
          <p className="text-3xl text-center text-white">Introducing the gen-0 c ollection</p>
          <div className="flex flex-row gap-8 px-20">
            {carList.map((car, idx) => (
              idx < 4 && <CarItem car={car} key={idx} onClick={() => handleNavigate(car.id)} />
            ))}
          </div>
        </div>
        <div className="roadmap" style={{backgroundImage:`url(${roadmapBack})`}}>
          <div className="px-12 w-2/3 mx-auto bg-app-primary-dark rounded-xl shadow-xl p-12 text-white my-8 opacity-80 " >
            <div className="flex flex-col">
              {roadMap.map((data, idx) => (
                <div className="flex flex-col">
                  <div className="flex gap-8 items-end mb-4">
                  <p className="text-3xl">0{idx + 1}</p>
                  <img src={roadmapIcons[idx]} alt="roadmap"  className="h-16"/>
                  </div>
                  {data.map((item, idx) => (
                    <p className="text-xl px-2">{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>)
}



export default MintPage