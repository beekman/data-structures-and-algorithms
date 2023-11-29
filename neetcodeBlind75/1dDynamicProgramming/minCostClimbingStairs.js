/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
    //integer array cost, cost[i]= cost of step i on a staircase
    //NO COST FOR TOP STEP
    //start from either 0 or 1 and climb 1 or 2 steps each time
    //costSum= cumulative cost of all steps you stepped on
    //find the minimum cost to reach the top step

    /*
    ROADMAP:
    Input: cost = [10,15,20]
    Draw a table of the minimum costs for each step
    0   1   2   3
    25  15  20  0

    Each step only relies on the next two values if you calculate from the top step backwards
    */
    //Start two steps from the top and keep two variables for the cost of each option
    for (let i = (cost.length - 3); i >= -1; i--) {
        //for each step, compare the cost of the next two steps and add the lower cost to the current step's cost.
        //this will replace each step's cost with the minimum cost to get to the top step from that step.
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    //compare the first two step's cumulative costs.
    return Math.min(cost[0], cost[1]);
};
