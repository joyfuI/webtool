import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const AudioRemove = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-c:v': 'copy',
        '-an': '',
        '': `"${output}"`,
      }}
      label="오디오 제거"
    />
  );
};

export default AudioRemove;
