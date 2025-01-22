import Stack from '@mui/material/Stack';
import TabPanel from '@mui/lab/TabPanel';

import type { DefaultCommandProps } from '../../logic';

import Aspect from './Aspect';
import Transpose from './Transpose';

const Video = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="video">
      <Stack spacing={3}>
        <Aspect command={command} input={input} output={output} />
        <Transpose command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Video;
