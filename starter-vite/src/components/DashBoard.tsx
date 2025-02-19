import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Header from "./Header";
import Data from "./Data";
import BookCards from "./BookCards";
import ActivityFeed from "./ActivityFeed";
import OrderedBooks from "./OrderedBooks";


const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
     {/* SCROLLABLE MAIN CONTENT */}
        <div className="main"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
          }}
        >
          <Header />

          <div style={{ display: "flex", marginTop: 16, gap: 16 }}>
            <Data />
            <BookCards />
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <ActivityFeed />
            <OrderedBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 