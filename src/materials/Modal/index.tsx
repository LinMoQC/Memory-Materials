import { useImperativeHandle, useState } from "react";
import { Modal as AntdModal } from 'antd';
import React from "react";
import { ModalProps } from "./config";

export interface ModalRef {
    open: () => void;
    close: () => void;
}

const Modal = React.forwardRef<ModalRef, ModalProps>(({ children, title, onOk, onCancel, styles }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true);
        },
        close: () => {
            setOpen(false);
        }
    }), []);

    return (
        <AntdModal
            title={title}
            style={styles}
            open={open}
            onCancel={() => {
                onCancel && onCancel();
                setOpen(false);
            }}
            onOk={() => {
                onOk && onOk();
            }}
            destroyOnClose
        >
            {children}
        </AntdModal>
    );
});

export default Modal;
