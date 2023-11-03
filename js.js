function findThirdHighest(arr) {
    if (arr.length < 3) {
      return "Array does not have a 3rd highest element.";
    }
  
    let first = -Infinity; // Initialize the highest number to negative infinity
    let second = -Infinity; // Initialize the second highest number to negative infinity
    let third = -Infinity; // Initialize the third highest number to negative infinity
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] < first) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] < second) {
        third = arr[i];
      }
    }
  
    return third;
  }
  
  // Example usage:
  const numbers = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
  console.log(findThirdHighest(numbers));