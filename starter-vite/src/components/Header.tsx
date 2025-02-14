import React from "react";
import Tabs from "./Tabs";
import { Card } from "antd";
import { DownOutlined } from "@ant-design/icons";


const Header: React.FC = () => {
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "24px 20px 0 20px",
      }}
    >
      
      <div style={{ flex: 1 }}>
        <h1 style={{ marginLeft: 22 }}>Library Management</h1>
        <p style={{ marginLeft: 22 , color: "grey" }}>Tanvir Chavan</p>

        
        <div style={{ marginTop: "20px" }}>
          <Tabs />
        </div>
      </div>

      <Card
        style={{
          border: "2px solid blue",
          borderRadius: "8px",
          width: "105px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          marginBottom: "100px"
        }}
      >
        
        <div style={{ display: "flex", alignItems: "center", marginLeft: '-5px' }}>
          <img
            src="http://thakureducation.org/images/logo.png"
            alt="logo"
            style={{ width: "24px", height: "24px" }}
          />
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "blue",
              margin: "0 8px",
            }}
          />
          <span style={{ color: "blue", fontWeight: 600 }}>TIA</span>
          <DownOutlined style={{ color: "blue", fontSize: "12px" }} />
        </div>
      </Card>
    </div>
  );
};

export default Header;
