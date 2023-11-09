type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const data: Output[] = [];

  for (let key in input.nombres) {
    const output: Output = {
      id: Number(key) + 1,
      nombre: input.nombres[key],
      edad: input.edades[key],
    };

    data.push(output);
  }

  console.log(data);

  return data;
}
