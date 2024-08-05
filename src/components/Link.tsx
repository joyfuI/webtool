import { forwardRef } from 'react';
import type { Ref } from 'react';
import NextLink from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';
import MuiLink from '@mui/material/Link';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';

const Link = (
  props: MuiLinkProps & NextLinkProps,
  ref: Ref<HTMLAnchorElement>,
) => <MuiLink {...props} ref={ref} component={NextLink} />;

export default forwardRef(Link);
