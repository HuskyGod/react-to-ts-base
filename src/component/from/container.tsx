import * as React from 'react';
import { Form, Input, Col, Row, DatePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form'

import Select from './Select'
import Radio from './Radio'

const initProps = {
  "labelCol": {
    "xs": { "span": 24 },
    "sm": { "span": 24 },
    "md": { "span": 8 },
    "lg": { "span": 4 },
    "xl": { "span": 4},
  },
  "wrapperCol": {
    "xs": { "span": 24 },
    "sm": { "span": 24 },
    "md": { "span": 16 },
    "lg": { "span": 20 },
    "xl": { "span": 20 }
  }
}

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
  props?: ItemProps,
  option: Array<any>
}

export type Prop = {
  data: {
    form: Array<{ [key: string]: FormJsonProps }>,
    props ?: any
  }
}

class FormComponent extends React.Component<Prop & FormComponentProps> {
  public renderChildren (item: FormJsonProps, key: string): React.ReactNode {
    const { form: {getFieldDecorator} } = this.props
    return (
      <Form.Item label={item.label}>
        {getFieldDecorator (key, {
          rules: item.rules || []
        }) (
          this.getFormComponent(item)
        )}
      </Form.Item>
    )
  }
  getFormComponent (item: FormJsonProps) {
    const KeyComponent = {
      'input': Input,
      'select': React.forwardRef((props, ref) => <Select ref={ref} {...props} option={item.option}  />),
      'date': DatePicker,
      'radio': React.forwardRef((props, ref) => <Radio ref={ref} {...props} option={item.option}  />)
    }[item.type]
    return <KeyComponent placeholder={item.placeholder} style={{width: '100%'}} />
  }
  public render() {
    const {data} = this.props
    const defaultProps = Object.assign({}, initProps, data.props)
    return (
      <div>
        <Form {...defaultProps}>
          {
            data.form.map((item, index) => (
              <Row gutter={16} key={index}>
                {
                  Object.keys(item).map((key) => (
                    <Col span={24 / Object.keys(item).length} key={key}>
                      {this.renderChildren(item[key], key)}
                    </Col>
                  ))
                }
              </Row>
            ))
          }
        </Form>
      </div>
    );
  }
}

export default React.memo(FormComponent)