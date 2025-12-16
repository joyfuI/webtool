import type { SxProps } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MuiRadio from '@mui/material/Radio';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import RadioGroup from '@mui/material/RadioGroup';
import type { Attributes, ReactNode, Ref } from 'react';
import { useId } from 'react';

import type theme from '@/theme';

export type RadioProps = {
  ref?: Ref<HTMLFieldSetElement>;
  label?: ReactNode;
  options: Omit<FormControlLabelProps & Attributes, 'control'>[];
  sx?: SxProps<typeof theme>;
} & RadioGroupProps;

const Radio = ({ ref, label, options, sx, ...props }: RadioProps) => {
  const labelId = useId();

  return (
    <FormControl component="fieldset" fullWidth ref={ref} sx={sx}>
      {label ? (
        <FormLabel component="legend" id={labelId}>
          {label}
        </FormLabel>
      ) : null}
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

export default Radio;
