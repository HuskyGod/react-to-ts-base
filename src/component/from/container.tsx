import * as React from 'react';
import { Form } from 'antd';

export type FormJsonProps =  {
  label?: string,
  defaultValue?: string,
  Icon?: string,
  rules?: Array<object>,
  placeholder?: string,
  type: string
  props?: {
    labelStyle?: {},
    FormStyle?: {},
    className?: {},
    labelClassName?: string,
    FormCol: number | object
  }
}

export type Prop = {
  data: Array<{
    [key: string]: FormJsonProps
  }>
}

class FormComponent extends React.Component<Prop> {
  renderChildren (item: FormJsonProps): React.ReactNode {
    return (
      <Form.Item label={item.label}>

      </Form.Item>
    )
  }
  public render() {
    const {data} = this.props
    return (
      <div>
        <Form>
          {Object.keys(data).map((key) => (
            <div key={key}>
              {this.renderChildren(data[key])}
            </div>
          ))}
        </Form>
      </div>
    );
  }
}

export default React.memo(FormComponent)