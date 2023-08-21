/// destructuring function di gunakan untuk menyingkat penulisan dalam kode kita supaya tdk berbelit"

/// PENGGUNAAN DESTRUCTURING VALUES PADA FUNCTION 
// pada array
/*
function kalkulasi(a,b){
  return [a + b, a * b, a / b, a - b]
}

// jika kita menggunakan array kita tdk boleh membongkar dengan nama sembarang seperti
// [kal,kur,bagi,tam] ==>>> jika kita ingin memanggil kali maka yang akan keluar tambah karna dia memanggil sesuai urutan
[tam,kal,bag,kur] = kalkulasi(4,6);
console.log(tam);
*/
// pada Object
/*
function kalkulasi(a,b){
  return {
    tambah: a + b,
    kali: a * b,
    kurang: a - b,
    bagi: a / b,
  }
}
/// {tam,kur,bag,kal} ==>>> Jika kita memanggilnya seperti ini maka akan undefined karan nama yang ini tdk ada / tidak sesuai dngan yang ada di dalam object
const {tambah,kurang,bagi,kali} = kalkulasi(4,6);
console.log(tambah);
*/

/// PENGGUNAAN DESTRUCTURING ARGUMENTS PADA FUNCTION 

const dataSiswa = {
  nama: 'farid anang samudra',
  kelas: 11,
  absen: 10,
  jurusan: 'mipa',
  nilai: {
    mtk: 60,
    biologi: 70,
    agama: 76,
    sejarah: 90,
  },
  alamat: {
    desa: 'sesela',
    dusun: 'kebun lauk',
    kec: 'gunungsari'
  }
}
function data({nama,kelas,absen,jurusan, nilai: {agama,mtk,biologi,sejarah}, alamat: {desa,dusun,kec}}){
  return `Halo nama saya: ${nama} saya kelas: ${kelas} saya no absen: ${absen} jurusan saya: ${jurusan}\n Nilai biologi: ${biologi}, mtk: ${mtk}, agama: ${agama}, sejarah indo: ${sejarah}  \nsaya tinggal di desa: ${desa} dusun: ${dusun} kecamatan: ${kec}`
}


const tampilkan = data(dataSiswa);
console.log(tampilkan);
