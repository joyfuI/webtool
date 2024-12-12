import { useMemo } from 'react';
import type { Ref, ReactNode } from 'react';
import type { SxProps } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Div from './Div';

import type theme from '@/theme';
import copyText from '@/utils/copyText';

export type CommandCopyProps = {
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
  command?: string;
  args?: Record<string, string>;
  label?: ReactNode;
  sx?: SxProps<typeof theme>;
};

const CommandCopy = ({
  ref,
  children,
  command,
  args,
  label,
  sx,
}: CommandCopyProps) => {
  const value = useMemo(
    () =>
      command ?
        `${command}${
          args ?
            ` ${Object.entries(args ?? {})
              .map(([key, value]) =>
                key && value ? `${key} ${value}` : `${key}${value}`,
              )
              .join(' ')}`
          : ''
        }`
      : '',
    [command, args],
  );

  return (
    <Div ref={ref} sx={sx}>
      {label ?
        <FormLabel component="legend" sx={{ mb: 1 }}>
          {label}
        </FormLabel>
      : null}
      {children}
      <OutlinedInput
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => copyText(value)}>
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        }
        readOnly
        fullWidth
      />
    </Div>
  );
};

export default CommandCopy;
