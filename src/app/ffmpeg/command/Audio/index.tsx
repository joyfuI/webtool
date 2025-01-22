import Stack from '@mui/material/Stack';
import TabPanel from '@mui/lab/TabPanel';

import type { DefaultCommandProps } from '../../logic';

import AudioExtraction from './AudioExtraction';
import AudioRemove from './AudioRemove';

const Audio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="audio">
      <Stack spacing={3}>
        <AudioExtraction command={command} input={input} output={output} />
        <AudioRemove command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Audio;
