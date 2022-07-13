class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        lcp = ""
    
        # if the string is empty or the length of 1 then return lcp as there will be
        # no common prefix
        if strs is None or len(strs) == 0:
            return lcp
    

        # find the string with the smallest length
        minLength = len(strs[0])
        for i in range(1, len(strs)):
            minLength = min(minLength, len(strs[i]))

        # Loop through each letter and check until there is no match
        # and then break the loop
        for i in range(0, minLength):
            current = strs[0][i]
            for j in range(0, len(strs)):
                if strs[j][i] != current:
                    return lcp
            lcp += current

        return lcp