/**
 * Задание 1.
 Создай переменные всех основных типов данных: строка, число, булево, null, undefined, symbol, BigInt,
 объект и массив.
 Напиши typeof для каждой.
 пример: console.log(typeof test)
 **/


// Код задания 1

let testString = "Строка";
let testNum = 123;
let testBool = false;
let testNull = null;
let testUndef;
const testSymbol = Symbol("id");
let testBigInt = BigInt("10");

let testObj = {
    key1: "value1",
    key2: "value2"
};
let testMass = ["value1", "value2", "value3"];

console.log(typeof testString);
console.log(typeof testNum);
console.log(typeof testBool);
console.log(typeof testNull);
console.log(typeof testUndef);
console.log(typeof testSymbol);
console.log(typeof testBigInt);
console.log(typeof testObj);
console.log(typeof testMass);

/**
 * Задание 2.
 Преобразуй строку "123" в число. Попробуй сложить "123" + 5 и Number("123") + 5.
 Объясни разницу.
 **/


// Код задания 2

let strA = "123";

console.log(strA + 5); // При неявном приведении, если хоть один из элементов - строка, все остальные тоже приводятся к строке
console.log(Number(strA) + 5); // Тк здесь строка явно приведена в число, оба элемента становятся числом => получается число на выходе

/**
 * Задание 3.
 Напиши функцию, которая принимает аргумент и возвращает строку: "Это строка", "Это число",
 и т.п. — в зависимости от типа.
 **/


// Код задания 3

console.log(guessType(testString));
console.log(guessType(testNum));
console.log(guessType(testBool));
console.log(guessType(testNull));
console.log(guessType(testUndef));
console.log(guessType(testSymbol));
console.log(guessType(testBigInt));
console.log(guessType(testObj));
console.log(guessType(testMass));

function guessType (a){
    switch(typeof a){
      case "string":
         return "Это строка";
      case "number":
         return "Это число";
      case "boolean":
         return "Это булево";
      case "symbol":
         return "Это символ";
      case "bigint":
         return "Это большое число";
      case "undefined":
         return "Значение не определено";
      default:
         return "Это объект";
   }
}

/**
 Задание 4.
Чем отличаются undefined и null? Проверьте результат выполнения следующего кода.

    let a;
    let b = null;

    console.log(a == b);  // ?
    console.log(a === b); // ?
    console.log(typeof a); // ?
    console.log(typeof b); // ?
 **/

// Код задания 4

// undefind это переменная без значения, null это переменная, намеренно оставленная пустой
// console.log(a == b); выведет true, тк при нестрогом сравнении undefind и null равны
// console.log(a === b); выведет false, тк при строгом сравнении undefind и null это разные типы переменных
// console.log(typeof a); выведет тип undefind
// console.log(typeof b); выведет тип object