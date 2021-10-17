import { ComponentStory } from '@storybook/react'
import { Flux } from '../../components'
const { Row, Col } = Flux

export default {
  title: 'Component/Flux',
  argTypes: {},
}

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: '#44b',
        width: '100%',
        color: 'white',
        textAlign: 'center',
        borderRadius: 16,
      }}
    >
      Box
    </div>
  )
}

export const Default: ComponentStory<typeof Row> = (args) => {
  return (
    <Row {...args} gutter={[8, 8]}>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col offset={0} span={4}>
        <Box />
      </Col>
      <Col offset={4} span={8}>
        <Box />
      </Col>
      <Col span={12}>
        <Box />
      </Col>
      <Col span={1}>
        <Box />
      </Col>
      <Col span={3}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
    </Row>
  )
}
