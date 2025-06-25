import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const Recommended = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '-c:v': 'libx265',
        '-preset': 'slow',
        '-crf': '23',
        '-vf': '"scale=-1:1080, yadif=0:-1, setsar=1:1"',
        '-c:a': 'aac',
        '-b:a': '128k',
        '-c:s': 'copy',
        '': `"${output}"`,
      }}
      command={command}
      label="1080p 인코딩"
    />
  );
};

export default Recommended;
