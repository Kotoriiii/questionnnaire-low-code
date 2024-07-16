/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { QuestionInputPropsType } from './interface'

const PropsComponent: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { title, placeholder, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  const handleValuesChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ title, placeholder }}
      form={form}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropsComponent
