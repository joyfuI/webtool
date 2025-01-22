import Stack from '@mui/material/Stack';
import TabPanel from '@mui/lab/TabPanel';

import type { DefaultCommandProps } from '../../logic';

import Trim from './Trim';
import Copy from './Copy';
import Reverse from './Reverse';
import Concat from './Concat';
import Merge from './Merge';

const Videoaudio = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="videoaudio">
      <Stack spacing={3}>
        <Trim command={command} input={input} output={output} />
        <Copy command={command} input={input} output={output} />
        <Reverse command={command} input={input} output={output} />
        <Concat command={command} input={input} output={output} />
        <Merge command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Videoaudio;
