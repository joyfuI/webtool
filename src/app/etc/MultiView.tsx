'use client';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import copyText from '@/utils/copyText';

const streamerList: { nickname: string; id: string }[] = [
  { nickname: '제갈금자', id: 'dlsn9911' },
  { nickname: '모구구', id: '9mogu9' },
  { nickname: '하로하', id: 'haroha' },
  { nickname: '누눙지', id: 'kgoyangyeeee' },
  { nickname: '데네브', id: 'denebeu' },
  { nickname: '대월향', id: 'wjdfogur98' },
  { nickname: '또오냥', id: 'toocat030' },
  { nickname: '예다', id: 'yeda1224' },
  { nickname: '미현영', id: 'nunknown314' },
  { nickname: '에냐', id: 'onyu98' },
];

const Client = () => {
  const [checked, setChecked] = useState(() => streamerList.map(() => false));

  const handleToggle = (index: number) => () => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    const checkedList = streamerList
      .values()
      .filter((_, i) => newChecked[i])
      .map((i) => i.id)
      .toArray();
    const text = `https://mul.live/${checkedList.join('/')}`;
    copyText(text);
  };

  return (
    <Box>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        멀티뷰
      </FormLabel>
      <Paper sx={{ width: 180, height: 230, overflow: 'auto' }}>
        <List component="div" dense role="list">
          {streamerList.map((item, index) => (
            <ListItemButton
              disableGutters
              key={item.id}
              onClick={handleToggle(index)}
              role="listitem"
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked[index] ?? false}
                  disableRipple
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText primary={item.nickname} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Client;
