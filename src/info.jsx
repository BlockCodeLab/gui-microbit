import { addLocalesMessages, Text } from '@blockcode/core';
import { version } from '../package.json';
import featureImage from './feature.png';

addLocalesMessages({
  en: {
    'microbit.name': 'micro:bit',
    'microbit.description': 'Begin your micro:bit journey.',
    'microbit.collaborator': 'micro:bit',
  },
  'zh-Hans': {
    'microbit.name': 'micro:bit',
    'microbit.description': '开始你的 micro:bit 探索之旅。',
    'microbit.collaborator': 'micro:bit',
  },
  'zh-Hant': {
    'microbit.name': 'micro:bit',
    'microbit.description': '開始您的 micro:bit 旅程。',
    'microbit.collaborator': 'micro:bit',
  },
});

export default {
  version,
  beta: true,
  sortIndex: 102,
  image: featureImage,
  name: (
    <Text
      id="microbit.name"
      defaultMessage="micro:bit"
    />
  ),
  description: (
    <Text
      id="microbit.description"
      defaultMessage="Electronic world via building blocks."
    />
  ),
  collaborator: (
    <Text
      id="microbit.collaborator"
      defaultMessage="micro:bit"
    />
  ),
  blocksRequired: true,
};
