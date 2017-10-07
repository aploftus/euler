function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}

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

function greatestPalFrom3DigitFactors() {
  var factors = range(999, 99, -1);
  var product;
  var palindromes = [];
  
  for (var i = 0; i < factors.length; i++) {
    for (var k = i; k < factors.length; k++) {
      product = factors[i] * factors[k];

      if (isPalindrome(product)) {
        palindromes.push(product);
      }
    }
  }
  return palindromes.reduce(function(max, val) { return val > max ? val : max });
}

console.log(greatestPalFrom3DigitFactors());