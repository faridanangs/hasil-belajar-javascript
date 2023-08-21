/// Prototype Pada constructor function
/*
function siswa (nama,energi){
  
//  Di balik Layar:
//  let this = Object.create(siswa.prototype);

  this.nama = nama;
  this.energi = energi;
}
let farid = new siswa('farud', 100);

siswa.prototype.makan = function(porsi){
  this.energi += porsi * 5;
}
siswa.prototype.main = function(main){
  this.energi -= main * 2;
}
*/

/// Menggunakan class
/*
class siswa {
  constructor (nama,energi){
    this.nama = nama;
    this.energi = energi;
  }
  main(main){
    this.energi -= main
  }
  makan(porsi){
    this.energi += porsi * 5;
  }
}
let farid = new siswa('farud',100);
*/


//latihan
function siswa(nama,kelas){
  this.nama = nama;
  this.kelas = kelas;
}

let farid = new siswa ('farid anang s', 11);

siswa.prototype.naikKelas = function(naik){
  this.kelas += naik;
  if (this.kelas > 12){
    alert('lulus');
  }
}


