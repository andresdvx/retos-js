function createPhoneNumber(numbers) {
  let indicativo = "(".concat(numbers[0], numbers[1], numbers[2], ") ");
  let resto = "";
  for (let i = 3; i < numbers.length; i++) {
    if (i == 6) {
      resto = resto.concat("-", numbers[i]);
      continue;
    }
    if (i > 6) {
      resto = resto.concat(numbers[i]);
      continue;
    }
    resto = resto.concat(numbers[i]);
  }
  const number = indicativo + resto;
  return number;
}
console.log(createPhoneNumber([2, 3, 1, 6, 5, 8, 0, 4, 3, 2]));
