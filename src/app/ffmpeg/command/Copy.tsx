import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const Copy = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c': 'copy',
        '': `"${output}"`,
      }}
      label="동영상 복사"
    />
  );
};

export default Copy;
