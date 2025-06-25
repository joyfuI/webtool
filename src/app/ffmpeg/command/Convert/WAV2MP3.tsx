'use client';

import CommandCopy from '@/components/CommandCopy';
import { extensionRegex } from '@/utils/regex';

import type { DefaultCommandProps } from '../../logic';

const WAV2MP3 = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{
        '-i': `"${input.replace(extensionRegex, '.wav')}"`,
        '-write_id3v1': '1',
        '-id3v2_version': '3',
        '-dither_method': 'triangular',
        '-out_sample_rate': '48k',
        '-qscale:a': '1',
        '': `"${output.replace(extensionRegex, '.mp3')}"`,
      }}
      command={command}
      label="wav to mp3"
    />
  );
};

export default WAV2MP3;
