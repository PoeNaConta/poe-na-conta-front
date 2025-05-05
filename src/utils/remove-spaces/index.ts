export default function removeSpaces(str: string) {
  return str.trim().replace(/  +/g, ' ');
}
