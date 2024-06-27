import { Select } from 'antd'
import { CaretDownOutlined, CloseCircleOutlined } from '@ant-design/icons'

type AntSelectProps = {
  options: { label: string; value: string }[]
  onChange?: (x: any) => void
  label?: string
  required?: boolean
  placeholder?: string
  mode?: 'multiple' | 'tags' | undefined
  formik?: any
  name: string
  value?: any
}

const AntSelect = ({
  options,
  onChange,
  label,
  required = false,
  placeholder = 'Select',
  mode,
  formik,
  name,
  value,
}: AntSelectProps) => {
  return (
    <div className="select-form">
      <label className="label">
        {label}
        {required && <span className="red-star"> *</span>}
      </label>
      <div className="error-wrapper">
        <Select
          value={value ? value : undefined}
          mode={mode}
          className="ant_select"
          showSearch
          allowClear
          style={{ width: '100%' }}
          placeholder={placeholder}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={options}
          size="large"
          onChange={onChange}
          suffixIcon={<CaretDownOutlined />}
          status={formik?.errors?.[name] && formik?.touched?.[name] ? 'error' : undefined}
          onBlur={formik?.handleBlur}
        />
        {/* {formik?.touched?.[name] && formik?.errors?.[name] ? (
          <p className="error-message">{formik?.errors[name]}</p>
        ) : null} */}
        {formik?.touched?.[name] && formik?.errors?.[name] && (
          <p className="ant-input-error_txt">
            <CloseCircleOutlined />
            {formik.errors?.[name]}
          </p>
        )}
      </div>
    </div>
  )
}

export default AntSelect
