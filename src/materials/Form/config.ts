import { ComponentConfig } from "../interface";
import FormProd from "./index";

export const FormConfig: ComponentConfig = {
    name: 'Form',
    defaultProps: {},
    desc: '表单',
    setter: [
        {
            name: 'title',
            label: '标题',
            type: 'input',
        },
    ],
    events: [
        {
            name: 'onFinish',
            label: '提交事件',
        }
    ],
    prod: FormProd,
    materialType: 'area'
}