// 1.
// const number = (a, b) => {
//     if (!b) return a;
//     return number(b, a % b);
// };
// let a = +prompt();
// let b = +prompt();
// let count = number(a, b);
// if (count === 1) {
//     alert(a + "/" + b);
// } else {
//     a = a / count;
//     b = b / count;
//     alert(a + "/" + b);
// }
// number(a, b) === 1

// 2.
// let sum = 0;
// for (let a = 160; a <= 2048; a += 2) {
//     sum += a;
// }
// alert(sum);

// 3.
// let a = 163;
// sum = 0;
// while (a <= 815) {
//     sum += a;
//     a += 4;
// }
// alert(sum);


// 4.
// let fi = [0, 1];
// let number = +prompt();
// for (i = 1; i < number - 1; i++) {
//     fi.push(fi[i] + fi[i - 1]);
// }
// alert(fi);
// alert(fi[number - 1]);

// 5.
// let sum = 0;
// let operator = true;
// for (let i = 1; i < 18955; i++) {
//     if (operator === true) {
//         sum += i;
//         operator = false;
//     } else {
//         sum -= i;
//         operator = true;
//     }
// }
// alert(sum);

// 6.
// let sum = 0;
// let a = 1;
// let b = 2;
// while (a < 88) {
//     sum += a * b;
//     a += 1;
//     b += 1;
// }
// alert(sum);

// 7.
// let sum = 0;
// let a = 1;
// let b = 2;
// let c = 3;
// while (a < 88) {
//     sum += a * b * c;
//     a += 1;
//     b += 1;
//     c += 1;
// }
// alert(sum);

// 8.
// let sum = 0;
// let a = 1;
// let b = 3;
// let c = 5;
// while (a < 156) {
//     sum += a * b * c;
//     a += 2;
//     b += 2;
//     c += 2;
// }
// alert(sum);

// 9.
// let sum = 0;
// let a = 1;
// let b = 3;
// let c = 5;
// while (a < 156) {
//     sum += a * b * c;
//     a += 2;
//     b += 2;
//     c += 2;
// }
// alert(sum);

// 10.
// let number = prompt();
// let numMin = Infinity;
// while (number !== "stop") {
//     if (+number < numMin) {
//         numMin = number;
//     }
//     number = prompt();
// }
// alert(numMin);

// 11.
// let number = prompt();
// let numMin = [];
// while (number !== "stop") {
//     if (+number < numMin) {
//         numMin = number;
//     }
//     number = prompt();
// }
// numMin.sort((a, b) => a - b);
// alert(
//     numMin[0].toString() +
//     ", " +
//     numMin[1].toString() +
//     ", " +
//     numMin[2].toString()
// )

// 12.
// let number = prompt();
// let numMin = [];
// while (number !== "stop") {
//     numMin.push(+number);
//     number = prompt();
// }
// numMin.sort((a, b) => a - b);
// alert(numMin[0].toString() + ", " + numMin[numMin.length - 1].toString());

// 13.
// let number = prompt();
// let numMin = [];
// while (number !== "stop") {
//     numMin.push(+number);
//     number = prompt();
// }
// numMin.sort((a, b) => a - b);
// alert(numMin[numMin.length - 1] - numMin[0]);

// 14.
// let number = prompt();
// let sum = 0;
// let count = 0;
// while (number !== "stop") {
//     sum += +number;
//     count += 1;
//     number = prompt();
// }
// data = sum / count;
// alert(data);

// 15.
// let number = prompt();
// let text = number.split("");
// alert(text);
// if (text[0] === "-") {
//     text.splice(0, 1);
//     let reverse = text.reverse();
//     let come = reverse.join("");
//     alert("-" + come);
// } else {
//     let reverse = text.reverse();
//     let come = reverse.join("");
//     alert(come);
// }
