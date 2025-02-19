import React from "react";
import Home from "../images/HomeIcon.png";
import AddTab from "../images/AddTab.png";


const Navbar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        boxShadow: '0 0 2px 0 #00000040',
        height: 64,
        display: "flex",
        borderBottom: "1px solid #d9d9d9",
        padding: "0 24px",
        backgroundColor: "#fff",
        fontFamily: "Josefin Sans, sans-serif",
      }}
    >
      <img src={Home} alt="Home Icon" style={{ width: 20, height: 20, marginTop: 21, marginRight: 14, cursor:"pointer" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EDF1FF",
          borderRadius: 4,
          padding: "0 12px",
          height: 40,
          marginTop: 10,
          gap: 8,
        }}
      >
        <span
          style={{
            color: "#1E40AF",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Academic operations
        </span>
      </div>
      <img src={AddTab} alt="AddTab Icon" style={{ width: 52, height: 40, marginTop: 9, cursor:"pointer" }} />
     
    </div>
  );
};

export default Navbar;