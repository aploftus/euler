/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function range(min, max, increment) {
  var results = [];
  if (max > min) {
    for (var x = min; x < max; x += increment) {
      results.push(x);
    } 
  } else if (min > max) {
    for (var y = min; y > max; y += increment) {
      results.push(y);
    }
  }
  return results;
}

function isPrime(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
    
  }
  return true;
}

function greatestPrimeFactor(composite) {
  var searchLimit = Math.ceil(composite / 2) - 1;
  for (var x = searchLimit; x >=2; x--) {
    if (composite % x === 0 && isPrime(x)) {
      return x;
    }
  }
}


console.log(greatestPrimeFactor(600851475143));