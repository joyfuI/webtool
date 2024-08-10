import { useId, forwardRef } from 'react';
import type { Ref, Attributes } from 'react';
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
  options: Omit<FormControlLabelProps & Attributes, 'control'>[];
  sx?: SxProps<typeof theme>;
} & RadioGroupProps;

const Radio = (
  { options, sx, ...props }: RadioProps,
  ref: Ref<HTMLDivElement>,
) => {
  const labelId = useId();

  return (
    <FormControl ref={ref} fullWidth sx={sx}>
      <FormLabel id={labelId}>업종</FormLabel>
      <RadioGroup row {...props} aria-labelledby={labelId}>
        {options.map(({ key, value, ...props }, i) => (
          <FormControlLabel
            key={key ?? (value as string) ?? i}
            {...props}
            value={value}
            control={<MuiRadio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default forwardRef(Radio);
