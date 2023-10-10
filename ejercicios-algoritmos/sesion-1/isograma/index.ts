function quitarAcento(string: string) {
  const acentos: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ü: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    Ü: "U",
  };
  return string
    .split("")
    .map((char) => acentos[char] || char)
    .join("");
}

export default function esIsograma(string: string): boolean {
  const lowerCase = quitarAcento(string.toLowerCase());
  let compared: boolean = true;
  let charCompared: string[] = [];
  const c = lowerCase.split("").map((char) => {
    if (charCompared.includes(char)) return (compared = false);
    charCompared.push(char);
  });
  return compared;
}
