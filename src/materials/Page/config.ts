import { CommonMaterialProps, MaterialConfig } from "../interface";
import PageProd from "./index";
import PageDev from "./dev";

export interface PageProps extends CommonMaterialProps {
    
}

export const PageConfig: MaterialConfig = {
    name: 'Page',
    defaultProps: {},
    prod: PageProd,
    desc: '页面',
    materialType: 'area',
    dev: PageDev
}