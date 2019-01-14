// Internal
import { ADMIN, THREDUP } from '../constants';

describe('constants', () => {
  it('should have ## of routes to test', () => {
    expect(ADMIN.length).toBe(7);
    expect(THREDUP.length).toBe(4);
  });
});
