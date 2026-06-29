import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

const DarkModeButton = () => {
  const { mode, setMode } = useColorScheme();

  const handlerClick = (m: 'light' | 'dark' | 'system') => () => {
    setMode(m);
  };

  switch (mode) {
    case 'light':
      return (
        <IconButton color="inherit" onClick={handlerClick('dark')} size="large">
          <LightModeIcon />
        </IconButton>
      );

    case 'dark':
      return (
        <IconButton
          color="inherit"
          onClick={handlerClick('system')}
          size="large"
        >
          <DarkModeIcon />
        </IconButton>
      );

    default:
      return (
        <IconButton
          color="inherit"
          onClick={handlerClick('light')}
          size="large"
        >
          <ContrastIcon />
        </IconButton>
      );
  }
};

export default DarkModeButton;
