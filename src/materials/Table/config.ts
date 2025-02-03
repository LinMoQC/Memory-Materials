import { CommonMaterialProps, MaterialConfig } from "../interface";
import TableProd from "./index";
import TableDev from "./dev";

export interface TableProps extends CommonMaterialProps {

}

export const TableConfig: MaterialConfig = {
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
    dev: TableDev,
    prod: TableProd,
    materialType: 'area'
}

