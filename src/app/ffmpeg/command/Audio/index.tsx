import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';
import AudioRemove from './AudioRemove';
import Metadata from './Metadata';
import Sync from './Sync';

const Audio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="audio">
      <Stack spacing={3}>
        <Sync command={command} input={input} output={output} />
        <AudioRemove command={command} input={input} output={output} />
        <Metadata command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Audio;
