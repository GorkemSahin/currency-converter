import React from 'react'
import { Select, Space, Button, Form, InputNumber } from 'antd'
import { Typography } from 'antd'
import 'antd/dist/antd.css'
import { Conversion, ConversionQuery } from 'types/types'
import { Fieldset, FieldsGrid, ResultContainer } from './ConversionForm.styled'
const { Title } = Typography

interface Props {
  onConvert: (query: ConversionQuery) => void
  isLoading?: boolean
  conversion?: Conversion
  symbols?: string[]
}

export default function Converter({
  onConvert,
  isLoading,
  conversion,
  symbols,
}: Props) {
  const [form] = Form.useForm<ConversionQuery>()

  return (
    <Form form={form} name="conversion-form" onFinish={onConvert}>
      <FieldsGrid>
        <Fieldset>
          <Form.Item name="from" rules={[{ required: true }]}>
            <Select placeholder="From" showSearch>
              <Select.Option value="EUR">EUR</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="amount" rules={[{ required: true }]}>
            <InputNumber
              min={0.001}
              placeholder="Amount"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="to" rules={[{ required: true }]}>
            <Select placeholder="To" showSearch>
              {symbols
                ?.filter((s) => s !== 'EUR')
                .map((s) => (
                  <Select.Option key={s} value={s}>
                    {s}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{ width: '100%' }}
            >
              CONVERT
            </Button>
          </Form.Item>
        </Fieldset>
      </FieldsGrid>

      <ResultContainer>
        {conversion ? (
          <Space>
            <Title level={2}>{conversion.result}</Title>
            <Title level={4}>{conversion.to}</Title>
          </Space>
        ) : (
          <Title level={5}>Please make a conversion.</Title>
        )}
      </ResultContainer>
    </Form>
  )
}
