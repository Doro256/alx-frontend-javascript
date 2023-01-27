export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    /* eslint no-param-reassign: "error" */
    array[array.indexOf(val)] = appendString + val;
  }
  return array;
}
