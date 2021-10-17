import { ComponentMeta, ComponentStory } from '@storybook/react'
import Upload from '../../components/Upload'

export default {
  title: 'Component/Upload',
  component: Upload,
  argsTypes: {},
} as ComponentMeta<typeof Upload>

export const Default: ComponentStory<typeof Upload> = () => {
  return (
    <Upload>
      <button>Click me</button>
    </Upload>
  )
}

export const AccessFile: ComponentStory<typeof Upload> = () => {
  return (
    <Upload>
      {(file: File) => <button>{file ? file.name : 'Click me'}</button>}
    </Upload>
  )
}

export const Droppable: ComponentStory<typeof Upload> = () => {
  return (
    <Upload droppable>
      {(file: File, dragging: boolean) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? 'black' : '#aaa',
          }}
        >
          {file ? file.name : 'Click or drag file to this area to upload.'}
        </div>
      )}
    </Upload>
  )
}
