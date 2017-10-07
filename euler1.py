"""
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
"""


def sum_mult(limit):
	result = 0

	for num in xrange(limit):
		if num%3 == 0 or num%5 == 0:
			result += num

	print "The sum is: " + str(result)

sum_mult(1000)
