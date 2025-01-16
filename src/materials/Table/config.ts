import { ComponentConfig } from "../interface";
import TableProd from "./index";

export const TableConfig: ComponentConfig = {
    name: 'Table',
    defaultProps: {},
    desc: '表格',
    setter: [
        {
            name: 'url',
            label: 'url',
            type: 'input',
        },
    ],
    prod: TableProd,
    materialType: 'area'
}

