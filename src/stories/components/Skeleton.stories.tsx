import { ComponentStory } from '@storybook/react'
import Skeleton from '../../components/Skeleton'

export default {
  title: 'Component/Skeleton',
}

export const Box: ComponentStory<typeof Skeleton.Box> = (args) => (
  <Skeleton.Box {...args} />
)
Box.argTypes = {
  width: { defaultValue: 200, control: { type: 'range', min: 50, max: 400 } },
  height: { defaultValue: 100, control: { type: 'range', min: 50, max: 400 } },
}

export const Circle: ComponentStory<typeof Skeleton.Circle> = (args) => (
  <Skeleton.Circle {...args} />
)
Circle.argTypes = {
  size: { defaultValue: 160, control: { type: 'range', min: 100, max: 400 } },
}

export const Paragraph: ComponentStory<typeof Skeleton.Paragraph> = (args) => (
  <Skeleton.Paragraph {...args} />
)
Paragraph.argTypes = {
  line: { defaultValue: 6, control: { type: 'range', min: 1, max: 400 } },
  fontSize: { defaultValue: 16, control: { type: 'range', min: 1, max: 100 } },
  lineHeight: {
    defaultValue: 1.6,
    control: { type: 'range', min: 1, max: 3, step: 0.1 },
  },
  stepPercentage: {
    defaultValue: 10,
    control: { type: 'range', min: 1, max: 100 },
  },
  lineBreak: {
    defaultValue: 4,
    control: { type: 'range', min: 1, max: 100 },
  },
}

export const Sample: ComponentStory<typeof Skeleton.Paragraph> = (args) => (
  <>
    <div
      style={{
        background: 'rgba(255,255,255,0.4)',
        padding: 16,
        display: 'flex',
        width: '80%',
        borderRadius: 12,
        marginBottom: 12,
        boxShadow: '0 16px 32px -16px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ flex: 1 }}>
        <Skeleton.Paragraph {...args} />
      </div>
    </div>
    <div
      style={{
        background: 'rgba(255,255,255,0.4)',
        padding: 16,
        display: 'flex',
        width: '80%',
        borderRadius: 12,
        marginBottom: 12,
        boxShadow: '0 16px 32px -16px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ flex: 1 }}>
        <Skeleton.Paragraph {...args} />
      </div>
    </div>
    <div
      style={{
        background: 'rgba(255,255,255,0.4)',
        padding: 16,
        display: 'flex',
        width: '80%',
        borderRadius: 12,
        marginBottom: 12,
        boxShadow: '0 16px 32px -16px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ flex: 1 }}>
        <Skeleton.Paragraph {...args} />
      </div>
    </div>
  </>
)
Sample.argTypes = {
  line: { defaultValue: 3, control: { type: 'range', min: 1, max: 400 } },
  fontSize: { defaultValue: 16, control: { type: 'range', min: 1, max: 100 } },
  lineHeight: {
    defaultValue: 1.6,
    control: { type: 'range', min: 1, max: 3, step: 0.1 },
  },
  stepPercentage: {
    defaultValue: 10,
    control: { type: 'range', min: 1, max: 100 },
  },
}
