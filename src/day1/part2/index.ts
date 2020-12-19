import { data } from './data';

export function answer(): number {
  const numbers = getEntriesWithSum2020(data);
  return numbers[0] * numbers[1] * numbers[2];
}

export function getEntriesWithSum2020(data: number[]): number[] {
  for (let indexA = 0; indexA < data.length; indexA++) {
    const a = data[indexA];
    for (let indexB = 0; indexB < data.length; indexB++) {
      const b = data[indexB];
      for (let indexC = 0; indexC < data.length; indexC++) {
        const c = data[indexC];
        if (sumIs2020(a, b, c)) {
          return [a, b, c];
        }
      }
    }
  }
  throw new Error('not found');
}

function sumIs2020(a: number, b: number, c: number): boolean {
  return a + b + c === 2020;
}
