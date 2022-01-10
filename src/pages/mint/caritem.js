import React from "react";

const CarItem = (props) => {
  const { className, car, onClick } = props
  return (
    <div className="rounded-lg flex flex-col items-center px-2 text-white text-center py-8 cursor-pointer" onClick={onClick}>
      <div className={`w-full py-8 rounded-tl-3xl text-2xl ${car.rarity === "common" ? "bg-gray-400" : car.rarity === "uncommon" ? "bg-app-green" : car.rarity === "rare" ? "bg-blue-600" : car.rarity === "very_rare" ? "bg-app-primary-dark":"bg-app-yellow-100"}`}>
        <span>{car.name}</span>
      </div>
      <img src={car.image} alt="car" />
      <div className={`bg-app-primary w-full pb-12  pt-4 rounded-br-3xl px-10 ${car.rarity === "common" ? "bg-gray-400" : car.rarity === "uncommon" ? "bg-app-green" : car.rarity === "rare" ? "bg-blue-600" : car.rarity === "very_rare" ? "bg-app-primary-dark":"bg-app-yellow-100"}`}>
        <p className="text-left">Rarity</p>
        <span className="text-center text-2xl">{car.rarity}</span>
      </div>
    </div>
  )
}


export default CarItem