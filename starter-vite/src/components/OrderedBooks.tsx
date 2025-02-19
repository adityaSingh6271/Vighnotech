import React from "react";
import { Card, List, Row, Col, Tag } from "antd";
import "./Custom.css"

const data = [
  {
    id: 1,
    orderId: "#23093",
    description: `Teacher 1 placed a new order for "Computer Networking" books.`,
    time: "12 mins ago",
  },
  {
    id: 2,
    orderId: "#23094",
    description: `Teacher 2 placed a new order for "Mathematics" books.`,
    time: "15 mins ago",
  },
  {
    id: 3,
    orderId: "#23095",
    description: `Teacher 3 placed a new order for "Biology" books.`,
    time: "18 mins ago",
  },
];

const OrderedBooks: React.FC = () => {
  return (
    <Card
    className="custom-scroll"
      title={<h2 style={{ margin: 0 }}>Ordered Books</h2>}
      style={{
        width: 400,
        borderRadius: 8,
        margin: "20px auto",
        padding: 20,
        maxHeight: 400,
        marginRight: 80,
        overflowY: "scroll",
        scrollbarColor: "violet",
        marginTop: '-80px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <List
        dataSource={data}
       
        split={false}
        renderItem={(item) => (
          <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row style={{ width: "100%" }} align="middle">
             
              <Col flex="none">
                <Tag  style={{ fontWeight: "bold", backgroundColor:"#d9c9f5", color: "8A4AF3", borderRadius: 25 }}>
                  {item.orderId}
                </Tag>
              </Col>

              
              <Col flex="auto" style={{ marginLeft: 8, color: 'rgba(0, 0, 0, 0.45)' }}>
                {item.description}
              </Col>

              
              <Col flex="none" style={{ marginLeft: "auto", color: "blue" }}>
                {item.time}
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default OrderedBooks;
