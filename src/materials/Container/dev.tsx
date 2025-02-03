import React, { useEffect, useMemo, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { useMaterailDrop } from '../../hooks/useMaterialDrop';
import { ContainerProps } from './config';
import styles from './index.module.scss';

const Container: React.FC<ContainerProps> = ({ id, name, children, styles:customStyles }: ContainerProps) => {
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container', 'Table', 'Form'], id);

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
  }, [drop, drag]);

  const isEmpty = useMemo(() => {
    return Array.isArray(children) && children.length === 0;
  }, [children]);

  return (
    <div
      ref={divRef}
      data-component-id={id}
      style={{ ...customStyles, marginTop: '-1px' }}  
      className={`${styles.container} 
        ${isEmpty ? styles.empty : styles.filled} 
        ${canDrop ? styles['can-drop'] : styles['default-border']}`}
    >
      {isEmpty ? (
        <div className={`${styles.text}`}>
          内容区域
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Container;
