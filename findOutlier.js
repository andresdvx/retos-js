function findOutlier(array) {
  let odd = [];
  let pair = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      pair.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  if (pair.length > 1) {
    return odd[0];
  } else {
    return pair[0];
  }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

/*
Se le da una matriz (que tendrá una longitud de al menos 3, pero podría ser muy grande)
que contiene números enteros. La matriz está compuesta en su totalidad por enteros impares
o por enteros pares, excepto por un único entero . Escriba un método que tome la matriz como
argumento y devuelva este "valor atípico" .NN

Ejemplos
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even numeros

*/
