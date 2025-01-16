import { CSSProperties, PropsWithChildren } from "react";

export interface CommonComponentProps extends PropsWithChildren {
    id: string;
    name: string;
    [key: string]: any;
    styles?: CSSProperties
}

export interface Component {
    id: string;
    name: string;
    props: any;
    children?: Component[];
    setter?: ComponentSetter;
    parentId?: string;
    desc: string;
    styles?: CSSProperties;
}

export type ActionType = GoToLinkConfig | ShowMessageConfig | CustomJSConfig | ComponentMethodConfig

export interface GoToLinkConfig {
    type: 'goToLink',
    url: string
}

export interface ShowMessageConfig{
    type: 'showMessage',
    config: {
        type: 'success' | 'error';
        text: string;
    }
}

export interface CustomJSConfig {
    type: 'customJS',
    code: string
}

export interface ComponentMethodConfig {
    type: 'componentMethod',
    config: {
        componentId: string,
        method: string
    }
}

export interface ComponentConfig {
    name: string;
    defaultProps: Record<string, any>;
    setter?: ComponentSetter[];
    desc: string;
    stylesSetter?: ComponentSetter[];
    prod: any;
    events?: ComponentEvent[];
    methods?: ComponentMethod[];
    materialType: MaterialType;
}

// 组件事件
export interface ComponentEvent {
    name: string;
    label: string
}

export interface ComponentMethod {
    name: string;
    label: string
}

// 物料类型
export type MaterialType = 'unit' | 'area' | 'special'

export interface ComponentSetter {
    name: string;
    label: string;
    type: string;
    [key: string]: any;
}