import { Select, Input, Space } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSymbolsAction } from '../../appState/symbols/actions';
import { symbolsAsOptionsSelector } from '../../appState/symbols/selectors';
const { Title } = Typography;

export default function Converter ({ style }) {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchSymbolsAction())
  }, []);
  const symbols = useSelector(symbolsAsOptionsSelector);

  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        <div style={ styles.currenciesContainer }>
          <div style={ styles.columnContainer }>
            <Select placeholder="From" showSearch style={ styles.input }>{symbols}</Select>
          </div>
          <div style={ styles.columnContainer }>
            <Input placeholder="Amount" style={ styles.input }></Input>
          </div>
          <div style={ styles.columnContainer }>
            <Select placeholder="To" showSearch style={ styles.input }>{symbols}</Select>
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