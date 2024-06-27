import Title from 'antd/es/typography/Title'
import InfiniteScroller from './components/InfiniteScroll/InfiniteScroll'
import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import Flow from './components/Flow/Flow'

const { Panel } = Collapse

const Trying = () => {
  return (
    <div className="trying-page">
      <Title level={3}>Trying page</Title>
      <div className="trying-items">
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

        <Collapse
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: '#fff' }}
        >
          <Panel header={'Flow'} key="1">
            <Flow />
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Trying
