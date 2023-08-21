/// function Biasaaa
/*
function siswa(nama,kelas){
  return function(){
    console.log(`${nama}, kelas ${kelas}`);
  }
}
let farid = siswa('farid',11);
farid();
*/


/// arrow function if > satu pake tanda (a,b) => 
/*
let siswa = (nama,kelas) => `${nama}, Kelas:${kelas}`
console.log(siswa('farid',100));
*/

/// arrow function mengubah array ke bentuk Object
let data = ['farid anang samudra', 'wagas try sunardi', 'jodu Alfi ansyah', 'raika aisyah afgoriah']
let siswa = nama => ({nama, jumlah:nama.length});
console.table(siswa(data));

/// Menggunakan.map() di dalam array ada objek.
let Data = data.map(nama => ({nama, jumlah:nama.length}));
console.log(Data);