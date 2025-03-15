'use client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import type { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useId, useRef } from 'react';
import type { FormEvent, ReactNode, Ref } from 'react';

export type ModalProps = {
  ref?: Ref<HTMLDivElement>;
  title?: ReactNode;
  onClose?: () => void;
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    data: {
      [k: string]: FormDataEntryValue;
    },
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
      scroll="paper"
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
      {...props}
      ref={ref}
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      aria-describedby={contentTextId}
    >
      {title ? <DialogTitle id={titleId}>{title}</DialogTitle> : null}
      <DialogContent id={contentTextId} dividers>
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
          <Button ref={buttonRef} onClick={onClose}>
            확인
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
