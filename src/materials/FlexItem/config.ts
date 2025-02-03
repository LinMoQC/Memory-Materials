import { CommonMaterialProps, MaterialConfig } from '../interface';
import FlexItemProd from './index'
import FlexItemDev from './dev'

export interface FlexItemProps extends CommonMaterialProps {
    flexRatio: number
}

export const FlexItemConfig: MaterialConfig = {
    name: "FlexItem",
    defaultProps: {
        flexRatio: 1
    },
    setter: [
        {
            name: 'flexRatio',
            label: "弹性比例",
            type: 'slider'
        }
    ],
    desc: "弹性容器项",
    stylesSetter: [],
    dev: FlexItemDev,
    prod: FlexItemProd,
    events: [],
    methods: [],
    materialType: 'area'
};
