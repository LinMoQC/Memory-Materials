import React from "react";
import { FlexContainerProps } from "./config";
import styles from './index.module.scss'; 

const FlexContainer: React.FC<FlexContainerProps> = (props) => {
    const {styles: customStyles,children} = props
    return (
        <div
            style={{ ...customStyles}}
            className={styles.container}
        >
            {children}
        </div>
    );
};

export default FlexContainer;
