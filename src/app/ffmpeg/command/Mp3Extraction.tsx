import CommandCopy from '@/components/CommandCopy';

import type { DefaultCommandProps } from '../logic';

const Mp3Extraction = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      command={command}
      args={{
        '-i': `"${input}"`,
        '-vn': '',
        '-acodec': 'libmp3lame',
        '-ar': '44.1k',
        '-ac': '2',
        '-ab': '192k',
        '': `"${output.replace(/\.\w+$/, '.mp3')}"`,
      }}
      label="오디오 추출"
    />
  );
};

export default Mp3Extraction;
