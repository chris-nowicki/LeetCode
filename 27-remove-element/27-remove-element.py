class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        num = 0
        for i in range(0, len(nums)):
            if nums[num] == val:
                nums[num] = chr(42)
                nums.append(nums[num])
                nums.pop(num)
                k += 1
            else:
                num += 1
        k = len(nums) - k
        return k
                