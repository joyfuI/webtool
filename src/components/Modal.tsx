import { useRef, useEffect, useId, forwardRef } from 'react';
import type { Ref, ReactNode, FormEvent } from 'react';
import Dialog from '@mui/material/Dialog';
import type { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export type ModalProps = {
  title?: ReactNode;
  onClose?: () => void;
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    data: {
      [k: string]: FormDataEntryValue;
    },
  ) => void;
} & DialogProps;

const Modal = (
  { children, open, title, onClose, onSubmit, ...props }: ModalProps,
  ref: Ref<HTMLDivElement>,
) => {
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
      {title ?
        <DialogTitle id={titleId}>{title}</DialogTitle>
      : null}
      <DialogContent dividers>
        <DialogContentText id={contentTextId}>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {onSubmit ?
          <>
            <Button onClick={onClose}>취소</Button>
            <Button ref={buttonRef} type="submit">
              확인
            </Button>
          </>
        : <Button ref={buttonRef} onClick={onClose}>
            확인
          </Button>
        }
      </DialogActions>
    </Dialog>
  );
};

export default forwardRef(Modal);
