'use client';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';

import useInterval from '@/hooks/useInterval';
import copyText from '@/utils/copyText';

import { type GetHomeBroadResponse, getHomeBroad } from './logic';

const streamerList: { nickname: string; id: string }[] = [
  { nickname: '제갈금자', id: 'dlsn9911' },
  { nickname: '모구구', id: '9mogu9' },
  { nickname: '하로하', id: 'haroha' },
  { nickname: '누눙지', id: 'kgoyangyeeee' },
  { nickname: '데네브', id: 'denebeu' },
  { nickname: '대월향', id: 'wjdfogur98' },
  { nickname: '또오냥', id: 'toocat030' },
  { nickname: '요나카', id: 'yonakayo05' },
  { nickname: '예다', id: 'yeda1224' },
  { nickname: '미현영', id: 'nunknown314' },
  { nickname: '에냐', id: 'onyu98' },
  { nickname: '지한이또', id: 'jihan110' },
  { nickname: '캬루', id: 'kyaru96' },
];

export type LiveListItemProps = {
  userId: string;
  nickname: string;
  checked: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const LiveListItem = ({
  userId,
  nickname,
  checked,
  onClick,
}: LiveListItemProps) => {
  const [data, setData] = useState<GetHomeBroadResponse | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  useInterval(async () => {
    setData(await getHomeBroad(userId));
  }, 60000);

  useEffect(() => {
    if (data?.broadNo) {
      setImageSrc(`https://liveimg.sooplive.co.kr/h/${data.broadNo}.webp`);
    }
  }, [data?.broadNo]);

  useInterval(() => {
    if (data?.broadNo) {
      setImageSrc(
        `https://liveimg.sooplive.co.kr/h/${data.broadNo}.webp?t=${Date.now()}`,
      );
    }
  }, 10000);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        data && imageSrc ? (
          <Tooltip
            followCursor
            title={
              <>
                <Image
                  alt={data.broadTitle}
                  draggable={false}
                  height={180}
                  loading="lazy"
                  src={imageSrc}
                  style={{ width: '100%', height: 'auto' }}
                  unoptimized
                  width={320}
                />
                <Typography variant="body2">{data.broadTitle}</Typography>
              </>
            }
          >
            <LiveTvIcon />
          </Tooltip>
        ) : null
      }
      sx={{ '& .MuiListItemSecondaryAction-root': { display: 'flex' } }}
    >
      <ListItemButton disableGutters onClick={onClick}>
        <ListItemIcon>
          <Checkbox checked={checked ?? false} disableRipple tabIndex={-1} />
        </ListItemIcon>
        <ListItemText primary={nickname} />
      </ListItemButton>
    </ListItem>
  );
};

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
      <Paper sx={{ width: 180, height: 240, overflow: 'auto' }}>
        <List component="div" dense role="list">
          {streamerList.map((item, index) => (
            <LiveListItem
              checked={checked[index]}
              key={item.id}
              nickname={item.nickname}
              onClick={handleToggle(index)}
              userId={item.id}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Client;
