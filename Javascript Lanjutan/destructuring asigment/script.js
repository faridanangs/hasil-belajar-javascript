//// destructuring asigment
// untuk memecah nilai pada array dan Object

/// Contoh pada array
/*
// memecah items di dalam array menjadi var sendiri"

const dataArray = ['diana','milda','farid','anang'];
const [satu,dua,tiga,empat] = dataArray;
console.log(satu)

// Menukar nilai yang ada di dalam array

let dataArray = ['dianaMilda'];
let dataArray2 = ['faridAnang'];
console.log(dataArray[0]);
console.log(dataArray2[0]);
[dataArray,dataArray2] = [dataArray2,dataArray];
console.log(dataArray[0]);
console.log(dataArray2[0]);

// menukan index yang ada di dalam data array

let dataArray = ['dianaMilda','faridAnang'];
console.log(dataArray[0]);
console.log(dataArray[1]);
[dataArray[0],dataArray[1]] = [dataArray[1],dataArray[0]];
console.log(dataArray[0]);
console.log(dataArray[1]);

// menggunakan res parameter ...values  
// Untuk get all item yang tdk dapat di panggil
const data = [1,2,3,4,7,8,8,99,9,];
[a,...values ] = data;
console.log(a);
console.log(values);

/// return value pada function
function coba(){
  return [100,120];
}
const [a,b] = coba();
console.log(b);
console.log(b);
*/


/// Contoh pada object

// membongkar item pada object menggunakan destructuring asigment
/*
const siswa = {
  nama: 'farid anang s',
  kelas: 11,
  jurusan: 'mipa',
}
const {nama,kelas,jurusan} = siswa;
console.log(nama)
*/

/// memilih/menyeleksi object dulu baru di jalankan di function    MENGGUNAKAN {}
/*
const siswa = {
  nama: 'farid anang s',
  kelas: 11,
  jurusan: 'mipa',
  alamat: {
    desa: 'sesela',
    dusun: 'kebon lauk',
    kec: 'Gunungsari'
  }
}
function getUbah({alamat}){
  return alamat;
}
console.log(getUbah(siswa));
*/

/// menggunakan res parameter
/*
const data = {
  nama: 'farid anang s',
  kelas: 11,
  jurusan: 'mipa',
  alamat: {
    desa: 'sesela',
    dusun: 'kebon lauk',
    kec: 'Gunungsari'
  }
}
const {nama, ...values} = data;
console.log(values);
*/

/// destructuring asigment object memberi nilai  default pada asigment dan res parameter
const data = {
  nama: 'farid anang s',
  kelas: 11,
  jurusan: 'mipa',
  alamat: {
    desa: 'sesela',
    dusun: 'kebon lauk',
    kec: 'Gunungsari'
  }
}

const {nama,kelas,jurusan, email = 'yaho.co.id',...values} = data;
console.log(values)