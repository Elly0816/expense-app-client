import { Row, Col, Statistic, Button } from 'antd';

const DataDisplay: React.FC = () => {
  return (
    <Col span={12}>
      <Row gutter={16}>
        <Statistic title="Active Users" value={112893} />
      </Row>
      <Row gutter={16}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Row>
      <Row gutter={16}>
        <Statistic title="Active Users" value={112893} loading />
      </Row>
    </Col>
  );
};

export default DataDisplay;
