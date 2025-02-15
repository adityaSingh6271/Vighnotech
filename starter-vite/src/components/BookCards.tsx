import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  BookOutlined,
  ArrowDownOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const data = [
  {
    title: 'Total Books',
    value: 500,
    description: 'new books in the library.',
    color: '#2288FF',
    icon: <BookOutlined style={{ fontSize: 24, color: '#2288FF' }} />,
  },
  {
    title: 'Borrowed Books',
    value: 78,
    description: 'books borrowed.',
    color: '#FFC107',
    icon: <ArrowDownOutlined style={{ fontSize: 24, color: '#FFC107' }} />,
  },
  {
    title: 'Lost Books',
    value: 50,
    description: 'books lost.',
    color: '#F44336',
    icon: <CloseCircleOutlined style={{ fontSize: 24, color: '#F44336' }} />,
  },
  {
    title: 'Available Books',
    value: '10,000',
    description: 'books are available in the library.',
    color: '#4CAF50',
    icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#4CAF50' }} />,
  },
];

const BookCards: React.FC = () => {
  return (
    <div style={{ maxWidth: 400, margin: '20px auto', marginLeft: 10, maxHeight: 500, marginBottom: '5px' }}>
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col span={24} key={item.title}>
            <Card
              style={{
                border: `2px solid ${item.color}`,
                borderRadius: 8,
                height: 100
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {item.icon}
                <div>
                  
                  <div style={{ fontSize: 24, fontWeight: 'bold', color: item.color }}>
                    {item.title}
                  </div>
                  
                  <div style={{ marginTop: 4, color: 'rgba(0, 0, 0, 0.45)' }}>
                    <span style={{ fontWeight: 'bold'}}>{item.value}</span>{' '}
                    {item.description}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookCards;
