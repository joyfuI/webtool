import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';
import AudioExtraction from './AudioExtraction';

const Audio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="convert">
      <Stack spacing={3}>
        <AudioExtraction command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Audio;
