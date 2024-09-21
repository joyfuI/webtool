import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeButton = () => {
  const { mode, setMode } = useColorScheme();

  switch (mode) {
    case 'light':
      return (
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setMode('dark')}
        >
          <LightModeIcon />
        </IconButton>
      );

    case 'dark':
      return (
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setMode('system')}
        >
          <DarkModeIcon />
        </IconButton>
      );

    case 'system':
    default:
      return (
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setMode('light')}
        >
          <ContrastIcon />
        </IconButton>
      );
  }
};

export default DarkModeButton;
