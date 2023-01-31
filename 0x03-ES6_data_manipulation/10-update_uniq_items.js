export default function updateUniqueItems(groceriesList) {
  if (groceriesList instanceof Map) {
    return groceriesList.set('Pasta', 100).set('Rice', 100);
  }
  throw TypeError('Cannot process');
}
