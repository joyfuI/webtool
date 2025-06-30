import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../../logic';

const AudioRemove = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c:v': 'copy',
        '-an': '',
        '': `"${output}"`,
      }}
      command={command}
      label="소리 제거"
    />
  );
};

export default AudioRemove;
