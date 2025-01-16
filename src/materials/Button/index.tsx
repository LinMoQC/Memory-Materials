import { Button as AntdButton } from 'antd';
import { CommonComponentProps } from '../interface';
import React from 'react';

export interface ButtonProps extends CommonComponentProps {

}

const Button = ({ id, type, text, styles,...props }: ButtonProps) => {
    return (
        <AntdButton type={type} style={styles} {...props}>{text}</AntdButton>
    )
}

export default Button;
