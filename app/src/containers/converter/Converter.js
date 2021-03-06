import { Select, Input, Space, Button } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { useState, useCallback } from 'react';
import styles from './styles';
import { useSelector } from 'react-redux';
import { symbolsAsOptionsSelector } from '../../appState/symbols/selectors';
import api from '../../api'
const { Title } = Typography;

export default function Converter ({ setRefresh, onFail, style }) {

  const symbols = useSelector(symbolsAsOptionsSelector);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [toOnDisplay, setToOnDisplay] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const getResult = useCallback(async () => {
    if (from && to && amount > 0){
      setLoading(true);
      try {
        const { data: { result } } = await api.fetchConversion({ from, to, amount })
        setResult(result);
        setToOnDisplay(to);
        if (setRefresh) setRefresh({ }) // Passing a new object to trigger the useEffect in the statistics container
      } catch (error) {
        setToOnDisplay(null);
        setResult(null);
        if (onFail) onFail(error);
      } finally {
        setLoading(false);
      }
    }
  }, [from, to, amount, setRefresh, onFail]);

  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        <div style={ styles.currenciesContainer }>
          <div style={ styles.columnContainer }>
            <Select placeholder="From" onSelect={ setFrom } showSearch style={ styles.input }>
              {symbols}
            </Select>
          </div>
          <div style={ styles.columnContainer }>
            <Input type="number" placeholder="Amount"
              onChange={ e => setAmount(parseFloat(e.target.value)) }
              style={ styles.input } onPressEnter={ getResult }/>
          </div>
          <div style={ styles.columnContainer }>
            <Select placeholder="To" onSelect={ setTo } showSearch style={ styles.input }>
              {symbols}
            </Select>
          </div>
          <div style={ styles.columnContainer }>
            <Button loading={loading} onClick={ getResult } style={{ width: "100%"}}>
              CONVERT
            </Button>
          </div>
        </div>
        <div style={ styles.resultContainer }>
          {
            result ? <div>
              <Space>
                <Title level={1}>{ result }</Title>
                <Title level={3}>{ toOnDisplay }</Title>            
              </Space>
            </div>
            : <div>
              <Title level={5}>Please make a conversion.</Title>
            </div>
          }
        </div>
      </div>
    </div>
  );
}