import React from 'react'
import { Typography } from 'antd'
import { Statistic } from '../../../../types'
import {
  StatisticItem,
  StatisticsGrid,
  StatisticTitle,
} from './Statistics.styled'
const { Text } = Typography

interface Props {
  statistics?: Statistic[]
}

export default function Statistics({ statistics }: Props) {
  return (
    <StatisticsGrid>
      {statistics?.map((s) => (
        <StatisticItem key={s.name}>
          <Text>{s.name}</Text>
          <StatisticTitle level={2}>{s.value}</StatisticTitle>
        </StatisticItem>
      ))}
    </StatisticsGrid>
  )
}
