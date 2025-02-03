import React, { useEffect, useMemo, useRef } from "react";
import { useDrag } from "react-dnd";
import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import { FlexContainerProps } from "./config";
import styles from './index.module.scss'; 

const FlexContainer: React.FC<FlexContainerProps> = (props) => {
    const { id, name, children, styles: customStyles } = props;
    const { canDrop, drop } = useMaterailDrop(['FlexItem'], id);
    
    const divRef = useRef<HTMLDivElement>(null);
    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name,
            dragType: 'move',
            id: id,
        }
    });
    
    useEffect(() => {
        drop(divRef);
        drag(divRef);
    }, []);

    const isEmpty = useMemo(() => {
        return Array.isArray(children) && children.length === 0;
    }, [children]);

    return (
        <div
            ref={divRef}
            data-component-id={id}
            style={{ ...customStyles, marginTop: '-1px' }} // 合并自定义样式
            className={`${styles.container} 
                ${isEmpty ? styles.empty : styles.filled} 
                ${canDrop ? styles['can-drop'] : styles['default-border']}`}
        >
            {isEmpty ? Array(3).fill(<ContainerItem />) : children}
        </div>
    );
};

const ContainerItem = () => {
    return (
        <div className={styles.containerItem}>
            <div className={styles.text}>内容区域</div>
        </div>
    );
};

export default FlexContainer;
