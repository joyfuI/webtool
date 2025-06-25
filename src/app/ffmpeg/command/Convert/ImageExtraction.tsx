'use client';

import CommandCopy from '@/components/CommandCopy';
import { extensionRegex } from '@/utils/regex';

import type { DefaultCommandProps } from '../../logic';

const ImageExtraction = ({ command, input, output }: DefaultCommandProps) => {
  return (
    <CommandCopy
      args={{
        '-i': `"${input}"`,
        '': `"${output.replace(extensionRegex, '%03d.jpg')}"`,
      }}
      command={command}
      label="이미지 추출"
    />
  );
};

export default ImageExtraction;
