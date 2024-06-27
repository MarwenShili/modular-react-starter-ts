import { DatePicker, Space } from 'antd'

type AntDatePickerProps = {
  onChange?: (date: any, dateString: string) => void
  label?: string
  required?: boolean
  picker?: 'week' | 'month' | 'quarter' | 'year' | undefined
  placeholder?: string
  formik?: any
  size?: 'large' | 'middle' | 'small'
}

const AntDatePicker = ({
  onChange,
  picker,
  size = 'large',
  label,
  required,
}: AntDatePickerProps) => {
  return (
    <div className="select-form">
      <label className="label">
        {label}
        {required && <span className="red-star"> *</span>}
      </label>
      <Space direction="vertical">
        <DatePicker size={size} onChange={onChange} picker={picker} />
      </Space>
    </div>
  )
}

export default AntDatePicker
