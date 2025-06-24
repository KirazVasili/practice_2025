/**
 * Задание 1.
 Напиши функцию, который проверяет возраст пользователя и выводит сообщение:
 "Доступ разрешён", если возраст больше или равен 18,
 "Доступ запрещён" — если меньше.
 **/


// Код задания 1

function checkAge(age) {
    console.log(age >17 ? "Доступ разрешён" : "Доступ запрещён");
}

checkAge(10)
checkAge(18)
checkAge(26)

/**
 * Задание 2.
 Цикл: Выведи в консоль числа от 1 до 10.
 **/


// Код задания 2

for (let i = 1; i <= 10; i++) console.log(i);

/**
 * Задание 3.
 Есть рейтинг от 1 до 5. Напиши функцию, которая принимает рейтинг и выводит строку из звёздочек:
 ★★★☆☆ для 3.
 **/


// Код задания 3

function Stars(num){
    let rating = "";    
    for (let i = 0; i < 5; i++) i < num ? rating += "★" : rating += "☆";
    console.log(rating);
}
Stars(3);

/**
 * Задание 4.
 Напиши функцию, которая будет:
 Если сейчас между 22:00 и 07:00 — возвращать:
 "Ночная блокировка: операции недоступны".
 Иначе - возвращать: true
 Используй Date и if.
 **/

// Код задания 4

function nightBlock(date){
    if(date.getHours()>=22 || date.getHours()<7) return "Ночная блокировка: операции недоступны";
    return true;
}

let now = new Date();
console.log(nightBlock(now));

/**
 * Задание 5.
 Есть массив товаров с ценами. Выведи список: в формате:
 1. Хлеб — 40₽
 2. Молоко — 60₽
 ..и т.д
 **/

const productList = [
    { name: 'Хлеб', price: 40 },
    { name: 'Молоко', price: 60 },
    { name: 'Сыр', price: 250 },
    { name: 'Яйца', price: 90 },
    { name: 'Масло', price: 120 },
    { name: 'Макароны', price: 70 },
    { name: 'Кофе', price: 300 },
    { name: 'Чай', price: 150 },
    { name: 'Сахар', price: 80 },
    { name: 'Соль', price: 30 },
    { name: 'Мука', price: 50 },
    { name: 'Колбаса', price: 220 },
    { name: 'Огурцы', price: 100 },
    { name: 'Помидоры', price: 110 },
    { name: 'Картофель', price: 45 },
];

// Код задания 5

function ReturnList(list){
    let i = 1;
    for(item of list){
        console.log(`${i}. ${item.name} - ${item.price}₽`);
        i++
    }
}
ReturnList(productList)

/**
 * Задание 6.
 Продолжаем работать со списком продуктов:
 1. У каждого продукта уменьши цену на 20%
 2. Оставь в массиве только продукты, где цена больше 40
 Метод должен вернуть массив, где выполнены 2 вышеуказанных пункта
 **/


// Код задания 6

function RewriteList(list){
    for(item of list){
        item.price -= item.price*0.2;
    }
    return list.filter(entry => entry.price > 40);
}
ReturnList(RewriteList(productList));

/**
 * Задание 7.
 Напишите метод которая выводит числа от 1 до 100:
     1. Числа, кратные 3, заменяются на "Fizz".
     2. Числа, кратные 5, заменяются на "Buzz".
     3. Числа, кратные одновременно 3 и 5, заменяются на "FizzBuzz".
 **/


// Код задания 7

for(let i = 1; i <= 100; i++){
    if(i%5==0 && i%3==0) console.log("FizzBuzz")
    else if(i%5==0) console.log("Buzz")
    else if(i%3==0) console.log("Fizz")
    else console.log(i);
}