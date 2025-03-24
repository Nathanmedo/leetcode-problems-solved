##nums is an array of numbers
##target is the target numbers

def twoSums(nums, target):
  ##[2, 4, 5, 8]
  ##create a dictionary to store already checked values in the nums list
  seen = {}
  
  ##creating a for...in loop to loop through each value in the array
  for i, num in enumerate(nums):
      ##get the complement number e.g for a target of 9, the compliment is 9-4 = 5
      compliment = target - nums[i]
      
      if  compliment in seen:
          return [seen[compliment], i]
      seen[num] = i
  print(seen)
  return []
    
result = twoSums([2, 7, 5, 8], 9)

print(result)