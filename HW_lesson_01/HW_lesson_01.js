/* TASK 1
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию */

var celsusDegree = 100;
var farengeitDegree = (9 / 5) * celsusDegree + 32;
 console.log(farengeitDegree); //Вместо alert сделала в console.log


/* TASK 2
2. Работа с переменными.
a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»). */

var admin,name = "Василий";
admin = name;
console.log(admin);


/* TASK 3
4. *Чему будет равно JS-выражение 1000 + "108"? */

var a, b;
a = 1000;
b = "108";
console.log(a + b); // результат будет 1000108, так как одна переменная number, а вторая string