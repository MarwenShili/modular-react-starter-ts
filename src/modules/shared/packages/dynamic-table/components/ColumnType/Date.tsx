import { DatePicker } from 'antd';
import { IColumnsInfo } from '../../types';

interface IDateProps {
  expression: IColumnsInfo;
}

const Date = ({ expression }: IDateProps) => {
  return (
    <div className='dynamic_table_column_type_date'>
      <label htmlFor={expression.id}>{expression.label}</label>
      <DatePicker id={expression.id} size='large' />
    </div>
  );
};

export default Date;
