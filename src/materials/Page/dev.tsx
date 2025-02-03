import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import { PageProps } from "./config";
import React from 'react';
import styles from './index.module.scss'; 

const Page: React.FC<PageProps> = ({ id, children, styles: customStyles }: PageProps) => {
    const { canDrop, drop } = useMaterailDrop(['Button', 'Container', 'Modal', 'Table', 'Form', 'FlexContainer'], id);

    return (
        <div
            className={styles.pageContainer}
            data-component-id={id}
            ref={drop}
            style={{
                border: canDrop ? '2px solid blue' : 'none',
                ...customStyles,
            }}
        >
            {children}
        </div>
    );
};

export default Page;
