/**
 * Задание 1.
 Напиши метод `sum(arr)`, которая возвращает сумму всех чисел в массиве.
 **/

// Код задания 1

let mass = [2, 1, 2, 5, 3, 4, 5];
const sum = (arr) => arr.reduce((sum, item) => sum + item, 0);

console.log("№1");
console.log(sum(mass));

/** Задание 2.
Напиши метод `unique(arr)`, которая возвращает новый массив без повторяющихся значений.
 **/
// Код задания 2

function unique(arr){
  let newArr = new Set(arr);
  return newArr;
}
console.log("№2");
console.log(unique(mass));

/**
  Задание 3.
` Напиши метод filterRange(arr, a, b)` — возвращает элементы из `arr` в диапазоне `[a, b]`.
 **/
// Код задания 3

const filterRange = function (arr, a, b){
  if (a<0) a = 0;
  if (b<0) b = 0;
  if (b>arr.length) b = arr.length;
  if (a>b) a = b;

  newArr = arr.slice(a, b);
  return newArr;
}
console.log("№3");
console.log(filterRange(mass, 1, 4));

/** Задание 4.
Напиши метод`sortDesc(arr)`, сортирующую числовой массив по убыванию без изменения оригинала.
 **/
// Код задания 4

const sortDesc = (arr) => {
  let newArr = [...arr];
  return newArr.sort().reverse();}
console.log("№4");
console.log(sortDesc(mass));

/** Задание 5.
` Напиши метод flatMapDemo(arr), которая для каждого элемента x из массива arr создаёт новый массив
    из двух элементов: [x, x * 2], а затем объединяет все эти массивы в один плоский массив.
 Используй flatMap
 **/

// Код задания 5

function flatMapDemo(arr){
  const newArr = arr.flatMap((item) => [item, item*2]);
  console.log(newArr);
}
console.log("№5");
flatMapDemo(mass);

/** Задание 6.
`Напиши метод groupBy(arr, keyFunc)` — группирует элементы массива по ключу,
 возвращая объект, где ключи — результат `keyFunc`.
 **/

// Код задания 6

const groupBy = (arr, keyFunc) => newArr = arr.filter(item => keyFunc(item));
console.log("№6");
console.log(groupBy(mass, function(item){return item > 2;}))

/** Задание 7.
`Напиши метод rotate(arr, n)` — возвращает новый массив, в котором элементы сдвинуты вправо на `n` позиций (цикл).
 Пример: `rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`.
 [1,2,3,4,5] -> [3,4,5,1,2]
 **/
 // Код задания 7

const rotate = (arr, n) => {
  if (n>arr.length) n = arr.length;

  let arrLeft = arr.slice(arr.length-n, arr.length);
  let arrRight = arr.slice(0, arr.length-n);
  return arrLeft.concat(arrRight);
}
console.log("№7");
console.log(rotate([1,2,3,4,5], 2));