import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import navBack from '../../assets/images/nav_logo_back.png';
import { menuList } from "./menu";
import { socialLinks } from "./social";
const Navbar = (props) => {
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div className="absolute top-0  w-full   flex flex-col max-w-container z-50">
      <div className="flex flex-row items-center justify-between bg-gradient-to-b from-app-primary-200 to-app-primary-light py-2 px-8">
        <a href="/" className="items-center flex justify-center h-24">
          <img src={navBack} alt="back" className="h-24 absolute motion-safe:animate-spin-slow"/>
          <img src={Logo} alt="logo" className="h-12 z-20" />
        </a>
        <div className="flex flex-row gap-8">
          <ul className="flex flex-row gap-4 text-app-primary-dark text-xl">
            {menuList.map((menu, idx) => (
              <li onClick={() => handleNavigate(menu.path)} className="cursor-pointer" key={idx}>{menu.title}</li>
            ))}
          </ul>
          <div className="flex flex-row gap-4">
            {socialLinks.map((link, idx) => (
              <div key={idx}>
                <a href={link.url}>
                  <img src={link.icon} alt="social" />
                </a>
              </div>
            ))}
          </div>
          <div className="rounded-md bg-app-primary-dark text-white flex items-center px-8 cursor-pointer">
            connect wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
