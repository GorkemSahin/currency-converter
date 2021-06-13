import styled from '@emotion/styled'
import { Typography } from 'antd'
const { Title } = Typography

export const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
`

export const StatisticTitle = styled(Title)`
  margin-top: 0.5rem !important;
`
