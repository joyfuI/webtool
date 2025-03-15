'use client';
import Input from '@mui/material/Input';
import { useState } from 'react';

import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Sync = ({ command, input, output }: DefaultCommandProps) => {
  const [itsoffset, setItsoffset] = useState<number>();

  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-itsoffset': `${itsoffset || 0} -i "${input}"`,
        '-map': '0:v -map 1:a',
        '': `"${output}"`,
      }}
      label="싱크 조절"
    >
      <Input
        name="second"
        value={
          Number.isNaN(itsoffset) || itsoffset === undefined ? '' : itsoffset
        }
        type="number"
        placeholder="초"
        slotProps={{ input: { inputMode: 'numeric' } }}
        onChange={(e) => setItsoffset(Number.parseFloat(e.target.value))}
        sx={{ width: '70px', mb: 1 }}
      />
    </CommandCopy>
  );
};

export default Sync;
