import * as React from 'react';
import { Form, Input, Select, DatePicker, Radio } from 'antd';
import { FormProps } from 'antd/lib/form/Form'

export type ItemProps = {
  labelStyle?: {},
  FormStyle?: {},
  className?: {},
  labelClassName?: string,
  FormCol: number | object
}

export type FormJsonProps =  {
  label?: string,
  defaultValue?: string,
  Icon?: string,
  rules?: Array<object>,
  placeholder?: string,
  type: string
  props?: ItemProps
}

export type Prop = {
  data: Array<{ [key: string]: FormJsonProps }>
}

class FormComponent extends React.Component<Prop & FormProps> {
  public renderChildren (item: FormJsonProps, key: string): React.ReactNode {
    // const { form: {getFieldDecorator} } = this.props
    console.log(key)
    return (
      <Form.Item label={item.label}>
        {/* {getFieldDecorator (key, {}) (
          this.getFormComponent(item.type)
        )} */}
      </Form.Item>
    )
  }
  getFormComponent (type: string) {
    const keyComponent = {
      'input': Input,
      'select': Select,
      'date': DatePicker,
      'radio': Radio
    }
    return keyComponent[type]
  }
  public render() {
    const {data} = this.props
    return (
      <div>
        <Form>
          {
            data.map((item) => {
              return Object.keys(item).map((key) => (
                <div key={key}>
                  {this.renderChildren(item[key], key)}
                </div>
              ))
            })
          }
        </Form>
      </div>
    );
  }
}

export default React.memo(FormComponent)