/*
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.



Example 1:

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
Example 2:

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
 */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

/*
There are N rooms and you start in room 0.
Each room i has a list of keys rooms[i].
Each key rooms[i][j] is an integer from 0 up to n-1, where n = rooms.length.
Initially, all the rooms start locked(except for room 0).
A key rooms[i][j] = v opens the room with number v.
*/

const canVisitAllRooms = rooms => {

    let visited = new Uint8Array(rooms.length), stack = [0], count = 1;
    visited[0] = 1;
    while(stack.length) {
        let keys = rooms[stack.pop()];
        for(let k of keys)
            if(!visited[k]) stack.push(k), visited[k] = 1, count++;
    }
    //Returns true only if every room can be visited.
    return rooms.length === count;
};
