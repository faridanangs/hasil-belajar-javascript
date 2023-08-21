///// MACAM MACAM CLOSURE

// CLOSURE ANONIM
/*
function sapa(sapa){
  // functionnya harus di return dulu supaya bisa 
  return function(nama){
    console.log(`${sapa} ${nama}`);
  }
}
// Harus di buatkan Variabek supaya bisa di jalankan semuanya
// sapa('halli'');   INI AKAN BERJALAN SETENGAAH
let Sapa = sapa('hallo');
Sapa('farid');
*/

// function fictory ANONIM + private
/// Jika kita menaruh itung setelah function maka akan terjadi error
// (function itung(){    ini eror
let itung = (function (){  // Ini succes
  let angka = 0;
  return function(){
    return ++angka;
  }
})();
angka = 10;  // function kita tdk bisa di ubah oleh siapapun melalui global scope
console.log(itung());
console.log(itung());
console.log(itung());
console.log(itung());