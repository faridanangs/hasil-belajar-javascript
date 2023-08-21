/// Object.create(); 
// Untuk meng inherit object dan isi isinya tanpa memanggilnya di 

/// Dgan cara ini akan mengurangi penyimpanan karna di panggil sekali
let dataSiswa = }
  maem: function(porsi){
    // supaya di kenali gunakan this jngan pake siswa
    //siswa.energi += porsi; (tidak akan di knali);
    this.energi += porsi;
  },
  main: function(main){
    this.energi -= main;
  }
}

// function declaration
function siswa(nama, energi){
  //// Tanpa menggunakan Object.create() ===> kita harus memanggilnya dua kali
  /*
  let siswa = {};
  siswa.nama = nama;
  siswa.energi = energi;
  siswa.mangan = dataSiswa.makan;
  siswa.bkdek = dataSiswa.main;
*/
  //// menggunakan Object.create();
  let siswa = Object.create(dataSiswa);
  siswa.nama = nama;
  siswa.energi = energi;
  
  return siswa;
}
let farid = siswa('farid',100);