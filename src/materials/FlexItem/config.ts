import { ComponentConfig } from '../interface';
import FlexItemProd from './index'

export const FlexItemConfig: ComponentConfig = {
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
    prod: FlexItemProd,
    events: [],
    methods: [],
    materialType: 'area'
};
