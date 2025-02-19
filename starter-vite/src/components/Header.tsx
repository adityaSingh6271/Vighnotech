import React from "react";

import { Card } from "antd";
import Dropper from "../images/Dropper.png"
import Tabbing from "./Tabbing";
import TiaIcon from "../images/Tia.png"

const Header: React.FC = () => {
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "24px 20px 0 20px",
        fontFamily: "Josefin Sans, serif",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ marginLeft: 22 }}>Library Management</h1>
        <p style={{ marginLeft: 22, color: "grey", marginTop: 5 }}>
          Tanvir Chavan
        </p>
        <Tabbing />
      </div>

      <Card
        style={{
          border: "1px solid blue",
          borderRadius: "8px",
          width: "145px",
          height: "57px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          marginBottom: "100px",
          marginRight: 50
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "-15px" }}
        >
          <img
            src={TiaIcon}
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "blue",
              margin: "0 8px",
            }}
          />
          <span style={{ color: "blue", fontWeight: 700, fontSize: '16px'  }}>TIA</span>
          <img src={Dropper} alt="dropdownIcon" height={10} style={{marginLeft: 5}}/>
        </div>
      </Card>
    </div>
  );
};

export default Header;
