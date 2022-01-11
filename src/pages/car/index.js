import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import mask from '../../assets/images/car_mask.svg';
import { useLocation } from "react-router-dom";
import { carList } from "./carlist";
import icPrev from '../../assets/icons/ic_prev.svg';
import icNext from '../../assets/icons/ic_next.svg';

const CarPage = () => {
  const location = useLocation()
  const [carId, setCarId] = useState(location.state.id)
  const [car, setCar] = useState(carList[carId])
  const [traitid, setTraiId] = useState(0)
  useEffect(() => {
    setCar(carList[carId])
  }, [carId])
  return (
    <Layout>
      <div className="text-white">
        <div className="text-center text-3xl w-full border-x border-app-primary-light pt-12 pb-4 text-app-primary-dark" >
          <p>GEN-o</p>
          <div className="flex justify-between px-12">
            <button className="border flex items-center gap-2 text-xl shadow-xl outline-none px-8 py-2 bg-app-primary-200 hover:bg-app-primary-300 text-white rounded-l-full rounded-r-lg" onClick={() => setCarId(carId > 0 ? carId - 1 : carList.length - 1)}>
              <img className="w-8" src={icPrev} alt="prev"/>
              Previous car
            </button>
            <button className="border flex items-center gap-2 text-xl shadow-xl outline-none px-8 py-2 bg-app-primary-200 hover:bg-app-primary-300 text-white rounded-r-full rounded-l-lg" onClick={() => setCarId(carId < carList.length - 1 ? carId + 1 : 0)}>
              next car
              <img className="w-8" src={icNext} alt="next"/>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-app-primary-300 ">
          <div className="relative flex-shrink-0 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto items-center">
            <img src={car.image} alt="car" className="w-full md:h-full" />
            <img src={mask} alt="mask" className="w-full absolute bottom-0 transform translate-y-20 translate-x-1" />
          </div>
          <div className="md:w-2/3 w-full md:bg-gradient-to-r bg-gradient-to-b  from-app-primary-300 to bg-app-primary-100 flex flex-col relative">
            <div className="flex flex-col gap-4 pt-8 px-4 sm:px-12">
              <p className="text-center text-2xl">{car.name}</p>
              <p className="lg:w-2/3">{car.description}</p>
              <div className="flex gap-4 items-center">
                <p>rarity: </p>
                <p className={`${car.rarity === "common" ? "text-gray-400" : car.rarity === "uncommon" ? "text-app-green" : car.rarity === "rare" ? "text-blue-600" : car.rarity === "epic" ? "text-app-primary-dark":"text-app-yellow-100"} text-xl`}>{car.rarity}</p>
              </div>
              <p>trait: {car.available_traits[traitid].trait_name}</p>
            </div>
            <div className="absolute bottom-0 transform translate-y-20 w-full md:bg-gradient-to-r from-app-primary-300 to bg-app-primary-100 h-20 justify-between px-4 sm:px-12 flex items-center">
              <button className="bg-app-primary hover:bg-app-primary-dark h-max rounded-md px-4 py-2" onClick={() => setTraiId(traitid > 0 ? traitid - 1 : car.available_traits.length - 1)}>Prev trait</button>
              <button className="bg-app-primary hover:bg-app-primary-dark h-max rounded-md px-4 py-2" onClick={() => { setTraiId(traitid < car.available_traits.length - 1 ? traitid + 1 : 0) }}>next trait</button>
            </div>
          </div>
        </div>
        <div className="h-20 bg-app-primary-300"></div>
      </div>
    </Layout>
  )
}

export default CarPage