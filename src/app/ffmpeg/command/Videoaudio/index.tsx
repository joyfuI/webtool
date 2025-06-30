import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';
import Concat from './Concat';
import Copy from './Copy';
import Merge from './Merge';
import Reverse from './Reverse';
import Timestretch from './Timestretch';
import Trim from './Trim';

const Videoaudio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="videoaudio">
      <Stack spacing={3}>
        <Trim command={command} input={input} output={output} />
        <Reverse command={command} input={input} output={output} />
        <Timestretch command={command} input={input} output={output} />
        <Copy command={command} input={input} output={output} />
        <Concat command={command} input={input} output={output} />
        <Merge command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Videoaudio;
