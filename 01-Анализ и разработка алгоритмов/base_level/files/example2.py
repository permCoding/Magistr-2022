
lst = [1,2,3,4,5,6,7,8]

num_l, num_r = 2, 15

nums = [num**2 for num in range(num_l, num_r) if num%2 == 1]

print(nums)
