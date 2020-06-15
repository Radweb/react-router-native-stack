import { FADE_VERTICAL } from './animationTypes';

export default function getTiming(animationType, transitionType) {
  switch (animationType) {
    case FADE_VERTICAL:
      if (transitionType === 'PUSH') {
        return 250;
      }
      return 250;
    default:
      return 250;
  }
}
