import { CommonMaterialProps, MaterialConfig } from '../interface';
import InputProd from './index'
import InputDev from './dev'

export interface InputProps extends CommonMaterialProps {
    
}

export const InputConfig: MaterialConfig = {
    name: "Input",
    defaultProps: {},
    setter: [],
    desc: "输入框",
    stylesSetter: [],
    dev: InputDev,
    prod: InputProd,
    events: [],
    methods: [],
    materialType: 'unit'
};
