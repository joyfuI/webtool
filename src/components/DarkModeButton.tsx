import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

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
