/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false. */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    let graph = new Array(numCourses).fill(0).map(() => new Array());
    let visit = new Array(numCourses).fill(0);

    // create graph
    for (let [course, prerequisite] of prerequisites) {
        graph[course].push(prerequisite);
    }

    for (let i = 0; i < numCourses; i++) {
        if (visit[i] === 0 && !dfs(i)) {
            return false;
        }
    }

    return true;

    function dfs(i) {
        if (visit[i] === -1) return false;
        if (visit[i] === 1) return true;

        visit[i] = -1;

        for (let j of graph[i]) {
            if (!dfs(j)) return false;
        }

        visit[i] = 1;

        return true;
    }

};
