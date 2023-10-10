export default function filtrarPares(array: number[]): number[] {
  const numerosPares: number[] = [];
  let acc: number;
  array.map((curr) => {
    if (curr === acc) numerosPares.push(curr);
    return (acc = curr);
  });
  return numerosPares;
}
