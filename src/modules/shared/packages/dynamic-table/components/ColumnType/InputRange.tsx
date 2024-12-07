import { Input as AntdInput } from 'antd';
import { IColumnsInfo } from '../../types';

interface IInputRangeProps {
  expression: IColumnsInfo;
}

const InputRange = ({ expression }: IInputRangeProps) => {
  return (
    <div className='dynamic_table_column_type_input_range'>
      <div>
        <label htmlFor={expression.id + '-1'}>{expression.label}</label>
        <AntdInput id={expression.id + '-1'} placeholder={expression.label} size='large' />
      </div>
      <div>
        <label htmlFor={expression.id + '-2'}>{expression.label}</label>
        <AntdInput id={expression.id + '-2'} placeholder={expression.label} size='large' />
      </div>
    </div>
  );
};

export default InputRange;
