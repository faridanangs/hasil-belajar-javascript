const angka = [1,8,5,6,8,9,9,7,6,5,4,4,3,3,3,5]


/// penggunaan filter
// untuk menyaring nilai
/*
let filterAngka = angka.filter(a => a > 4);
console.log(filterAngka);
*/
/// use map untuk menjumlahkan/mengubah dll nilai
/*
let mapAngka = angka.map(a => a * 2);
console.log(mapAngka);
*/
/// use reduce untuk menggabungkan nilai satu dan dua
/*
let reduceAngka = angka.reduce((a,b) => a + b)
console.log('Jumlah total angka: ' + reduceAngka)
*/

//// method Channing
// untuk menggabungkan filter,map, dan reduce
/* 1. ambilkan saya nilai yg lebih beasr dari 5
   2. bagikan saya dengan 2 
   3. kalikan saya dengan nilai sebelumnya
*/
let Channing = angka.filter(a => a > 5)
.map(a => a / 2)
.reduce((a,b)=> a * b);
console.log('Hasilnya = ' + Channing);

