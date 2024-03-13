export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((val) => val && val.startsWith(startString))
    .map((val) => val.replace(startString, ''))
    .join('-');
}
