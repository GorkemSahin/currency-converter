import React, { useState, useEffect, useCallback } from 'react'
import 'antd/dist/antd.css'
import { Layout, Divider, PageHeader, Button, Space } from 'antd'
import Converter from '../containers/converter/Converter'
import Statistics from '../containers/statistics/Statistics'
import Title from 'antd/lib/typography/Title'
import { Conversion, ConversionQuery, Statistic } from 'types/types'
import { fetchConversion, fetchStatistics, fetchSymbols } from 'api'
const { Content, Footer } = Layout

export default function App() {
  const [result, setResult] = useState<Conversion>()
  const [statistics, setStatistics] = useState<Statistic[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [symbols, setSymbols] = useState<string[]>()

  useEffect(() => {
    const getSymbols = async () => {
      try {
        const symbolsData = await fetchSymbols()
        setSymbols(symbolsData.data)
      } catch (error) {
        setErrorMessage(error || 'Could not fetch currencies.')
      }
    }
    getSymbols()
  }, [])

  const onConvert = useCallback(async (query: ConversionQuery) => {
    if (query.from && query.to && query.amount) {
      setIsLoading(true)
      try {
        const { data } = await fetchConversion(query)
        setResult(data)
        const { data: sData } = await fetchStatistics()
        setStatistics(sData)
      } catch (error) {
        setErrorMessage(error || 'Something went wrong.')
      } finally {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <Layout >
      <PageHeader title="CURRENCY CONVERTER" />
      {errorMessage ? (
        <div>
          <Space direction="vertical" align="center">
            <Title level={3}>
              {errorMessage || 'Please check your internet connection.'}
            </Title>
            <Button onClick={() => setErrorMessage(null)}>RETRY</Button>
          </Space>
        </div>
      ) : (
        <Content>
          <Converter onConvert={onConvert} result={result} symbols={symbols} isLoading={isLoading} />
          <Divider></Divider>
          <Statistics statistics={statistics} />
        </Content>
      )}
      <Footer>
        A simple currency converter app developed by Görkem Şahin.
      </Footer>
    </Layout>
  )
}
