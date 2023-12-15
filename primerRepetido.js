/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene
un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes,
algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido,
donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido,
debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
*/
function findFirstRepeated(gifts) {
  const firstRepeated = gifts.reduce((newObject, current) => {
    if (!newObject.hasOwnProperty(current)) {
      newObject[current] = 1;
      return newObject;
    }
    if (newObject.hasOwnProperty(current)) {
      newObject[current]++;
      return current;
    }
  }, {});
  if (Number.isInteger(firstRepeated)) {
    return firstRepeated;
  }
  return -1;
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));
