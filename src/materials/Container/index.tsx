import React from "react";
import { ContainerProps } from "./config";
import styles from './index.module.scss';

const Container: React.FC<ContainerProps> = ({ children, styles: customStyles }: ContainerProps) => {
    return (
        <div
            style={{ ...customStyles }}
            className={styles.container}
        >{children}</div>
    )
}

export default Container;
