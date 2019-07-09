import { version } from '../../package.json';

let isNode = false;
if (typeof process !== 'undefined' && process.version) {
  isNode = true;
}

export const environment = {
  production: true,
  VERSION: version,
  isNode
};
