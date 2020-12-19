import { data } from './data';

export function answer(): number {
  const numbers = getEntriesWithSum2020(data);
  return numbers[0] * numbers[1];
}

export function getEntriesWithSum2020(data: number[]): number[] {
  for (let indexA = 0; indexA < data.length; indexA++) {
    const a = data[indexA];
    for (let indexB = 0; indexB < data.length; indexB++) {
      const b = data[indexB];
      if (sumIs2020(a, b)) {
        return [a, b];
      }
    }
  }
  throw new Error('not found');
}

function sumIs2020(a: number, b: number): boolean {
  return a + b === 2020;
}
