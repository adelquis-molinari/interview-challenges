function quitarAcentos(string: string): string[] {
  const acentos: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };
  return string
    .split("")
    .filter((char) => char !== " ")
    .map((char) => acentos[char] || char);
}

export default function letrasPorNumeros(string: string): string {
  const lowerCase: string[] = quitarAcentos(string.toLowerCase());

  const ditionary: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  };

  const numberArray: number[] = [];

  lowerCase.map((char) => numberArray.push(ditionary[char]));

  return numberArray.filter((char) => char !== undefined).join(" ");
}
