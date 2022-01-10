import React from "react";
import Logo from '../../assets/icons/logo.svg';
import Car from '../../assets/images/footer_car.png';
import icoMedium from '../../assets/icons/ico_medium.png';
import icoDiscord from '../../assets/icons/ico_discord.png';
import icoTwitter from '../../assets/icons/ico_twitter.png';

const Footer = () => {
  return (
    <footer className="px-4 pt-12 py-6 bg-gradient-to-b from-transparent to-app-primary-300 text-white justify-start flex flex-col w-full text-sm">
      <div className=" w-full justify-end flex">
        <div className="w-1/3 relative items-start h-48 justify-end">
          <img src={Car} alt="car" className="absolute bottom-0 left-0 w-2/3 transform translate-x-12" />
          <div className="items-center flex w-2/3 justify-end ml-auto transform -translate-y-2">
            <div className="w-full rounded-full h-16 bg-app-primary-dark -mr-1 flex justify-around px-2 items-center">
              <div className="p-1 bg-app-primary-300 cursor-pointer hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">
                <a href="www.google.com" className="flex items-center justify-center"><img src={icoMedium} className="w-8/12" /></a>
              </div>
              <div className="p-1 bg-app-primary-300 cursor-pointer hover:bg-app-yellow-dark rounded-full w-10 h-10 flex items-center justify-center">
                <a href="www.google.com" className="flex items-center justify-center"><img src={icoTwitter} className="w-8/12" /></a>
              </div>
              <div className="p-1 bg-app-primary-300 cursor-pointer hover:bg-app-green rounded-full w-10 h-10 flex items-center justify-center">
                <a href="www.google.com" className="flex items-center justify-center"><img src={icoDiscord} className="w-8/12" /></a>
              </div>
            </div>
            <div className="w-full h-4 bg-app-primary-dark "></div>
          </div>
          <div className="h-full w-6 bg-app-primary-dark absolute top-0 right-0"></div>
        </div>
      </div>
      <p className="text-center">Ⓒ2022 underground.com  &nbsp; All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
