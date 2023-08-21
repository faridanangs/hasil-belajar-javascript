// function constructor
/*
function siswa(){
  let nama = 'farid'; // jika menggunakan let hasilnya undefined
  this.kelas = 11;
  let sayHello = function(){
    console.log(`Nama: ${this.nama} kelas: ${this.kelas}`)
  }
  return (sayHello());
}
siswa();
*/


/// Menggunakan arrow function
// Mungkin sekarang arrow function sudah memiliki this di dalamnya
/*
function siswa(){
  this.nama = 'farid anang s';
  this.kelas = 11;
  this.kenalan = () => {
    console.log(`Nama: ${this.nama} kelas: ${this.kelas}`);
  setInterval( function() {
    console.log(this.kelas++);
    if (kelas < 14){
      alert('stop');
  }
  },500);
 }
  return kenalan();
}
siswa();
*/


/// Cara use arrow function pada website sederhana
const ubah = document.querySelector('div');
this.satu = 'animasi';
this.dua = 'warna';

ubah.addEventListener('click', a => {
  a.target.classList.toggle(satu);
  if (this.satu.contains == 'animasi'){
    [satu,dua] == [dua,satu]
  }
  setTimeout( () => {
    a.target.classList.toggle(satu);
  }, 600);
});