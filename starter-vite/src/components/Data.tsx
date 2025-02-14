import React, { useEffect } from 'react';
import { Pie } from '@antv/g2plot';
import { Button, Row, Col, Space, Card } from 'antd';
import { DownOutlined, ExportOutlined, AntCloudOutlined } from '@ant-design/icons';

const DonutChartExample: React.FC = () => {
  const data = [
    { type: 'New Books', desc: 'Percentage of new Books in the inventory', value: 20 },
    { type: 'Lost Books', desc: 'Percentage of total lost books', value: 30 },
    { type: 'Issued Books', desc: 'Percentage of total books issued', value: 50 },
  ];

 
  const colorArray = ['#90CAF9', '#448AFF', '#1565C0'];

  useEffect(() => {
    const piePlot = new Pie('container2', {
      data,
      angleField: 'value',
      colorField: 'type',
      color: colorArray,
      radius: 1,
      innerRadius: 0.6,
      legend: false,
      label: {
        type: 'inner',
        autoRotate: false,
        content: '{value}%',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        labelLine: false,
      },
      tooltip: {
        formatter: (datum) => ({
          name: datum.type,
          value: `${datum.value}%`,
        }),
      },
      interactions: [
        { type: 'element-selected' },
        { type: 'element-active' },
      ],
    });

    piePlot.render();
    return () => {
      piePlot.destroy();
    };
  }, []);

  return (
    <Card style={{ width: 820, borderRadius: 8, marginLeft: '40px', marginTop: '20px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
    }}>
      <Row justify="space-between" align="middle">
        <Col>
          <h3 style={{ marginBottom: 0 }}>Total Books</h3>
          <p style={{ color: '#666', marginTop: 4 }}>
            Chart of all the available and borrowed books.
          </p>
        </Col>
        <Col>
          <Button>
            Filter By <DownOutlined />
          </Button>
        </Col>
      </Row>

      <Row gutter={16} align="middle" style={{ marginTop: 16 }}>
        {/* Donut chart on the left */}
        <Col span={12}>
          <div id="container2" style={{ width: '100%', height: 300, }} />
        </Col>

        {/* Custom legend on the right */}
        <Col span={12}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {data.map((item, index) => (
              <div
                key={item.type}
                style={{ display: 'flex', alignItems: 'start', gap: '8px' }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '15%',
                    backgroundColor: colorArray[index],
                    marginTop: 4,
                    marginLeft: 90
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{item.type}</p>
                  <p style={{ margin: 0, color: '#666' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <Row justify="start" style={{ marginTop: 24 }}>
        <Space>
          <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: '400px' }}>
            <ExportOutlined /> Export data
          </Button>
          <Button style={{ backgroundColor: '#8a4af3', color: 'white' }}>
            <AntCloudOutlined /> Import
          </Button>
        </Space>
      </Row>
    </Card>
  );
};

export default DonutChartExample;
