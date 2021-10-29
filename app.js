//numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
value = 5 % 2;
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;//=1.2999999999999998
value = value.toFixed(2);//выводт 2 числа после точки и делает нормальный ответ 1.3. Но результат в виде строки
value = +value.toFixed(2);//+ делает значение числовым
value = parseFloat(value.toFixed(1));//явно приводит к флоату
value = ( 0.6 * 10 + 0.7 * 10) / 10;//=1.3

// Math object
value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1);
value = Math.floor(2.9);
value = Math.min(2, 4, 1, 0);
value = Math.max(2, 4, 1, 0);

value = Math.floor(Math.random() * 10 + 1);
const arr = ['black', 'yelow', 'pink', 'green', 'blue'];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value]);

//Home work

let billion = 1000000000;
let billion1 = 1e9;//1 with 9 0

alert(7.3e9);

// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000

let ms = 0.000001;
let ms1 = 1e-6;// 0.000001
1 делится на 1 с 3 нулями
1e-3 = 1 / 1000 (=0.001)

1.23 делится на 1 с 6 нулями
1.23e-6 = 1.23 / 1000000 (=0.00000123)

//HEX

alert( 0xff );//255
alert( 0xFF );//255

//bin and 8
let a = 0b11111111;// бинарная форма записи числа 255
let b = 0o377;// восьмеричная форма записи числа 255

alert( a==b );//true

//toString(base) from 2 to 36, default 10
let num = 255;
alert(num.toString(16));//ff
alert(num.toString(2));//11111111
alert(1234567891234567..toString(36));//c5m8nquc5j == 1234567891234567
alert((1234567891234567).toString(36));//c5m8nquc5j == 1234567891234567

//rounding
Math.floor// округление в меншую сторону
Math.ceil// округление в большую сторону
Math.round// округление до ближайшего цулого
Math.trunc// удаление дробной части

// Неточные вычисления Inaccurate calculations
//**Внутри JavaScript число представлено в виде 64-битного формата IEEE-754. Для хранения числа используется 64 бита: 52 из них используется для хранения цифр, 11 из них для хранения положения десятичной точки (если число целое, то хранится 0), и один бит отведён на хранение знака.Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность: */

 alert(0.1.toFixed(20)); // 0.10000000000000000555

//Home work
const MATH_PI = Math.PI;
alert(+MATH_PI.toFixed(2));

value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value, value2);

let valueRandom = Math.random();
alert(valueRandom.toFixed(2));

let valueRandom2 = (Math.random() * 100 + 1);
alert(valueRandom2.toFixed());

let value = 0.6 + 0.7;
alert(+value.toFixed(2));

let value = '100$';
console.log(parseInt(value));