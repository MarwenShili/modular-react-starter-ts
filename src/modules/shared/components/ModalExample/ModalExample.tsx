import React from 'react'
import { Modal } from 'antd'

type ModalExampleProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any // Adjust the type as per your requirement
}

const ModalExample: React.FC<ModalExampleProps> = ({ id, open, handleClose }) => {
  const handleOk = () => {
    handleClose(id)
  }

  const handleCancel = () => {
    handleClose(id)
  }

  return (
    <>
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ModalExample
