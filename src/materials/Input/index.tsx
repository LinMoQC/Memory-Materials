import React from "react";
import { CommonComponentProps } from "../interface";

export interface InputProps extends CommonComponentProps {
    
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <div>
            Input
        </div>
    );
};

export default Input;
