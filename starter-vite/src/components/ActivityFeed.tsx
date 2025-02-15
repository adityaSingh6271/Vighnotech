import React from 'react';
import { Card, List, Avatar, Button, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    time: '12 mins ago',
  },
  {
    key: '2',
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    time: '15 mins ago',
  },
  {
    key: '3',
    name: 'Michael Smith',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    time: '18 mins ago',
  },
];

const ActivityFeed: React.FC = () => {
  return (
    <Card
      style={{
        width: 820,
        borderRadius: 8,
        margin: '20px auto',
        padding: 20,
        marginLeft:"42px",
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
     
      <Row justify="space-between" align="middle">
        <Col>
          <h1 style={{ marginBottom: 0 }}>Today's Activity</h1>
        </Col>
        <Col>
          <Button>
            Filter By <DownOutlined />
          </Button>
        </Col>
      </Row>

    
      <List
        itemLayout="horizontal"
        dataSource={data}
        split={false}
        style={{ marginTop: 16 }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<span style={{ fontWeight: 'bold' }}>{item.name}</span>}
              description={item.description}
            />
            <div style={{ color: 'blue' }}>{item.time}</div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ActivityFeed;
