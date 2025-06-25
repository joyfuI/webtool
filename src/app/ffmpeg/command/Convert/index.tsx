import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';
import AudioExtraction from './AudioExtraction';
import ImageExtraction from './ImageExtraction';
import WAV2MP3 from './WAV2MP3';

const Audio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="convert">
      <Stack spacing={3}>
        <AudioExtraction command={command} input={input} output={output} />
        <ImageExtraction command={command} input={input} output={output} />
        <WAV2MP3 command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Audio;
