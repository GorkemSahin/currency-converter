import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useMemo } from 'react';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatisticsAction } from '../../appState/statistics/actions';
import { statisticsSelector } from '../../appState/statistics/selectors';
const { Title, Text } = Typography;

export default function Converter ({ refresh, style }) {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchStatisticsAction()), [refresh, dispatch]);

  const statistics = useSelector(statisticsSelector);

  const statisticComponents = useMemo(
    () => statistics.map((s) => (
        <div key={ s.statistic } style={ styles.statisticContainer }>
          <Text>{ s.statistic }</Text>
          <Title level={2}>{ s.value }</Title>
        </div>
    )),
    [statistics]
  );
  
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        { statisticComponents }
      </div>
    </div>
  );
}