import { Select, Input, Space, Button } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState, useCallback } from 'react';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSymbolsAction } from '../../appState/symbols/actions';
import { symbolsAsOptionsSelector } from '../../appState/symbols/selectors';
import api from '../../api'
import truncater from '../../utils/decimalTruncater';
const { Title } = Typography;

export default function Converter ({ style }) {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchSymbolsAction())
  }, []);
  const symbols = useSelector(symbolsAsOptionsSelector);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const getResult = useCallback(() => {
    if (from && to && amount){
      setLoading(true);
      api.fetchConversion({ from, to, amount }).then(resp => {
        setResult(truncater(resp.data.result, 3))
        setLoading(false)
      });
    }
  }, [from, to, amount]);

  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        <div style={ styles.currenciesContainer }>
          <div style={ styles.columnContainer }>
            <Select placeholder="From" onSelect={ setFrom } showSearch style={ styles.input }>{symbols}</Select>
          </div>
          <div style={ styles.columnContainer }>
            <Input type="number" placeholder="Amount" onChange={ e => setAmount(parseFloat(e.target.value)) } style={ styles.input }></Input>
          </div>
          <div style={ styles.columnContainer }>
            <Select placeholder="To" onSelect={ setTo } showSearch style={ styles.input }>{symbols}</Select>
          </div>
          <div style={ styles.columnContainer }>
          <Button loading={loading} onClick={ getResult }>CONVERT</Button>
          </div>
        </div>
        <div style={ styles.resultContainer }>
          { result ? <div>
            <Space>
              <Title level={1}>{ result }</Title>
              <Title level={3}>{ to }</Title>            
            </Space>
          </div>
          :
          <div>
            <Title level={5}>Please make a conversion.</Title>
          </div> }
        </div>
      </div>
    </div>
  );
}