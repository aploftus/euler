// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
    
  }
  return true;
}
function findNthPrime(n) {
	var count = 0;
	var prime
	for (var x = 2; count !== n; x++) {
		if (isPrime(x)) {
			prime = x;
			count += 1;
		}
	}
	return prime;
}

console.log(findNthPrime(10001));