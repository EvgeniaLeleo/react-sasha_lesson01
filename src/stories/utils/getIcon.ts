import beaver from '../IconAssets/beaver.svg';
import bug from '../IconAssets/bug.svg';
import crab from '../IconAssets/crab.svg';
import ghost from '../IconAssets/ghost.svg';
import kangaroo from '../IconAssets/kangaroo.svg';
import octopus from '../IconAssets/octopus.svg';
import otter from '../IconAssets/otter.svg';
import sauropod from '../IconAssets/sauropod.svg';
import shrimp from '../IconAssets/shrimp.svg';
import sloth from '../IconAssets/sloth.svg';

export const getIcon = (icon: string | undefined): string | undefined => {
  switch (icon) {
    case 'beaver':
      return beaver;
    case 'bug':
      return bug;
    case 'crab':
      return crab;
    case 'ghost':
      return ghost;
    case 'kangaroo':
      return kangaroo;
    case 'octopus':
      return octopus;
    case 'otter':
      return otter;
    case 'sauropod':
      return sauropod;
    case 'shrimp':
      return shrimp;
    case 'sloth':
      return sloth;
    default:
      break;
  }
};
