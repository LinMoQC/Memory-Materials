import { Button as AntdButton } from "antd";
import { useDrag } from "react-dnd";
import { ButtonProps } from "./config";

const Button:React.FC<ButtonProps> = ({ id,type, text,styles,danger,size }: ButtonProps) => {
    const [_, drag] = useDrag({
        type: 'Button',
        item: {
            type: 'button',
            dragType: 'move', 
            id: id
        },
    });
    
    return (
        <AntdButton ref={drag} data-component-id={id} type={type} style={styles} danger={danger} size={size}>{text}</AntdButton>
    )
}

export default Button