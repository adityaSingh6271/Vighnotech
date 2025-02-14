import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key: string) => {
    setActiveKey(key);
    console.log('Active tab:', key)
  };

 
  const baseTabStyle: React.CSSProperties = {
    marginRight: '10px',
    padding: '6px 10px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    color: '#4E4E4E',
  };

  
  const activeTabStyle: React.CSSProperties = {
    backgroundColor: '#1677ff',
    color: '#fff',
  };

  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <span style={activeKey === '1' ? { ...baseTabStyle, ...activeTabStyle } : baseTabStyle}>
          Dashboard
        </span>
      ),
     
    },
    {
      key: '2',
      label: (
        <span style={activeKey === '2' ? { ...baseTabStyle, ...activeTabStyle } : baseTabStyle}>
          All Books
        </span>
      ),
    
    },
    {
      key: '3',
      label: (
        <span style={activeKey === '3' ? { ...baseTabStyle, ...activeTabStyle } : baseTabStyle}>
          Issued Books
        </span>
      ),
    
    },
  ];

  return (
    <Tabs
      style={{ marginTop: "10px", marginLeft: "36px" }} 
      activeKey={activeKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default App;
