const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((item, index) => {
  return item + index;
});

console.log('new  array: ' + newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log('reduce= ' + sum);

const filter = arr.filter((item) => {
  return item % 2 === 0;
});

console.log('filter = ' + filter);

const find = arr.find((item) => {
  return item === 5;
});

console.log('find: ' + find);
