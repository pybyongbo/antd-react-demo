export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    // break; 
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    // break; 
    default:
      return 0;
    // break; 
  }
}

export function filterData(data, field) {
  if (field === -1) {
    return data;
  }
  return data.filter(item => item.fieldType === field);
}