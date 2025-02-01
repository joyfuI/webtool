import type { Breakpoint } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export type KeyboardDoubleArrowIconProps = {
  breakpoint?: Breakpoint;
};

const KeyboardDoubleArrowIcon = ({
  breakpoint = 'sm',
}: KeyboardDoubleArrowIconProps) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down(breakpoint));

  return matches ?
      <KeyboardDoubleArrowDownIcon />
    : <KeyboardDoubleArrowRightIcon />;
};

export default KeyboardDoubleArrowIcon;
