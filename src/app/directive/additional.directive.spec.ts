import { AdditionalDirective } from './additional.directive';

describe('AdditionalDirective', () => {
  it('should create an instance', () => {
    const directive = new AdditionalDirective(
      null, null, null, null // dirty fix
    );
    expect(directive).toBeTruthy();
  });
});
