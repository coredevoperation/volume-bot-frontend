import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import Logo from "../../assets/Magic200.png";

const Nav = () => {
  return (
    <div className="h-24 flex items-center justify-center px-2 bg-slate-500 sticky top-0">
      <div className="navlogo">
        <img
          src={Logo}
          width={50}
          height={50}
          className="d-inline-block align-top"
        />
      </div>
      <div>
        <div className="text-[20px] md:text-3xl font-bold">Solana Market Volume Bot</div>
      </div>
    </div>
  );
};

export default Nav;
