import { data } from './data';
import { getEntriesWithSum2020 } from '.';

describe('day1', () => {
  it('should return two numbers', () => {
    const result = getEntriesWithSum2020(data);
    expect(result.length).toBe(2);
  });
  it('should return two numbers with the sum 2020', () => {
    const result = getEntriesWithSum2020(data);
    expect(result[0] + result[1]).toBe(2020);
  });
});
