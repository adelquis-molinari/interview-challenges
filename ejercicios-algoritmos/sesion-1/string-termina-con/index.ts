export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  return string.slice(-final.length) === final;
}
