var number = prompt('Please Enter the number')

if (number == 1) {
  console.log(`${number} is not a prime number and not a composite number`)
} else if (number < 1) {
  console.log(`A prime number of ${number} is not possible`)
} else {
  let isPrime = true
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      isPrime = false
      break
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`)
  } else {
    console.log(`${number} is not a prime number`)
  }
}