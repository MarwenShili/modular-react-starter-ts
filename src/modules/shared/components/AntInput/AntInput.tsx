import { CloseCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Input } from 'antd'
import { ReactNode, useState } from 'react'
import './AntInput.scss'

interface IAntInputProps {
  formik?: any
  type?: string
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
  onChange?: (e: any) => void
}

const AntInput = ({
  formik,
  type,
  name,
  label,
  placeholder,
  required,
  prefix,
  suffix,
  onChange,
}: IAntInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="ant-input-container">
      <label htmlFor={name} className="ant-input-label">
        {label}
        {required && <span className="ant-input-required">*</span>}
      </label>
      <Input
        size="large"
        id={name}
        name={name}
        type={type !== 'password' ? type : passwordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={formik?.values?.[name]}
        onChange={onChange || formik?.handleChange}
        onBlur={formik?.handleBlur}
        status={formik?.errors?.[name] && formik?.touched?.[name] ? 'error' : undefined}
        prefix={prefix}
        className="ant-input-input"
        suffix={
          suffix
            ? suffix
            : type === 'password' &&
              (passwordVisible ? (
                <EyeTwoTone onClick={() => setPasswordVisible(!passwordVisible)} />
              ) : (
                <EyeInvisibleOutlined onClick={() => setPasswordVisible(!passwordVisible)} />
              ))
        }
      />
      {formik?.touched?.[name] && formik?.errors?.[name] && (
        <p className="ant-input-error_txt">
          <CloseCircleOutlined />
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  )
}

type InputDefaultProps = Pick<IAntInputProps, 'formik' | any>

Input.defaultProps = {
  field: {
    type: 'text',
  },
} as InputDefaultProps

export default AntInput
