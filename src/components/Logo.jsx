import React from "react";
// import logo from "../../assets/Logo.jpg";
import reactimg from "../assets/react.svg";
import Logoi from "../assets/Logo.png";
function Logo({ width = "150px" }) {
  return (
    <div>
      <img src={Logoi} width="150px" alt="MegaBlog Logo" className="h-full" />
    </div>
  );
}

export default Logo;
