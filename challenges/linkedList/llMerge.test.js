const { mergeLists } = require('./llMerge');
const { LinkedList } = require('./linkedList');

describe('linked list merge function', () => {
  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);
    const mergedList = mergeLists(linkedList1, linkedList2);
    expect(mergedList.toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2 -> 4');
  });
  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(3);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);
    const mergedList = mergeLists(linkedList1, linkedList2);
    expect(mergedList.toString()).toEqual('1 -> 5 -> 3 -> 9 -> 4');
  });
  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    linkedList2.insert(9);
    linkedList2.insert(5);
    const mergedList = mergeLists(linkedList1, linkedList2);
    expect(mergedList.toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2');
  });
  it('should handle second list being empty', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    const mergedList = mergeLists(linkedList1, linkedList2);
    expect(mergedList.toString()).toEqual('1 -> 3 -> 2');
  });
  it('should handle first list being empty', () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();
    linkedList2.insert(2);
    linkedList2.insert(3);
    linkedList2.insert(1);
    const mergedList = mergeLists(linkedList1, linkedList2);
    expect(mergedList.toString()).toEqual('1 -> 3 -> 2');
  });
});
