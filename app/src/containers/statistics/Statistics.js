import 'antd/dist/antd.css';
import { useEffect } from 'react';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatisticsAction } from '../../appState/statistics/actions';
import { statisticsSelector } from '../../appState/statistics/selectors';
import Statistic from './components/Statistic/Statistic';

export default function Statistics ({ refresh, style }) {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchStatisticsAction()), [refresh, dispatch]);

  const statistics = useSelector(statisticsSelector);
  
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={ styles.innerContainer }>
        { statistics.map((s) => <Statistic statistic={ s } />) }
      </div>
    </div>
  );
}