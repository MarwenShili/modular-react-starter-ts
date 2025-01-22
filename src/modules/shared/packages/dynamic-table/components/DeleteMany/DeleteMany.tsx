import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Divider, Modal, Space } from 'antd';
const { confirm } = Modal;

const DeleteMany = ({ selectedRows, functions }: any) => {
  const handleDelete = () => {
    functions.deleteMany(selectedRows);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure ?',
      content: "You won't be able to revert this!",
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete();
      },
    });
  };

  return (
    <div className='body_container_delete'>
      <Space>
        <Button type='primary' danger onClick={showDeleteConfirm}>
          Delete
        </Button>
        <Divider type='vertical' />
        <p>{selectedRows?.length} items Selected</p>
      </Space>
    </div>
  );
};

export default DeleteMany;
