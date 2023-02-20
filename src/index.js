/* 
if n < 2 return
else 
  sort left half of elements
  sort right half of elements
  merge sorted halves

*/

const mergeSort = (array) => {
  if (array.length < 2) return array;
  if (array.length === 2) {
    const sortedArray = array[0] > array[1] ? [array[1], array[0]] : array;
    return sortedArray;
  }
  const middle = Math.round(array.length / 2);
  const leftArray = mergeSort(array.slice(0, middle));
  const rightArray = mergeSort(array.slice(middle, array.length));
  let temp = [];
  let leftInc = 0;
  let rightInc = 0;
  while (temp.length < array.length) {
    let leftValue = leftArray[leftInc];
    let rightValue = rightArray[rightInc];
    if (leftValue === undefined) temp = [...temp, ...rightArray.slice(leftInc)];
    if (rightValue === undefined) temp = [...temp, ...leftArray.slice(leftInc)];
    else if (leftValue < rightValue) {
      temp.push(leftValue);
      leftInc++;
    } else {
      temp.push(rightValue);
      rightInc++;
    }
  }
  return temp;
};

const arrayToSort = [5, 11, 2, 4, 8, 3, 2, 1];

const sortedArray = mergeSort(arrayToSort);

console.log(sortedArray);
