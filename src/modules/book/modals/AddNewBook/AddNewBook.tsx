import React from 'react'
import { Modal } from 'antd'
import { useTranslation } from 'react-i18next'
import Input from '@src/modules/shared/components/Input/Input'
import Button from '@src/modules/shared/components/Button/Button'

import { useFormik } from 'formik'
import * as Yup from 'yup'

type ModalExampleProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any
}

const initialValues = {
  title_ar: '',
  title_en: '',
  active: true,
  publication_date: '2023-12-16',
}

const AddNewBook: React.FC<ModalExampleProps> = ({ id, open, handleClose }) => {
  const { t } = useTranslation('book')

  const handleCancel = () => {
    handleClose(id)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      title_ar: Yup.string().required('title is required'),
      title_en: Yup.string().required('title is required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <>
      <Modal title={t('add-new-book')} open={open} onCancel={handleCancel} footer={null}>
        <form action="" onSubmit={formik.handleSubmit} className="form-book">
          <Input
            name="title_ar"
            formik={formik}
            variant="secondary"
            placeholder="Enter the Arabic title"
            label="Arabic Title"
            required={true}
          />

          <Input
            name="title_en"
            formik={formik}
            variant="secondary"
            placeholder="Enter the English title"
            label="English Title"
            type="text"
            required={true}
          />

          <Button label={'Add Book'} type={'submit'} />
        </form>
      </Modal>
    </>
  )
}

export default AddNewBook
