/// FUNCTION DECLARATION
// Harus mendeklarasikan variable to menyimpan nilai
// Dan mereturn supaya dapat di danggil dan tanpa menggunakan new
function siswa(nama, energi){
  let siswa = {};
  siswa.nama = nama;
  siswa.energi = energi;
  
  siswa.makan = function(porsi){
    this.energi += porsi;
  },
  siswa.main = function(main){
    siswa.energi -= main;
  }
  return siswa;
}
let farid = siswa('farid',100);







/// CONSTRUCTOR FUNCTION
// Tanpa mendeklarasikan variable dan return
// Tapi menggunakan this dan mew
/*
function siswa(nama, energi){
  // let siswa = {};
  this.nama = nama;
  this.energi = energi;
  this.makan = function(porsi){
    this.energi += porsi;
    console.log('selamat makan');
  },
  this.main = function(main){
    this.energi -= main*1.5
    console.log('selamat bermain')
  }
  // return;
}
let farid = new siswa('farud',100);
*/