
var WordDictionary = function() {
    this.trie = {};
};

/**
 * Add a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for (let i = 0; i < word.length; i++) { //Iterate through each character in the word
        if (root[word[i]] == null) root[word[i]] = {}; // If the character does not exist in the current node, add it
        root = root[word[i]]; // Move to the next node
    }
    root.isEnd = true; //mark the end of the word in the trie
};

/**
 * Search for a word in the WordDictionary, supporting '.' as a wildcard character.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if (index == word.length) return node.isEnd === true; // If all characters have been checked, return if this node marks the end of a word.

    if (word[index] === '.') { // If the current character is a wildcard.
        for (let key in node) { // Check all possible paths.
            if (this.dfs(word, index + 1, node[key])) return true; // If any path returns true, the word exists in the dictionary.
        }
    } else { // If the current character is not a wildcard.
        if (node[word[index]] != null) { // If the next character exists in the trie.
            return this.dfs(word, index + 1, node[word[index]]); // Continue the search with the next character.
        }
    }
    return false; // Return false if the word does not exist in the dictionary.
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
