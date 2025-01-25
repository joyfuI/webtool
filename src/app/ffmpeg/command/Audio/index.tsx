import Stack from '@mui/material/Stack';
import TabPanel from '@mui/lab/TabPanel';

import type { DefaultCommandProps } from '../../logic';

import AudioExtraction from './AudioExtraction';
import Sync from './Sync';
import AudioRemove from './AudioRemove';

const Audio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="audio">
      <Stack spacing={3}>
        <AudioExtraction command={command} input={input} output={output} />
        <Sync command={command} input={input} output={output} />
        <AudioRemove command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Audio;
