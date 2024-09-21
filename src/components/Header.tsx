'use client';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Link from './Link';
import DarkModeButton from './DarkModeButton';

import { useToggle } from '@/hooks';

const menu = [
  { key: 'card', title: '카드 혜택 계산기', href: '/card' },
  { key: 'pass', title: '지하철 정기권 계산기', href: '/pass' },
];

const responsive = (xs: unknown, md: unknown): object => ({ xs, md });

const Header = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: responsive('flex', 'none'), flexGrow: 1 }}>
              <IconButton size="large" color="inherit" onClick={toggleOpen}>
                <MenuIcon />
              </IconButton>
              <Drawer
                open={open}
                onClose={toggleOpen}
                sx={{
                  display: responsive('block', 'none'),
                }}
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
                      <ListItem key={item.key} disablePadding>
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
              variant="h6"
              href="/"
              noWrap
              sx={{
                display: 'flex',
                mr: 3,
                flexGrow: responsive(1, 0),
                color: 'inherit',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              웹툴
            </Typography>
            <Box sx={{ display: responsive('none', 'flex'), flexGrow: 1 }}>
              {menu.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  href={item.href}
                  onClick={toggleOpen}
                  sx={{ display: 'block', my: 2, color: 'white' }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <DarkModeButton />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
