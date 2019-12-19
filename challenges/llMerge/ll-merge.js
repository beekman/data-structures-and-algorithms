const mergeLists = (list1, list2) => {
  if(!list1.head) return list2;

  let curr1, curr2, temp;
  curr1 = list1.head;
  curr2 = list2.head;

  while(curr2) {
    temp = curr1.next;
    curr1.next = curr2;
    curr1 = curr2;
    curr2 = temp;
  }

  return list1;
};

module.exports = { mergeLists };
