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
