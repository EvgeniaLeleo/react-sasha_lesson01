import beaver from '../assets/beaver.svg';
import bug from '../assets/bug.svg';
import crab from '../assets/crab.svg';
import ghost from '../assets/ghost.svg';
import kangaroo from '../assets/kangaroo.svg';
import octopus from '../assets/octopus.svg';
import otter from '../assets/otter.svg';
import sauropod from '../assets/sauropod.svg';
import shrimp from '../assets/shrimp.svg';
import sloth from '../assets/sloth.svg';

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
