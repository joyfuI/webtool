import type { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export type KeyboardDoubleArrowIconProps = {
  breakpoint?: Breakpoint;
};

const KeyboardDoubleArrowIcon = ({
  breakpoint = 'sm',
}: KeyboardDoubleArrowIconProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));

  return matches ?
      <KeyboardDoubleArrowRightIcon />
    : <KeyboardDoubleArrowDownIcon />;
};

export default KeyboardDoubleArrowIcon;
