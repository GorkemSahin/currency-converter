import React from 'react'
import { Select, Input, Space, Button, Form } from 'antd'
import { Typography } from 'antd'
import 'antd/dist/antd.css'
import styles from './styles'
import { Conversion, ConversionQuery } from 'types/types'
const { Title } = Typography

interface Props {
  onConvert: (query: ConversionQuery) => void
  isLoading?: boolean
  result?: Conversion
  symbols?: string[]
}

export default function Converter({
  onConvert,
  isLoading,
  result,
  symbols,
}: Props) {
  const [form] = Form.useForm<ConversionQuery>()

  return (
    <div>
      <Form
        form={form}
        name="conversion-form"
        onFinish={onConvert}
      >
        <div >
          <Form.Item
            name="from"
            rules={[{ required: true }]}
          >
            <Select placeholder="From" showSearch style={styles.input}>
              {symbols}
            </Select>
          </Form.Item>
          <Form.Item
            name="amount"
            rules={[{ required: true }]}
          >
            <Input type="number" placeholder="Amount" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="to"
            rules={[{ required: true }]}
          >
            <Select placeholder="To" showSearch style={styles.input}>
              {symbols}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button loading={isLoading} style={{ width: '100%' }}>
              CONVERT
            </Button>
          </Form.Item>
        </div>
        <div style={styles.resultContainer}>
          {result ? (
            <div>
              <Space>
                <Title level={1}>{result.amount}</Title>
                <Title level={3}>{result.to}</Title>
              </Space>
            </div>
          ) : (
            <div>
              <Title level={5}>Please make a conversion.</Title>
            </div>
          )}
        </div>
      </Form>
    </div>
  )
}
