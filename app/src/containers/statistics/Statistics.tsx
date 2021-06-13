import React from 'react'
import 'antd/dist/antd.css'
import { Statistic } from 'types/types'
import { StatisticItem } from './components/Statistic/Statistic'

interface Props {
  statistics?: Statistic[]
}

export default function Statistics({ statistics }: Props) {
  return (
    <div>
      <div>
        {statistics?.map((s) => (
          <StatisticItem statistic={s} />
        ))}
      </div>
    </div>
  )
}
