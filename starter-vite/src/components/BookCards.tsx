import React from "react";
import { Row, Col, Card } from "antd";
import totalBooksIcon from "../images/Total_Books.png";
import borrowedBooksIcon from "../images/Borrowed_Books.png";
import lostBooksIcon from "../images/Lost_Books.png";
import availableBooksIcon from "../images/Available_Books.png";

const data = [
  {
    title: "Total Books",
    value: 500,
    description: "new books in the library.",
    color: "#2288FF",
    icon: (
      <img
        src={totalBooksIcon}
        alt="Total Books"
        style={{ width: 60, height: 60 }}
      />
    ),
  },
  {
    title: "Borrowed Books",
    value: 78,
    description: "books borrowed.",
    color: "#FFC107",
    icon: (
      <img
        src={borrowedBooksIcon}
        alt="Borrowed Books"
        style={{ width: 60, height: 60 }}
      />
    ),
  },
  {
    title: "Lost Books",
    value: 50,
    description: "books lost.",
    color: "#F44336",
    icon: (
      <img
        src={lostBooksIcon}
        alt="Lost Books"
        style={{ width: 60, height: 60 }}
      />
    ),
  },
  {
    title: "Available Books",
    value: "10,000",
    description: "books are available in the library.",
    color: "#4CAF50",
    icon: (
      <img
        src={availableBooksIcon}
        alt="Available Books"
        style={{ width: 60, height: 60 }}
      />
    ),
  },
];

const BookCards: React.FC = () => {
  return (
  <div style={{marginBottom: 20, marginTop: -18}}>
      <div
      style={{
        maxWidth: 400,
        margin: "20px auto",
        marginLeft: 30,
        height: 500,
      }}
    >
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col span={24} key={item.title}>
            <Card
              style={{
                border: `2px solid ${item.color}`,
                borderRadius: 8,
                height: 95,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {item.icon}
                <div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    <span style={{ fontWeight: "bold" }}>{item.value}</span>{" "}
                    {item.description}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
  );
};

export default BookCards;
