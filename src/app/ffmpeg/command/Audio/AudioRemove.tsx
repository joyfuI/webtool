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
      label="오디오 제거"
    />
  );
};

export default AudioRemove;
