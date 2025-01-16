import { ComponentConfig } from "../interface";
import TableColumnProd from "./index";

export const TableColumnConfig: ComponentConfig = {
    name: 'TableColumn',
    desc: '表格列',
    defaultProps: {
        dataIndex: `col_${new Date().getTime()}`,
        title: '列名'
    },
    setter: [
        {
            name: 'type',
            label: '类型',
            type: 'select',
            options: [
                {
                    label: '文本',
                    value: 'text',
                },
                {
                    label: '日期',
                    value: 'date',
                },
            ],
        },
        {
            name: 'title',
            label: '标题',
            type: 'input',
        },
        {
            name: 'dataIndex',
            label: '字段',
            type: 'input',
        },
    ],
    prod: TableColumnProd,
    materialType: 'unit'
}