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

// 渲染
import { renderComponents } from "./render";
// 物料配置文件
import { MaterialConfigs } from "./interface";
export { MaterialConfigs, renderComponents }