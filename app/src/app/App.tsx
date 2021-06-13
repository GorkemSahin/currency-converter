import React, { useState, useEffect, useCallback } from 'react'
import 'antd/dist/antd.css'
import { Button, Divider, Space } from 'antd'
import Converter from '../containers/conversionForm/ConversionForm'
import Statistics from '../containers/statistics/Statistics'
import Title from 'antd/lib/typography/Title'
import { Conversion, ConversionQuery, Statistic } from '../../../types'
import { postConversion, fetchStatistics, fetchSymbols } from 'api'
import {
  ContentContainer,
  ErrorContainer,
  Footer,
  Header,
  Layout,
} from './App.styled'

export default function App() {
  const [conversion, setConversion] = useState<Conversion>()
  const [statistics, setStatistics] = useState<Statistic[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [symbols, setSymbols] = useState<string[]>()

  useEffect(() => {
    const getSymbolsAndStats = async () => {
      try {
        const { data: symbolsData } = await fetchSymbols()
        const { data: statsData } = await fetchStatistics()
        setSymbols(symbolsData)
        setStatistics(statsData)
      } catch (error) {
        setErrorMessage(error.message || 'Could not fetch currencies.')
      }
    }
    getSymbolsAndStats()
  }, [errorMessage])

  const onConvert = useCallback(async (query: ConversionQuery) => {
    if (query.from && query.to && query.amount) {
      setIsLoading(true)
      try {
        const { data } = await postConversion(query)
        setConversion(data)
        const { data: sData } = await fetchStatistics()
        setStatistics(sData)
      } catch (error) {
        setErrorMessage(error.message || 'Something went wrong.')
      } finally {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <Layout>
      <Header>CURRENCY CONVERTER</Header>
      {errorMessage ? (
        <ErrorContainer>
          <Space direction="vertical" align="center">
            <Title level={3}>{`Error: ${errorMessage}`}</Title>
            <Button onClick={() => setErrorMessage(null)}>RETRY</Button>
          </Space>
        </ErrorContainer>
      ) : (
        <ContentContainer>
          <Converter
            onConvert={onConvert}
            conversion={conversion}
            symbols={symbols}
            isLoading={isLoading}
          />
          <Divider />
          <Statistics statistics={statistics} />
        </ContentContainer>
      )}
      <Footer>
        A simple currency converter app developed by Görkem Şahin.
      </Footer>
    </Layout>
  )
}
