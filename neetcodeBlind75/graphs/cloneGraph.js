/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function(node, seen = new Map()) {
    if (node === null) return null;

    if (seen.has(node)) return seen.get(node);

    return dfs(node, seen);
}

const dfs = (node, seen) => {
    const clone = new Node(node.val);

    seen.set(node, clone);

    for (const neighbor of node.neighbors) {
        const cloneNeighbor = cloneGraph(neighbor, seen);

        clone.neighbors.push(cloneNeighbor);
    }

    return clone;
}
