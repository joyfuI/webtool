import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Copy = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{ '-i': `"${input}"`, '-c': 'copy', '': `"${output}"` }}
      command={command}
      label="복사"
    />
  );
};

export default Copy;
