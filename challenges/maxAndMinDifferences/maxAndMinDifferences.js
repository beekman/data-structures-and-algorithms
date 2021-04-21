export function maxAndMinDifferences(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let maxDiff = Math.abs(arr1[0] - arr2[(arr2.length - 1)]);
  let maxDiff2 = Math.abs(arr2[0] - arr1[(arr1.length - 1)]);
  if(maxDiff < maxDiff2) (maxDiff = maxDiff2);

  let i = 0;
  let j = 0;

  // Initialize minDiff to placeholder value
  let minDiff = Infinity;

  while(i < arr1.length && j < arr2.length) {
    let diff = Math.abs(arr1[i] - arr2[j]);
    if(diff < minDiff) { minDiff = diff; }

    // Move the smaller array's index forward
    if(arr1[i] < arr2[j])
      i++;
    else
      j++;
  }

  return [maxDiff, minDiff];
}
