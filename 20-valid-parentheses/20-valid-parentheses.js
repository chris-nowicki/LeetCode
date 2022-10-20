/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length % 2 !== 0) {
		return false;
	}

	let stack = [];
	let closedToOpen = new Map([
		[")", "("],
		["]", "["],
		["}", "{"],
	]);

	for (let i = 0; i < s.length; i++) {
		if (closedToOpen.has(s[i])) {
			if (stack !== 0 && stack[stack.length - 1] == closedToOpen.get(s[i])) {
				stack.pop();
			} else {
                return false
            }
		} else {
			stack.push(s[i]);
		}
	}

	return stack.length === 0;
};