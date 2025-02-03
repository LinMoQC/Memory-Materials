import { Form as AntdForm } from 'antd';
import { useDrag } from 'react-dnd';
import { useEffect, useMemo, useRef } from 'react';
import React from 'react';
import { useMaterailDrop } from '../../hooks/useMaterialDrop';
import { FormProps } from './config';
import FormItem from '../FormItem/dev';
import styles from './index.module.scss';

const Form: React.FC<FormProps> = (props) => {
    const { id, name, children, onFinish } = props;

    const [form] = AntdForm.useForm();
    const { canDrop, drop } = useMaterailDrop(['FormItem'], id);

    const divRef = useRef<HTMLDivElement>(null);

    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name,
            dragType: 'move',
            id: id,
        }
    });

    useEffect(() => {
        drop(divRef);
        drag(divRef);
    }, []);

    const formItems = useMemo(() => {
        return React.Children.map(children, (item: any) => {
            return {
                label: item.props?.label,
                name: item.props?.name,
                type: item.props?.type,
                id: item.props?.id,
            }
        });
    }, [children]);

    return (
        <div
            className={`${styles.formContainer} ${canDrop ? styles.canDrop : styles.defaultBorder}`}
            ref={divRef}
            data-component-id={id}
        >
            <div className={styles.header}>
                <span className={styles.headerText}>表单</span>
            </div>
            <div className={styles.formWrapper}>
                <AntdForm labelCol={{ span: 2 }} wrapperCol={{ span: 22 }} form={form} onFinish={(values) => onFinish && onFinish(values)}>
                    {formItems.map((item: any) => {
                        return (
                            <FormItem 
                                label={item.label} 
                                key={item.name}
                                id={item.id}
                                name={item.name} 
                            />
                        );
                    })}
                </AntdForm>
            </div>
        </div>
    );
};

export default Form;
