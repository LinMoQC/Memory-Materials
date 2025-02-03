import React, { useEffect, useMemo, useRef } from "react";
import { Table as AntdTable } from 'antd';
import { useDrag } from "react-dnd";
import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import { TableProps } from "./config";
import styles from './index.module.scss'; // 引入模块化样式

const Table: React.FC<TableProps> = (props) => {
    const { id, name, children, styles: customStyles } = props;

    const { canDrop, drop } = useMaterailDrop(['TableColumn'], id);

    const divRef = useRef<HTMLDivElement>(null);

    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name,
            dragType: 'move',
            id: id
        }
    });

    useEffect(() => {
        drop(divRef);
        drag(divRef);
    }, []);

    const columns = useMemo(() => {
        return React.Children.map(children, (item: any) => {
            return {
                title: <div className={styles.columnTitle} data-component-id={item.props?.id}>{item.props?.title}</div>,
                dataIndex: item.props?.dataIndex,
                key: item
            }
        })
    }, [children]);

    return (
        <div
            className={`${styles.tableContainer} ${canDrop ? styles.canDrop : styles.defaultBorder}`}
            ref={divRef}
            data-component-id={id}
            style={customStyles}
        >
            <div className={styles.tableHeader}>
                <span className="font-light text-sm">表格</span>
            </div>
            <AntdTable
                columns={columns}
                dataSource={[]}
                pagination={false}
            />
        </div>
    );
};

export default Table;
