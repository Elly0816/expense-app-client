'use client';
import React, { ReactNode } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { COLORS } from '@/Colors';

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

type CategoryCardPropType = {
  title: string;
  amount: number;
  icon?: ReactNode;
};
const App: React.FC<CategoryCardPropType> = ({ title, amount, icon }) => {
  //   const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}
      <Card
        actions={actions}
        style={{
          minWidth: 300,
          backgroundColor: COLORS.cardBackground,
          color: COLORS.textBody,
          borderColor: COLORS.border,
          borderWidth: 2,
        }}
      >
        <Card.Meta
          avatar={<div style={{ fontSize: 30 }}>{icon}</div>}
          title={title}
          description={
            <>
              <p>${amount}</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default App;
