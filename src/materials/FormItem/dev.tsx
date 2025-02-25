import React from "react";
import { Form as AntdForm, Input } from 'antd';
import { FormItemProps } from "./config";

const FormItem: React.FC<FormItemProps> = (props) => {
    const {name,id,label='test'} = props
    return (
        <AntdForm.Item key={name} data-component-id={id} name={name} label={label} >
            <Input style={{ pointerEvents: 'none' }} />
        </AntdForm.Item>
    )
}

export default FormItem