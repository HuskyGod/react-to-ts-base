import * as React from 'react';
import { Radio } from 'antd';

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
    // <Select ref={ref}>
    //   {(option || []).map((item: any, index: number) => (
    //     <Option key={index} value={item.value}>{item.text}</Option>
    //   ))}
    // </Select>
    <Radio.Group >
      {(option || []).map((item: any, index: number) => (
        <Radio  key={index} value={item.value}>{item.text}</Radio >
      ))}
    </Radio.Group>
  )
}

export default React.forwardRef(SelectComponent)