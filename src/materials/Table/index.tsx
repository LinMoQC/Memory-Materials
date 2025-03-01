import React, { useMemo } from "react";
import { Table as AntdTable } from 'antd';
import { TableProps } from "./config";
import styles from './index.module.scss';

const Table: React.FC<TableProps> = (props) => {
    const {
        id,
        name,
        children,
        styles: customStyles
    } = props;

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
            className={styles.tableContainer}
            data-component-id={id}
            style={customStyles}
        >
            <div className={styles.tableHeader}>
                <span className={styles.headerText}>表格</span>
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
