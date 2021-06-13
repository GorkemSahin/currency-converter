import React from 'react'
import { Typography } from 'antd'
import 'antd/dist/antd.css'
import { Statistic } from 'types/types'
const { Title, Text } = Typography

interface Props {
  statistic: Statistic
}

export const StatisticItem = ({ statistic }: Props) => {
  return (
    <div key={statistic.name}>
      <Text>{statistic.name}</Text>
      <Title level={2}>{statistic.value}</Title>
    </div>
  )
}
