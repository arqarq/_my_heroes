import { Marvel } from './marvel';

export const HERO_NOUN: {[key: string]: string} = {
  singular: 'hero',
  plural: 'heroes'
};

export class Hero extends Marvel {
  id: number;
  name: string;
}
