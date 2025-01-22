import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const Reverse = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-vf': 'reverse',
        '-af': 'areverse',
        '': `"${output}"`,
      }}
      label="동영상 역재생"
    />
  );
};

export default Reverse;
