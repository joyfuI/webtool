import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const Recommended = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-threads': '0',
        '-scodec': 'copy',
        '-vcodec': 'libx264',
        '-preset': 'slow',
        '-tune': 'film',
        '-crf': '23',
        '-sws_flags': 'lanczos',
        '-vf': '"yadif=0:-1, scale=-1:720, setsar=1:1"',
        '-r': '30000/1001',
        '-acodec': 'aac',
        '-ac': '2',
        '-ab': '192k',
        '-strict': 'experimental',
        '': `"${output}"`,
      }}
      label="720p 인코딩"
    />
  );
};

export default Recommended;
