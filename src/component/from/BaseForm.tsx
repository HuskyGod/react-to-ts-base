import React, {useMemo, useCallback} from 'react'
import {Form} from 'antd'
import FormJson from '@/formConfig.json'
import FormComponentFn from './container'

interface Props {
  fromType: string
}

const BaseForm: React.FC<Props> = function ({
  fromType
}) {
  const onChange = useCallback((...rest) => {
    console.log(rest)
  }, [])

  const FormComponent = Form.create({
    onValuesChange: onChange
  })((props) => <FormComponentFn {...props} data={FormJson[fromType]} />)

  return (
    <div>
      <FormComponent />
    </div>
  )
}

export default React.memo(BaseForm)