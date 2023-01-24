export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  if (expansion1989 === undefined) {
    expansion1989 = 89; // eslint-disable-line no-param-reassign
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19; // eslint-disable-line no-param-reassign
  }
  return initialNumber + expansion1989 + expansion2019;
}
