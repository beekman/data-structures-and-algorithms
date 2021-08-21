/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 */

const last = stack => stack[stack.length - 1];

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(x) {
    if(this.minStack.length === 0 || x <= last(this.minStack)) {
      this.minStack.push(x);
    }
    this.stack.push(x);
  }

  pop() {
    if(last(this.minStack) === last(this.stack)) {
      this.minStack.pop();
    }
    return this.stack.pop();
  }

  top() {
    return last(this.stack);
  }

  getMin() {
    return last(this.minStack);
  }

}
