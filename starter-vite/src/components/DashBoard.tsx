import React from "react";
import Header from "./Header";
import Data from "./Data";
import ActivityFeed from "./ActivityFeed";
import BookCards from "./BookCards";
import OrderedBooks from "./OrderedBooks";
import "./App.css"

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        {/* Left side */}
        <div className="dashboard-left">
          <Data />
          <ActivityFeed />
        </div>
        
        {/* Right side */}
        <div className="dashboard-right">
          <BookCards />
          <OrderedBooks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
