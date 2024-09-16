import { useState, useEffect, useId, forwardRef } from 'react';
import type { Ref, ReactNode, Attributes } from 'react';
import type { ChangeEvent } from 'react';
import type { SxProps } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import type { FormGroupProps } from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import type theme from '@/theme';

export type CheckboxProps = {
  label?: ReactNode;
  options: (Omit<FormControlLabelProps & Attributes, 'control'> & {
    value: string;
  })[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string[]) => void;
  sx?: SxProps<typeof theme>;
} & Omit<FormGroupProps, 'defaultValue' | 'onChange'>;

const CheckboxGroup = (
  {
    label,
    options,
    value,
    defaultValue,
    onChange,
    sx,
    ...props
  }: CheckboxProps,
  ref: Ref<HTMLFieldSetElement>,
) => {
  const [checkedList, setCheckedList] = useState<Set<string>>(
    new Set(defaultValue ?? []),
  );

  useEffect(() => {
    if (value) {
      setCheckedList(new Set(value));
    }
  }, [value]);

  const labelId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      checkedList.add(e.target.value);
    } else {
      checkedList.delete(e.target.value);
    }
    setCheckedList(checkedList);
    onChange?.(e, Array.from(checkedList));
  };

  return (
    <FormControl ref={ref} component="fieldset" fullWidth sx={sx}>
      {label ?
        <FormLabel component="legend" id={labelId}>
          {label}
        </FormLabel>
      : null}
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

export default forwardRef(CheckboxGroup);
