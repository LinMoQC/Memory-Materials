import { Button as AntdButton } from 'antd';
import React from 'react';
import { ButtonProps } from './config';

const Button:React.FC<ButtonProps>= ({ id, type, text, styles,...props }: ButtonProps) => {
    return (
        <AntdButton type={type} style={styles} {...props}>{text}</AntdButton>
    )
}

export default Button;
