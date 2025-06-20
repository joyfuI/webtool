'use client';
import type { FormEvent, ReactNode, Ref } from 'react';
import { useEffect, useId, useRef } from 'react';
import Button from '@mui/material/Button';
import type { DialogProps } from '@mui/material/Dialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export type ModalProps = {
  ref?: Ref<HTMLDivElement>;
  title?: ReactNode;
  onClose?: () => void;
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    data: { [k: string]: FormDataEntryValue },
  ) => void;
} & DialogProps;

const Modal = ({
  ref,
  children,
  open,
  title,
  onClose,
  onSubmit,
  ...props
}: ModalProps) => {
  const titleId = useId();
  const contentTextId = useId();

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [open]);

  return (
    <Dialog
      PaperProps={{
        component: 'form',
        onSubmit: (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          onSubmit?.(e, formJson);
          onClose?.();
        },
      }}
      scroll="paper"
      {...props}
      aria-describedby={contentTextId}
      aria-labelledby={titleId}
      onClose={onClose}
      open={open}
      ref={ref}
    >
      {title ? <DialogTitle id={titleId}>{title}</DialogTitle> : null}
      <DialogContent dividers id={contentTextId}>
        {children}
      </DialogContent>
      <DialogActions>
        {onSubmit ? (
          <>
            <Button onClick={onClose}>취소</Button>
            <Button ref={buttonRef} type="submit">
              확인
            </Button>
          </>
        ) : (
          <Button onClick={onClose} ref={buttonRef}>
            확인
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
