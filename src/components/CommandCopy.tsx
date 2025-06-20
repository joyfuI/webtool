import type { ReactNode, Ref } from 'react';
import { useMemo } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

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
      command
        ? `${command}${
            args
              ? ` ${Object.entries(args ?? {})
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
    <Box ref={ref} sx={sx}>
      {label ? (
        <FormLabel component="legend" sx={{ mb: 1 }}>
          {label}
        </FormLabel>
      ) : null}
      {children}
      <OutlinedInput
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => copyText(value)}>
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        }
        fullWidth
        readOnly
        value={value}
      />
    </Box>
  );
};

export default CommandCopy;
