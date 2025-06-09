import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { Row, Col, Statistic } from 'antd';
import { CSSProperties } from 'react';
import Title from 'antd/es/typography/Title';

const MyTitle: React.FC<{ title: string; style?: CSSProperties }> = ({ title, style }) => {
  const { theme } = useTheme();
  return (
    <Title level={4} style={{ color: COLORS[theme].textHeading, ...style }}>
      {title}
    </Title>
  );
};

const DataDisplay: React.FC = () => {
  const { theme } = useTheme();

  const style = {
    // backgroundColor: COLORS[theme].cardBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: '50%',
  } as CSSProperties;

  const textColorStyle = { color: COLORS[theme].textHeading } as CSSProperties;
  const statisticStyle = { width: '50%', textAlign: 'left', marginBottom: 20 } as CSSProperties;

  return (
    <Col style={{}}>
      <Row gutter={16} style={style}>
        <Statistic
          style={statisticStyle}
          title={<MyTitle title="Past 24 hours" />}
          value={112893}
          valueStyle={textColorStyle}
        />
        <Statistic
          style={{ ...statisticStyle, marginTop: 30 }}
          title={<MyTitle title="" />}
          value={112893}
          valueStyle={textColorStyle}
        />
      </Row>
      <Row gutter={16} style={style}>
        <Statistic
          style={statisticStyle}
          title={<MyTitle title="Past Week" />}
          value={112893}
          valueStyle={textColorStyle}
        />
        <Statistic
          style={{ ...statisticStyle, marginTop: 30 }}
          title={<MyTitle title="" />}
          value={112893}
          valueStyle={textColorStyle}
        />
      </Row>
      <Row gutter={16} style={style}>
        <Statistic
          style={statisticStyle}
          title={<MyTitle title="Past Month" />}
          value={112893}
          precision={2}
          valueStyle={textColorStyle}
        />
        <Statistic
          style={{ ...statisticStyle, marginTop: 30 }}
          title={<MyTitle title="" />}
          value={112893}
          precision={2}
          valueStyle={textColorStyle}
        />
      </Row>
      <Row gutter={16} style={style}>
        <Statistic
          style={statisticStyle}
          title={<MyTitle title="Past Year" />}
          value={112893}
          valueStyle={textColorStyle}
        />
        <Statistic
          style={{ ...statisticStyle, marginTop: 30 }}
          title={<MyTitle title="" />}
          value={112893}
          valueStyle={textColorStyle}
        />
      </Row>
    </Col>
  );
};

export default DataDisplay;
