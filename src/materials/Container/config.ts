import { CommonMaterialProps, MaterialConfig } from "../interface";
import ContainerProd from "./index";
import ContainerDev from "./dev";

export interface ContainerProps extends CommonMaterialProps {

}

export const ContainerConfig: MaterialConfig = {
    name: 'Container',
    defaultProps: {},
    dev: ContainerDev,
    prod: ContainerProd,
    desc: '容器',
    materialType: 'area',
}