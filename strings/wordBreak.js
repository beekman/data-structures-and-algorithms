
/*
139. Word Break
Medium

7379

344

Add to List

Share
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false


Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

const wordBreak = s => {
	const dp = Array(s.length + 1).fill(false);
	dp[0] = true;
	for(let i = 1; i <= s.length; i++) {
		for(let j = 0; j < i; j++) {
			if(dp[j] && s.substr(j, i) in wordDict) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length];
};
