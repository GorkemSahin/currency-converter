import 'antd/dist/antd.css'
import { useEffect } from 'react'
import styles from './styles'
import Statistic from './components/Statistic/Statistic'

export default function Statistics({ refresh, style }) {
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.innerContainer}>
        {statistics.map((s) => (
          <Statistic statistic={s} />
        ))}
      </div>
    </div>
  )
}
