import Button from "./Button";
import Container from "./Container";
import FlexContainer from "./FlexContainer";
import Form from "./Form";
import FormItem from "./FormItem";
import FlexItem from "./FlexItem";
import Input from "./Input";
import Modal from "./Modal";
import Page from "./Page";
import Table from "./Table";
import TableColumn from "./TableColumn";

// 物料导出
export {
    Button,
    Container,
    FlexContainer,
    Form,
    FormItem,
    FlexItem,
    Input,
    Modal,
    Page,
    Table,
    TableColumn
}

export type { ButtonProps } from './Button'
export type { ContainerProps } from './Container'
export type { FlexContainerProps } from './FlexContainer'
export type { FlexItemProps } from './FlexItem'
export type { ModalRef as ModalProps } from './Modal'
export type { FormRef as FormProps } from './Form'
export type { TableProps } from './Table'
export type { TableColumnProps } from './TableColumn'

// 物料配置文件导出
import { ButtonConfig } from "./Button/config";
import { ContainerConfig } from "./Container/config";
import { FlexContainerConfig } from "./FlexContainer/config";
import { FlexItemConfig } from "./FlexItem/config";
import { FormConfig } from "./Form/config";
import { FormItemConfig } from "./FormItem/config";
import { InputConfig } from "./Input/config";
import { ModalConfig } from "./Modal/config";
import { PageConfig } from "./Page/config";
import { TableConfig } from "./Table/config";
import { TableColumnConfig } from "./TableColumn/config";
import { ComponentConfig } from "./interface";

export const MaterialConfigs: Record<string, ComponentConfig> = {
    Container: ContainerConfig,
    Button: ButtonConfig,
    Page: PageConfig,
    Modal: ModalConfig,
    Table: TableConfig,
    TableColumn: TableColumnConfig,
    Form: FormConfig,
    FormItem: FormItemConfig,
    FlexContainer: FlexContainerConfig,
    FlexItem: FlexItemConfig,
    Input: InputConfig
} as const;

// 渲染
import { renderComponents } from "./render";
export { renderComponents }