'use client';
import type { SxProps } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import type { FormGroupProps } from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useId, useState } from 'react';
import type { Attributes, ChangeEvent, ReactNode, Ref } from 'react';

import type theme from '@/theme';

export type CheckboxProps = {
  ref?: Ref<HTMLFieldSetElement>;
  label?: ReactNode;
  options: (Omit<FormControlLabelProps & Attributes, 'control'> & {
    value: string;
  })[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string[]) => void;
  sx?: SxProps<typeof theme>;
} & Omit<FormGroupProps, 'defaultValue' | 'onChange'>;

const CheckboxGroup = ({
  ref,
  label,
  options,
  value,
  defaultValue,
  onChange,
  sx,
  ...props
}: CheckboxProps) => {
  const [checkedList, setCheckedList] = useState(new Set(defaultValue ?? []));
  const labelId = useId();

  useEffect(() => {
    if (value) {
      setCheckedList(new Set(value));
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      checkedList.add(e.target.value);
    } else {
      checkedList.delete(e.target.value);
    }
    setCheckedList(checkedList);
    onChange?.(e, Array.from(checkedList));
  };

  return (
    <FormControl ref={ref} component="fieldset" fullWidth sx={sx}>
      {label ? (
        <FormLabel component="legend" id={labelId}>
          {label}
        </FormLabel>
      ) : null}
      <FormGroup row {...props} aria-labelledby={label ? labelId : undefined}>
        {options.map(({ key, value, ...optionProps }, i) => (
          <FormControlLabel
            key={key ?? value ?? i}
            {...optionProps}
            value={value}
            checked={checkedList.has(value)}
            defaultChecked={defaultValue?.includes(value)}
            control={<Checkbox onChange={handleChange} />}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroup;
