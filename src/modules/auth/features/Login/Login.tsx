import Button from '@src/modules/shared/components/Button/Button'
import { useAppDispatch } from '@src/modules/shared/store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { login } from '../../data/authThunk'
import Input from '@src/modules/shared/components/Input/Input'
import { getChangedValues } from '@src/modules/shared/utils/getChangedValuesFormik'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/paths'
import NavPage from '../../components/NavPage/NavPage'

const initialValues = {
  username: 'admin',
  password: 'admin12345',
}

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required').min(6, 'Password is too short!'),
    }),
    onSubmit: (values) => {
      setSubmitting(true)
      const changedValues = getChangedValues(values, initialValues)
      //navigate to /dashboard if user validate the form
      navigate('/dashboard')
      dispatch(login(changedValues))
        .unwrap()
        .then(() => {
          console.log('success')
        })
        .catch((err) => {
          console.log(err)
          // message.error(err?.message || 'something-went-wrong')
        })
        .finally(() => {
          setSubmitting(false)
        })
    },
  })

  return (
    <div className="login-module">
      <NavPage />
      <div className="form-container">
        <form className="login-card-container" onSubmit={formik.handleSubmit}>
          <h1 className="title">Sign in</h1>
          <Input
            name="username"
            formik={formik}
            variant="secondary"
            placeholder="Enter your username"
            label="Username"
            required={true}
          />

          <Input
            name="password"
            formik={formik}
            variant="secondary"
            placeholder="Enter your password"
            label="Password"
            type="password"
            required={true}
          />

          <Button style={{ width: '100%' }} label="Login" type="submit" loading={submitting} />

          <Link to={PATH.REGISTER} className="link">
            Create Account?
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
