import { Marvel } from './marvel';

export const CRISIS_NOUN = {
  singular: 'crisis',
  plural: 'crises'
};

export class Crisis extends Marvel {
  id: number;
  name: string;
}
