let br = '<br/>';

/* //1
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
} */


//2
/* let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > -10 && arr[i] < -3) {
        document.write(arr[i]);
    }
} */

//3
/* let arr = [];
let j = 0;
let result = 0;

for(let i = 23; i <= 57; i++) {
    console.log(arr[j] = i);
    j++;
}

for(let n = 0; n < arr.length; n++) {
    result = result + arr[n];
}
console.log(arr);
console.log(result); */

/* //4
let arr = ['10', '20', '30', '50', '235', '3000'];

for(let i = 0; i < arr.length; i++) {
    if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5' ) {
        document.write(arr[i]+ br);
    }
} */

//5
/* let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arr.length; i++) {
   if (arr[i] == 'СБ' || arr[i] == 'ВС') {
    document.write('<b>' + arr[i] + '</b>'+ br);
} else {
    document.write(arr[i] + br);
}
} */

/* //6
let arr = ['5', '25', '2'];
arr.push('Маша'); 
console.log(arr[arr.length-1]);
 */

//7
/* let arr = [];
let a;

while (a != '') {
    a = prompt('Введите число');
    arr.push(+a);
}
arr.pop(a);
document.write(arr + br);
document.write('Сортировка цикла:' + br)
document.write(arr.sort()); */


//8
/* let arr = [12, false, 'Текст', 4, 2, -5, 0];
let i = arr.length - 1;

document.write('Список чисел в обратном порядке с помощью while :' + br);

while ( i >= 0) {
    document.write(arr[i] + br);
    i--;
}

document.write('Список чисел в обратном порядке с помощью reverse :' + br);
document.write(arr.reverse()); */

//9 
/*let arr = [5,9,21,,,9,78,,,,6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null) {
        sum ++;
    }
}
console.log('Сумма нулевых (пустых) элементов: ' + sum);*/

//10

/* let arr = [1,8,13,0,76,72,0,2,2,0,3,2];
let sum = 0;
let firstV = arr.indexOf(0);
let lastV = arr.lastIndexOf(0);

for(let i = firstV; i < lastV; i++) {
    sum = sum + arr[i]; 
}

console.log(sum);  */

//11
/* 
let h = +prompt('Введите целое число');
let str = '^';
let tr = '';

for(let i = 0; i < h; i++) {
   tr = tr + str;
   document.write(tr + br);
}
 */
