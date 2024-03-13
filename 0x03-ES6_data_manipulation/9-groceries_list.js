export default function groceriesList() {
  const myMap = new Map();
  const keyValuePairs = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  keyValuePairs.forEach((pair) => myMap.set(...pair));
  return myMap;
}
