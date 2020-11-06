import { Select, Input, Space } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import styles from './styles';
const { Option } = Select;
const { Title, Text } = Typography;

export default function Converter ({ style }) {
  const data = [ { value: "TR", text: "TR "}, { value: "EUR", text: "EUR "},{ value: "ABC", text: "BCD "},{ value: "ABC", text: "BCD "},]
  const options = data.map(d => <Option key={d.value}>{d.text}</Option>);
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        <div style={ styles.currenciesContainer }>
          <div style={ styles.columnContainer }>
            <Select placeholder="From" showSearch style={ styles.input }>{options}</Select>
          </div>
          <div style={ styles.columnContainer }>
            <Input placeholder="Amount" style={ styles.input }></Input>
          </div>
          <div style={ styles.columnContainer }>
            <Select placeholder="To" showSearch style={ styles.input }>{options}</Select>
          </div>
        </div>
        <div style={ styles.resultContainer }>
          <Space>
            <Title level={1}>500</Title>
            <Title level={3}>EUR</Title>
          </Space>
        </div>
      </div>
    </div>
  );
}