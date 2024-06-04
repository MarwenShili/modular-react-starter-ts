import { Select } from 'antd'

type AntSelectProps = {
  options: { label: string; value: string }[]
  onChange: (x: any) => void
}

const AntSelect = ({ options, onChange }: AntSelectProps) => (
  <Select
    className="ant_select"
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Book"
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
  />
)

export default AntSelect
