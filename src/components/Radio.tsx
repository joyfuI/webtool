import { useId, forwardRef } from 'react';
import type { Ref, ReactNode, Attributes } from 'react';
import type { SxProps } from '@mui/material';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import type theme from '@/theme';

export type RadioProps = {
  label?: ReactNode;
  options: Omit<FormControlLabelProps & Attributes, 'control'>[];
  sx?: SxProps<typeof theme>;
} & RadioGroupProps;

const Radio = (
  { label, options, sx, ...props }: RadioProps,
  ref: Ref<HTMLFieldSetElement>,
) => {
  const labelId = useId();

  return (
    <FormControl ref={ref} component="fieldset" fullWidth sx={sx}>
      {label ?
        <FormLabel component="legend" id={labelId}>
          {label}
        </FormLabel>
      : null}
      <RadioGroup row {...props} aria-labelledby={label ? labelId : undefined}>
        {options.map(({ key, value, ...optionProps }, i) => (
          <FormControlLabel
            key={key ?? (value as string) ?? i}
            value={value}
            {...optionProps}
            control={<MuiRadio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default forwardRef(Radio);
