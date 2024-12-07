import Title from 'antd/es/typography/Title'
import InfiniteScroller from './components/InfiniteScroll/InfiniteScroll'
import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

import Form from './components/Form/Form'
import Table from './components/Table/Table'

const { Panel } = Collapse

const Trying = () => {
  return (
    <div className="trying-page">
      <Title level={3}>
        This module is for testing components. If you are working on the production project, please
        hide or remove it.
      </Title>
      <div className="trying-items">
        <Collapse
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: '#fff' }}
        >
          <Panel header={'Inputs'} key="1">
            <Form />
          </Panel>
        </Collapse>
        <Collapse
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: '#fff' }}
        >
          <Panel header={'Load scrolling'} key="1">
            <InfiniteScroller />
          </Panel>
        </Collapse>
        <Collapse
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: '#fff' }}
        >
          <Panel header={'Drag & Drop'} key="1"></Panel>
        </Collapse>
        <Table />
      </div>
    </div>
  )
}

export default Trying
