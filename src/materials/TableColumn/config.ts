import { CommonMaterialProps, MaterialConfig } from "../interface";
import TableColumnProd from "./index";
import * as TableColumnDev from './dev'

export interface TableColumnProps extends CommonMaterialProps {

}

export const TableColumnConfig: MaterialConfig = {
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
    dev: TableColumnDev,
    prod: TableColumnProd,
    materialType: 'unit'
}