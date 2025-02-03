import React from "react";
import { FlexItemProps } from "./config";
import styles from './index.module.scss';

const FlexItem: React.FC<FlexItemProps> = (props) => {
    const { children, styles: customStyles,flexRatio } = props
    return (
        <div
            style={{ ...customStyles,flex: `${flexRatio}`}}
            className={styles.flexItemProd}
        >
            {children}
        </div>
    );
};

export default FlexItem;
