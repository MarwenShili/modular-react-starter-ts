import AntInput from '@src/modules/shared/components/AntInput/AntInput'
import AntSelect from '@src/modules/shared/components/AntSelect/AntSelect'
import Button from '@src/modules/shared/components/Button/Button'
import AntDatePicker from '@src/modules/shared/components/DatePicker/DatePicker'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getChangedValues } from '@src/modules/shared/utils/getChangedValuesFormik'

const initialValues = {
  name: '',
  select: '',
  autoComplete: '',
}
function Form() {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Username is required'),
      select: Yup.string().required('Select is required'),
      autoComplete: Yup.string().required('AutoComplete is required'),
    }),
    onSubmit: (values) => {
      const changedValues = getChangedValues(values, initialValues)
      console.log(changedValues)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <AntInput name="name" label="Name" type="text" formik={formik} />
      <br />
      <AntSelect
        formik={formik}
        label="select"
        name="select"
        options={[
          { label: 'op1', value: '1' },
          { label: 'op2', value: '2' },
          { label: 'op3', value: '3' },
        ]}
        onChange={(e) => formik.setFieldValue('select', e)}
      />
      <br />
      <AntSelect
        formik={formik}
        label="AutoComplete"
        mode="tags"
        name="autoComplete"
        options={[
          { label: 'op1', value: 'op1' },
          { label: 'op2', value: 'op2' },
          { label: 'op3', value: 'op3' },
        ]}
        onChange={(e) => formik.setFieldValue('autoComplete', e)}
      />
      <br />

      <div style={{ display: 'flex', gap: '20px' }}>
        <AntDatePicker
          onChange={(date, dateString) => {
            console.log(dateString, date)
          }}
          label="Date"
        />
        <br />
        <AntDatePicker
          onChange={(date, dateString) => {
            console.log(dateString, date)
          }}
          label="Month"
          picker="month"
        />
        <br />

        <AntDatePicker
          onChange={(date, dateString) => {
            console.log(dateString, date)
          }}
          label="Week"
          picker="week"
        />
        <br />
        <AntDatePicker
          onChange={(date, dateString) => {
            console.log(dateString, date)
          }}
          label="Year"
          picker="year"
        />
      </div>

      <br />
      <Button type="submit" variant="primary" onClick={() => console.log('clicked')}>
        Submit
      </Button>
    </form>
  )
}

export default Form
