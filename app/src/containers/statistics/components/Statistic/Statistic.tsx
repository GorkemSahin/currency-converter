import { Typography } from 'antd'
import 'antd/dist/antd.css'
import styles from './styles'
const { Title, Text } = Typography

export default function Statistic({ statistic }) {
  return (
    <div key={statistic.statistic} style={styles.statisticContainer}>
      <Text>{statistic.statistic}</Text>
      <Title level={2}>{statistic.value}</Title>
    </div>
  )
}
