import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';

import type { DefaultCommandProps } from '../../logic';

import Color from './Color';

const Generate = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <TabPanel value="generate">
      <Stack spacing={3}>
        <Color command={command} input={input} output={output} />
      </Stack>
    </TabPanel>
  );
};

export default Generate;
