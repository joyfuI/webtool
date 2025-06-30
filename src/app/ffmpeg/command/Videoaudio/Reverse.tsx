import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Reverse = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-vf': 'reverse',
        '-af': 'areverse',
        '': `"${output}"`,
      }}
      command={command}
      label="역재생"
    />
  );
};

export default Reverse;
