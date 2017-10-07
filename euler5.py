"""2520 is the smallest number that can be divided by each of the numbers 
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?"""

#run through numbers
#check as running if divisible by 1-20 (must check 11, 12, 13, 14, 16, 17, 18, 19, 20)
#if divisible, return and break

x = 2520
while True:
	if x%11 == 0 and x%12 == 0 and x%13 ==0 and x%14 ==0 and x%16 == 0 \
	and x%17 == 0 and x%18 == 0 and x%19 == 0 and x%20 == 0:
		print x
		break
	else:
		x += 20