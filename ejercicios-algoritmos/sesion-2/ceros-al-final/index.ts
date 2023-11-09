export default function moverCeros(array: number[]): number[] {
  const arrayCero: number[] = [];
  const arrayNumber: number[] = [];

  array.map((number) => {
    if (number === 0) {
      arrayCero.push(number);
    } else {
      arrayNumber.push(number);
    }
  });

  return [...arrayNumber, ...arrayCero];
}
