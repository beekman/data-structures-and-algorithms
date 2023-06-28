/*
You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].
Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.
If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

Example 1:
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

Example 2:
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000

Example 3:
Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
Output: 0.00000
Explanation: There is no path between 0 and 2.
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = (n, edges, succProb, start, end) => {
    const graph = buildGraph(n, edges, succProb);
    const queue = [[start, 1]];
    const visited = new Set();
    let maxProbability = 0;

    while (queue.length) {
        // dequeue current node
        const [currentNode, currentProbability] = queue.shift();
        if (currentNode === end) {
            // if current node is the endpoint, update max probability
            maxProbability = Math.max(maxProbability, currentProbability);
        }
        else {
            // add current node to visited
            visited.add(currentNode);
            // enqueue all neighbors
            for (const [neighbor, probability] of graph[currentNode]) {
                // if neighbor is unvisited
                if (!visited.has(neighbor)) {
                    // enqueue neighbor
                    queue.push([neighbor, currentProbability * probability]);
                }
            }
        }
    }

    return maxProbability;
};
