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

import ButtonDev from "./Button/dev";
import ContainerDev from "./Container/dev";
import FlexContainerDev from "./FlexContainer/dev";
import FormDev from "./Form/dev";
import FormItemDev from "./FormItem/dev";
import FlexItemDev from "./FlexItem/dev";
import InputDev from "./Input/dev";
import ModalDev from "./Modal/dev";
import PageDev from "./Page/dev";
import TableDev from "./Table/dev";
import TableColumnDev from "./TableColumn/dev";


// C端物料导出
export const MaterialsProd = {
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

// B端物料导出
export const MaterialsDev = {
    ButtonDev,
    ContainerDev,
    FlexContainerDev,
    FormDev,
    FormItemDev,
    FlexItemDev,
    InputDev,
    ModalDev,
    PageDev,
    TableDev,
    TableColumnDev
}

export type { ButtonProps } from './Button/config'
export type { ContainerProps } from './Container/config'
export type { FlexContainerProps } from './FlexContainer/config'
export type { FlexItemProps } from './FlexItem/config'
export type { ModalProps } from './Modal/config'
export type { FormProps, FormRef } from './Form/config'
export type { FormItemProps, FormItemRef } from './FormItem/config'
export type { TableProps } from './Table/config'
export type { TableColumnProps } from './TableColumn/config'

// 渲染
import { renderComponents } from "./render";
// 物料配置文件
import { MaterialConfigs } from "./interface";
export { MaterialConfigs, renderComponents }

// B端物料全局store提供
import { MaterialDropProvider } from "../context/MaterialDropContext";
export { MaterialDropProvider }