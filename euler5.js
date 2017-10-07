var factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var result;

for (var x = 20; result === undefined; x += 20) {
  if (factors.every(function(factor) {
    return x % factor === 0;
  })) {
    result = x;
  }
}
console.log(result);