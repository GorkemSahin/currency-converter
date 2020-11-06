import { Select, Input } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import styles from './styles';
const { Option } = Select;
const { Title } = Typography;

export default function Converter ({ style }) {
  const data = [ { value: "TR", text: "TR "}, { value: "EUR", text: "EUR "},{ value: "ABC", text: "BCD "},{ value: "ABC", text: "BCD "},]
  const options = data.map(d => <Option key={d.value}>{d.text}</Option>);
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        <div style={ styles.statisticContainer }>
          <Title level={5}>Statistic</Title>
          <Title level={2}>Data</Title>
        </div>
        <div style={ styles.statisticContainer }>
          <Title level={5}>Statistic</Title>
          <Title level={2}>Data</Title>
        </div>
        <div style={ styles.statisticContainer }>
          <Title level={5}>Statistic</Title>
          <Title level={2}>Data</Title>
        </div>
      </div>
    </div>
  );
}