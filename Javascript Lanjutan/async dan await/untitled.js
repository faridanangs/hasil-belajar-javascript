/// tdk menggunakan async dan await
/*
const coba = new Promise ( resolve => {
  setTimeout( () => {
    resolve('Hallo,Holla');
  }, 2000);
});

//console.log(coba);
//coba.then((e) => console.log(e));
*/

/// menggunakan async dan await
/*
function cobaPromise(){
  return new Promise ( resolve => {
  setTimeout( () => {
    resolve('Hallo,Holla');
  }, 2000);
});
}

// memanggil async dan await
async function panggilPromise(){
  const coba = await cobaPromise();
  console.log(coba);
}
panggilPromise();
*/



function cobaPromise(){
  let waktu  = 5000;
    return new Promise ((resolve, reject) => {
    if (waktu < 5000){
      setTimeout( () => {
      resolve('Hallo,Holla');
      }, 2000);
    }else {
    reject('kelamaan');
  }
  });
}

// memanggil async dan await
// jika ingin menjalankan reject maka kota haris menggunakan try dan catch 
/// try untuk resolve, dan catch untuk reject
async function panggilPromise(){
  try{
    const coba = await cobaPromise();
    console.log(coba);
  }catch(err){
    console.error(err);
  }
  
}
panggilPromise();
