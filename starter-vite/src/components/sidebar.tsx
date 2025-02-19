import React from "react";
import { Menu } from "antd";
import Logo from "../images/Logo.png";
import DashIcon from "../images/Dash.png";
import PenIcon from "../images/penicon.png";
import IssuedIcon from "../images/IssuedBooks.png";
import TeleIcon from "../images/telephone.png";
import LogoutIcon from "../images/logout.png";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
          <span style={{color: '#1E40AF', fontWeight: "bold"}}>Dashboard</span>
          <img src={DashIcon} alt="DashIcon" style={{ width: 20, height: 20 }} />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{color: '#1E40AF', fontWeight: "bold"}}>All Books</span>
          <img src={PenIcon} alt="BooksIcon" style={{ width: 20, height: 20 }} />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{color: '#1E40AF', fontWeight: "bold"}}>Issued Books</span>
          <img src={IssuedIcon} alt="IssuedIcon" style={{ width: 20, height: 20 }} />
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width:'15%',
        boxShadow: '0 4px 4px 0 #00000040',
        borderRight: "1px solid #d9d9d9",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Josefin Sans, sans-serif",
      }}
    >
      <div style={{ padding: "16px" }}>
        <img src={Logo} alt="VighnoTech Logo" style={{ width: "100%", height: "auto" }} />
      </div>
      <Menu mode="inline" defaultSelectedKeys={["3"]} style={{ borderRight: "none", flex: 1 }} items={menuItems} />
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, cursor:"pointer" }}>
          <span>Contact</span>
          <img src={TeleIcon} alt="telephone" style={{ width: 20, height: 20 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", cursor:"pointer" }}>
          <span>Sign out</span>
          <img src={LogoutIcon} alt="logout" style={{ width: 20, height: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;