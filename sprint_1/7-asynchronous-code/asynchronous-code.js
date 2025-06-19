
/**
 * Задание 1.
 * Напиши функцию `delayLog(msg, ms)`, которая выводит сообщение `msg` в консоль через `ms` миллисекунд.
 * Пример:
 * delayLog("Привет", 1000); // выведет "Привет" через 1 секунду
 **/

// Код задания 1

function delayLog(msg, ms) {
    setTimeout(() => {console.log(msg);}, ms);
}
delayLog("Привет", 1000);

/**
 * Задание 2.
 * Напиши функцию `sequentialLogs()`, которая выводит 1, 2 и 3 с интервалами в 1, 2 и 3 секунды соответственно.
 **/

// Код задания 2

function sequentialLogs(){
    setTimeout(() => {console.log(1);}, 1000);
    setTimeout(() => {console.log(2);}, 2000);
    setTimeout(() => {console.log(3);}, 3000);
}
sequentialLogs();

/**
 * Задание 3.
 * Напиши функцию `checkNumber(num)`, возвращающую Promise.
 * Если число больше 10 — промис должен выполниться с "OK", иначе — отклониться с "Too small".
 **/

// Код задания 3

function checkNumber(num){
    return new Promise(() => {
        if(num>10) console.log("OK");
        else console.log("Too small");
    });
}
checkNumber(4);

/**
 * Задание 4.
 * Напиши функцию `fakeFetch(url)`, которая возвращает промис.
 * Он "загружает" данные через 2 секунды, возвращая сообщение `${url} loaded`.
 **/

// Код задания 4

function fakeFetch(url){
    return new Promise(() => {
        setTimeout(() => {console.log(`${url} loaded`)});
    });
}
fakeFetch("www.fake_url.com")

/**
 * Задание 5.
 * Создай цепочку промисов, которая:
 * 1. Удваивает число 5.
 * 2. Прибавляет 10.
 * 3. Делит результат на 3.
 * 4. Выводит финальный результат.
 **/

// Код задания 5

function promise(num){
    return new Promise((resolve) => {
        resolve(num *= 2);
    }).then(function(num){
        return num += 10;
    }).then(function(num){
        console.log(num /= 3);
    });
}
promise(5);

/**
 * Задание 6.
 * Напиши async-функцию `loadData`, которая вызывает `fakeFetch(url)` с использованием async/await.
 * Обработай ошибку с помощью try...catch.
 **/

// Код задания 6

async function loadData(url){
    try{
        const data = await fakeFetch(url);
        console.log(data);
    }catch(error){
        console.error("error");
    }
}
loadData("url_fake.net")

/**
 * Задание 7.
 * Напиши функцию `loadAll(urls)`, которая использует Promise.all для параллельной загрузки массива URL.
 * После загрузки выведи все результаты.
 **/

// Код задания 7

const fetch = (url) => new Promise(resolve => resolve(url));

async function loadAll(urls) {
    try{
        const data = await Promise.all([fetch(urls[0]), fetch(urls[1]), fetch(urls[2])]);
        console.log(data);
    }catch(error){
        console.error("error");
    }
}
loadAll(["url1", "url2", "url3"]);

/**
 * Задание 8.
 * Напиши функцию `loadFirst(urls)`, которая использует Promise.race.
 * Она должна вернуть результат самого первого завершившегося запроса.
 **/

// Код задания 7

async function loadFirst(urls) {
    try{
        const data = await Promise.race([fetch(urls[0]), fetch(urls[1]), fetch(urls[2])]);
        console.log(`Победил - ${data}`);
    }catch(error){
        console.error("error");
    }
}
loadFirst(["url1", "url2", "url3"]);

/**
 * Задание 9.
 * Напиши функцию `processSequentially(arr, asyncFn)`, которая вызывает `asyncFn` для каждого элемента массива последовательно.
 **/

// Код задания 9

async function returnData(url) {
    try{
        const data = await fetch(url);
        console.log(`Возвращен - ${data}`);
    }catch(error){
        console.error("error");
    }
}
function processSequentially(arr, asyncFn){
    for(let item of arr){
        asyncFn(item);
    }
}
processSequentially(["data1", "data2", "data3"], returnData)

/**
 * Задание 10.
 * Напиши функцию `sleep(ms)`, которая возвращает промис, завершающийся через указанное количество миллисекунд.
 **/

// Код задания 10

function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(() => {resolve(console.log("Промис вернулся"));}, ms)
    });
}
sleep(3000);