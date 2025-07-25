'use client';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import useToggle from '@/hooks/useToggle';

import DarkModeButton from './DarkModeButton';
import Link from './Link';

const menu = [
  { title: '카드 혜택 계산기', href: '/card' },
  { title: '지하철 정기권 계산기', href: '/pass' },
  { title: '나이 계산기', href: '/age' },
  { title: '글자 수 세기', href: '/count' },
  { title: 'JSON 포매터', href: '/json' },
  { title: 'Base64', href: '/base64' },
  { title: '피보나치킨', href: '/fibonachicken' },
  { title: 'FFmpeg', href: '/ffmpeg' },
  { title: 'etc.', href: '/etc' },
];

const responsive = (xs: unknown, md: unknown): object => ({ xs, md });

const Header = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ gap: 3, justifyContent: 'space-between' }}
        >
          <Box sx={{ display: responsive('flex', 'none') }}>
            <IconButton color="inherit" onClick={toggleOpen} size="large">
              <MenuIcon />
            </IconButton>
            <Drawer
              onClose={toggleOpen}
              open={open}
              sx={{ display: responsive('block', 'none') }}
            >
              <Box role="presentation" sx={{ width: 250 }}>
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleOpen}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Toolbar>
                <Divider />
                <List>
                  {menu.map((item) => (
                    <ListItem disablePadding key={item.href}>
                      <ListItemButton
                        component={Link}
                        href={item.href}
                        onClick={toggleOpen}
                      >
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography
            component={Link}
            href="/"
            noWrap
            sx={{
              display: 'flex',
              color: 'inherit',
              fontWeight: 700,
              textDecoration: 'none',
            }}
            variant="h6"
          >
            웹툴
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: responsive('none', 'flex'),
              flexGrow: 1,
              overflowX: 'auto',
            }}
          >
            {menu.map((item) => (
              <Button
                component={Link}
                href={item.href}
                key={item.href}
                sx={{ color: 'white' }}
              >
                {item.title}
              </Button>
            ))}
          </Stack>

          <DarkModeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
