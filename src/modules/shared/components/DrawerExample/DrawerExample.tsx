import React from 'react'
import { Drawer } from 'antd'

type DrawerExampleProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any // Adjust the type as per your requirement
}

const DrawerExample: React.FC<DrawerExampleProps> = ({ id, open, handleClose }) => {
  const handleCancel = () => {
    handleClose(id)
  }

  return (
    <>
      <Drawer title="Basic Drawer" open={open} onClose={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default DrawerExample
