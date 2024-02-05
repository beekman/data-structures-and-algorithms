class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) {
                node[c] = {};
            }
            node = node[c];
        }
        node.isWord = true;
    }

    traverse(word) {
        //iterate through the node letter by letter and write the characters to node
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (node == null) {
                return null;
            }
        }
        //return the node
        return node;
    }

    search(word) {
        const node = this.traverse(word);
        return (node != null && node.isWord === true);
    }

    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}
