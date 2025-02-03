import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import { ModalProps } from "./config";
import React from 'react';
import styles from './index.module.scss'; // 引入模块化的样式

const Modal: React.FC<ModalProps> = ({ id, children, title, styles: customStyles }: ModalProps) => {
    const { canDrop, drop } = useMaterailDrop(['Button', 'Container', 'Table', 'Form'], id);

    return (
        <div
            ref={drop}
            style={customStyles}
            data-component-id={id}
            className={`${styles.modalContainer} 
                        ${canDrop ? styles.canDrop : styles.defaultBorder}`}
        >
            <h4 className={styles.modalTitle}>{title}</h4>
            <div>{children}</div>
        </div>
    );
};

export default Modal;
