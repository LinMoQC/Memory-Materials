import { CommonMaterialProps, MaterialConfig } from "../interface";
import FormProd from "./index";
import FormDev from "./dev";

export interface FormProps extends CommonMaterialProps {
    onFinish?: (value: Record<string, any>) => void;
    children: React.ReactElement<FormItemComponentProps>[];
}

export interface FormRef {
    submit: () => void;
}

export interface FormItemComponentProps {
    label: string;
    name: string;
    type: "input" | "date";
    rules?: "required" | null;
}

export const FormConfig: MaterialConfig = {
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
    dev: FormDev,
    prod: FormProd,
    materialType: 'area'
}