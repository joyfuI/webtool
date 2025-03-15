import MuiLink from '@mui/material/Link';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';

const Link = (props: MuiLinkProps & NextLinkProps) => (
  <MuiLink {...props} component={NextLink} />
);

export default Link;
