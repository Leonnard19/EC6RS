// REST
const user = {
  nome: 'Leonardo',
  idade: 25,
  empresa: 'Lions Corp',
};

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
  //return params[0] + params[1];
}

console.log('result: ' + soma(6, 7, 5));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user1 = {
  nome: 'Leonardo',
  idade: 25,
  empresa: 'SoulPay',
};

const user2 = { ...user1, nome: 'Santos' };

console.log(user2);
