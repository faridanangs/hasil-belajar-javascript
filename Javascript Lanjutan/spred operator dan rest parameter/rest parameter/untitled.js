//// Res parameter untuk menemtukan atau menyeleksi epement dan menyimpan argumen pada function tanpa batas


/// Menyeleksi item dan menentukan keyua dan wakil
/*
const data = ['farid', 'wagas', 'raika', ' holid']
const [ketua,wakil,...anggota] = data;
console.log(ketua);
console.log(anggota);
*/

/// menangkap arguments pada function
// menjumlahkan argumens menggunakan reduce
/*
function lol (...values){
  return values.reduce((a,b) => {
    return a * b
})
}
console.log(lol(3,5,7,8,8,8,9,9,9));
*/
// menyaring argumen menggunakan filter
function lol (type, ...values){
  return values.filter(a => typeof a === type);
}
console.log(lol('string',1,8,7,'farid',6,true,false,'diana',18,8,true));