//// Spred operator
// menggunakan ...item

// menggabung 2 buah array menggunakan Spred oprator
/*
const array1 = ['duana','farid','wagas'];
const array2 = ['dika','jodi','halod'];

const gabung = [...array1, ...array2]
console.log(gabung)
*/

// memgkopi array menggunakan Spred operator
/*
const array1 = ['duana','farid','wagas'];
console.log(array1);
const copyArray = [...array1];
copyArray[0] = "samsudin";
console.log(copyArray);
*/

// memecahkan elemen menggunakan Spred operator
/*
const array1 = ['duana','farid','wagas'];
console.log(...array1)
*/


/// Kita implementasikan ke dalam html
// mengambil li dan mengubahnya ke dalam array
/*
const orng = document.querySelectorAll('li');
// Kita akan mengubah nodlist menjadi array menggunakan spred operator
const orang = [...orng].map(m => m.textContent);
console.log(orang);
*/
/// memecah nama menjadi huruf kemudian mengubahnya menjadi array dan melooping huruf dan di masukan span 
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;



