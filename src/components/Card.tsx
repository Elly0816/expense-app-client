'use client';
import React, { ReactNode } from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';

// const actions: React.ReactNode[] = [
//   <EditOutlined key="edit" />,
//   <SettingOutlined key="setting" />,
//   <EllipsisOutlined key="ellipsis" />,
// ];

type CategoryCardPropType = {
  title: string;
  amount: number;
  icon?: ReactNode;
};
const App: React.FC<CategoryCardPropType> = ({ title, amount, icon }) => {
  //   const [loading, setLoading] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <>
      {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}

      <Card
        // actions={actions}
        style={{
          minWidth: 300,
          backgroundColor: COLORS[theme].cardBackground,
          color: COLORS[theme].textBody,
          borderColor: COLORS[theme].border,
          borderWidth: 2,
        }}
      >
        <Card.Meta
          avatar={<div style={{ fontSize: 30 }}>{icon}</div>}
          style={{
            backgroundColor: COLORS[theme].cardBackground,
            color: COLORS[theme].textHeading,
          }}
          title={<h2 style={{ color: COLORS[theme].textHeading }}>{title}</h2>}
          description={
            <>
              <h5 style={{ color: COLORS[theme].textBody }}>${amount}</h5>
            </>
          }
        />
      </Card>
    </>
  );
};

export default App;
