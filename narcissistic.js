function narcissistic(value) {
  let numbers = value.toString();
  let narcissisticNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    narcissisticNumber = narcissisticNumber + Math.pow(numbers[i], 10);
  }
  if (narcissisticNumber == value) {
    return true;
  }else{
    return false;
  }
}
console.log(narcissistic(7));
