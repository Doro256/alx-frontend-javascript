export default function cleanSet(set, startString) {
  let result = '';
  if (startString && typeof startString === 'string') {
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        result += `${element.substring(startString.length)}-`;
      }
    });
    return result.slice(0, -1);
  }
  return result;
}
