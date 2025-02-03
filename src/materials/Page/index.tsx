import React from "react";
import { PageProps } from "./config";
import styles from './index.module.scss'; 

const Page: React.FC<PageProps> = ({ id, name, children, styles: customStyles }: PageProps) => {

    return (
        <div
            className={styles.pageContainerProd}
            style={{ ...customStyles }}
        >
            {children}
        </div>
    )
}

export default Page;
