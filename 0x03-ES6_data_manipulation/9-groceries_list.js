export default function groceriesList() {
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const newArray = Object.entries(obj);

  return new Map(newArray);
}