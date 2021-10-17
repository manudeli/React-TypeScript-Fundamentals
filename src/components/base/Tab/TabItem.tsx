import styled from '@emotion/styled'
import Text from '../Text'

interface Props {
  title?: string
  index?: string
  active?: boolean
  [x: string]: any
}

const TabItem = ({ title, index, active = false, ...props }: Props) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <Text strong={active}>{title}</Text>
    </TabItemWrapper>
  )
}

interface TabItemWrapperProps {
  active?: boolean
}

const TabItemWrapper = styled.div<TabItemWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
  cursor: pointer;
`

TabItem.defaultProps = {
  __TYPE: 'Tab.Item',
}

export default TabItem
