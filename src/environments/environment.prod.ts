import { version } from '../../package.json';
import { angularCompilerOptions } from '../../tsconfig.app.json';

let isNode = false;
if (typeof process !== 'undefined' && process.version) {
  isNode = true;
}

export const environment = {
  production: true,
  VERSION: version,
  IVY_ON: angularCompilerOptions.enableIvy,
  isNode
};
