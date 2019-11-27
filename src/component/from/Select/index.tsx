import * as React from 'react';
import { Select } from 'antd';

const { Option } = Select

type OptionJson = {
  text: string,
  value: any
}

type Props = {
  option ?: Array<OptionJson | undefined>
}

const SelectComponent: React.FC<Props> = function ({
  option
}, ref) {
  return (
    <Select ref={ref}>
      {(option || []).map((item: any, index: number) => (
        <Option key={index} value={item.value}>{item.text}</Option>
      ))}
    </Select>
  )
}

export default React.forwardRef(SelectComponent)