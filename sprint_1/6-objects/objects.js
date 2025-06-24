
/**
 * Задание 1.
 Создайте объект person с полями firstName, lastName и age. Выведите полное имя в консоль.
 **/

// Код задания 1

let person = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 22
}
console.log(person.firstName, person.lastName, person.age, "года");

/**
 * Задание 2.
 Добавьте в объект person новое свойство city со значением "Moscow".
 **/

// Код задания 2

person.city = "Moscow";

/**
 * Задание 3.
 Удалите свойство age из объекта person.
 **/

// Код задания 3

delete person.age;

/**
 * Задание 4.
 Используйте цикл for...in, чтобы вывести в консоль все ключи и значения объекта person.
 **/

// Код задания 4

for(key in person) console.log(key, person[key]);

/**
 * Задание 5.
 Напишите функцию, которая принимает объект и возвращает массив всех его ключей.
 **/

// Код задания 5

function returnKeys(obj){
    var new_obj = [];
    for (let key in obj){
        new_obj.push(key);
    }
    return new_obj;
}
console.log(returnKeys(person));

/**
 * Задание 6.
 Напишите функцию, которая принимает объект и возвращает массив всех значений.
 **/

// Код задания 6

function returnValues(obj){
    var new_obj = [];
    for (let key in obj){
        new_obj.push(obj[key]);
    }
    return new_obj;
}
console.log(returnValues(person));

/**
 * Задание 7.
 Создайте объект с методом greet(), который выводит в консоль приветствие с использованием значения свойства name.
 **/

// Код задания 7

let testObj = {
    name: "Иван",
    greet() {console.log(`Привет, ${this.name}!`);}
}

testObj.greet();
