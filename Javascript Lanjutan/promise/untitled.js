/// menggunakan fetch vanilla javascript
/*fetch('http://www.omdbapi.com/?i=tt3896198&apikey=30c1d5c9=avengers')
.then(response => response.json())
.then(response => alert(response))*/

//// Promise
// Object yang mempresentasikan keberhasilan / kegagalan event yang asyinchronuse di masa yang akan datang
// janji (dipenuhi / ingkar)
// state (fullfielld / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

/// Contoh 1
/*let janji = true;
const janji1 = new Promise((resolve, b) => {
  if (janji) {
    resolve('Janji di tepati');
  } else {
    b('ingkar janji');
  }
})
janji1.then(berhasil => console.log('Ok: ' + berhasil)).catch(gagal => console.log('NOT OK ' + gagal));*/

/// Contoh 2 
/*
let janji = true;
const janji2 = new Promise((resolve, reject) => {
  if (janji) {
    setTimeout(() => {
      resolve('Janji di tepati setelah beberapa waktu');
    }, 5000);
  }else {
    setTimeout(() => {
      reject('Janji tidak ditepati setelah beberapa waktu');
    },2000);
  }
});

console.log('mulai');
console.log(janji2.then(response => console.log(response)).catch(response => console.log(response)));
//janji2.finally(() => console.log('selesai menunggu')).then(ditepati => console.log('Ok: ' + ditepati )).catch(ingkar => console.log('Not ok: ' + ingkar));
console.log('selesai');
*/
/// Contoh 3
// Mengambil semua data Promise menggunakan           Promise.all()
/*const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{
    judul: 'avengers',
    pemeran: 'samsudin, gusron',
    sutradara: 'lolipop',
  }])
  },5000);
})

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve([{
    daerah: 'lombok',
    suhu: 26,
    kondisi: 'panas berawan',
  }])
  },1000);
})

/// Jika kita memangggil satu" promisenya
/
//film.then(response => console.log(response));
//cuaca.then(response => console.log(response));

/// Langsung memanggil semua di dalam promise
Promise.all([film, cuaca])
//.then(response => console.log(response)) // ini arraynya bergabung // array di dalam array
.then(response => {
  const [film, cuaca] = response;
  console.log(cuaca);
  console.log(film);
});
*/






const start = new Promise(resolve => {
  setTimeout( () => {
    resolve('Program akan di mulai dalam 10 dtik')
  },2000);
});


start.then(response => console.log(response));
