import { data } from './data';
import { getEntriesWithSum2020 } from '.';

describe('day1', () => {
  it('should return three numbers', () => {
    const result = getEntriesWithSum2020(data);
    expect(result.length).toBe(3);
  });
  it('should return three numbers with the sum 2020', () => {
    const result = getEntriesWithSum2020(data);
    expect(result[0] + result[1] + result[2]).toBe(2020);
  });
});
