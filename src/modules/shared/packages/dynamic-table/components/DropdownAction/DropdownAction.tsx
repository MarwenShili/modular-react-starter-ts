import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Modal } from 'antd';
import type { MenuProps } from 'antd';
import { useAppSelector } from '../../store';
const { confirm } = Modal;

const DropdownAction = ({ item, functions }: any) => {
  const navigate = useNavigate();
  const { routes } = useAppSelector((state) => state.data);

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

  const handlePreview = () => {
    navigate(`${routes?.preview?.replace(':id', item.id)}`);
  };

  const handleEdit = () => {
    navigate(`${routes?.edit?.replace(':id', item.id)}`);
  };

  const handleDelete = () => {
    functions.delete(item.id);
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: 'Preview',
      icon: <EyeOutlined />,
      disabled: routes?.preview ? false : true,
      onClick: handlePreview,
    },
    {
      key: '1',
      label: 'Edit',
      icon: <EditOutlined />,
      disabled: routes?.edit ? false : true,
      onClick: handleEdit,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: 'Delete',
      icon: <DeleteOutlined />,
      disabled: 'delete' in functions ? false : true,
      onClick: showDeleteConfirm,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement={'bottomRight'}>
      <a onClick={(e) => e.preventDefault()} className='generic_table_dropdown_btn'>
        <MoreOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownAction;
