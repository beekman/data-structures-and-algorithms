const findSubstring = (s, words) => {
	let answers = [];

	// Calculate the total length of the words
	const totalLengthOfWords = words.reduce(
		(total, word) => (total += word.length),
		0
	);

	// Loop through the string, until there is not enough space to find all words remaining
	for(let i = 0; i <= s.length - totalLengthOfWords; i++) {
		// If the string from this point contains all target words, store the starting position
		if(doesStringContainAllWords(s.substring(i), words.slice())) {
			answers.push(i);
		}
	}

	return answers;
};

const doesStringContainAllWords = (string, words) => {
	// If all words have been found
	if(!words.length) return true;

	// Loop through all words
	for(let i = 0; i < words.length; i++) {
		// Store the length of the target word (as it may be spliced)
		const targetWordLength = words[i].length;

		// Check if the word in question is found at the start of the string
		if(string.substring(0, targetWordLength) === words[i]) {
			// Remove the found word from the words array
			words.splice(i, 1);

			// Look for the remaining words in the rest of the string
			return doesStringContainAllWords(
				string.substring(targetWordLength),
				words
			);
		}
	}

	// If no words were found in the current string
	return false;
};
