import { CommonMaterialProps, MaterialConfig } from '../interface';
import FlexContainerProd from './index'
import FlexContainerDev from './dev'

export interface FlexContainerProps extends CommonMaterialProps {
    
}

export const FlexContainerConfig: MaterialConfig = {
    name: "FlexContainer",
    defaultProps: {},
    setter: [],
    desc: "弹性容器",
    stylesSetter: [],
    dev: FlexContainerDev,
    prod: FlexContainerProd,
    events: [],
    methods: [],
    materialType: 'special'
};
