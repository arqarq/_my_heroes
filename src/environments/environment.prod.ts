import { version } from '../../package.json';
import { IVY_ON } from '../locale/LIDs';

let isNode = false;
if (typeof process !== 'undefined' && process.version) {
  isNode = true;
}

export const environment = {
  production: true,
  VERSION: version,
  IVY_ON,
  isNode
};
