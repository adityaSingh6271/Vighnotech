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
        fontFamily: "Josefin Sans, serif"
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ marginLeft: 22 }}>Library Management</h1>
        <p style={{ marginLeft: 22, color: "grey", marginTop: 5 }}>
          Tanvir Chavan
        </p>

        <div
          style={{
            marginTop: "20px",
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.35)',
            width: "420px",
            height: "50px",
            borderRadius: "5px",
            marginLeft: 10,
            marginBottom: 4
          }}
        >
          <Tabs />
        </div>
      </div>

      <Card
        style={{
          border: "2px solid blue",
          borderRadius: "8px",
          width: "115px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "-15px" }}
        >
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
