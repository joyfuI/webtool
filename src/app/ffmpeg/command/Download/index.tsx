import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';

import M3u8Download from './M3u8Download';

const Download = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="download">
      <Stack spacing={3}>
        <M3u8Download command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Download;
