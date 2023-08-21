/*
/// Tag tamplete
// tag template dapat di panggil pada function

// const ok = tag `String literal`
// contoh penggunaan

let nama = 'farud anang s';
let kelas = 11;
let jurusan = 'mipa';

/// tanpa menggunakan tag template
const print = `Hallo nama saya ${nama} saya kelas ${kelas} saya dari jurusan ${jurusan}`


/// menggunakan function (reduce)
function coba(str, ...values){
  return str.reduce((stringAll,value,index) => `${stringAll}${value}${values[index]}`,)
}
/// menggunakan function (forEach)

function coba(str, ...values){
  let reslut = '';
  str.forEach((stringAll,index) => {
    reslut += `${stringAll}${values[index] || ''}`
  });
  return reslut;
}

/// Menggunakan tag template 
const print = coba `Hallo nama saya ${nama} saya kelas ${kelas} saya dari jurusan ${jurusan}`

console.log(print)

*/

/*
const nama = 'farid anang s';
const kelas = 11;
const jurusan = 'mipa';

function tag (stringAll, ...values){
  let kalimat = '';
  stringAll.forEach((str, index) => {
    kalimat += `${str}${values [index] || ''}`
  });
  return kalimat;
}


function tag(stringAll, ...values) {
 return stringAll.reduce((kalimat, nilai, index) =>
 {return`${kalimat}${nilai}${values[index]|| ''}`}
   )
}

const data = tag `Hallo nama saya ${nama} saya kelas ${kelas} saya dari jurusan ${jurusan}`
console.log(data);

*/

/// contoh penggunaan tag template
let nama = 'farid anang s';
let kelas = 11;
let absen = 9;


function tag(stringAll, ...values){
  let results = '';
   stringAll.forEach((str, i) => {
    results += `${str}<span class='test'>${values[i] || ''}</span>`;
  });
  return results;
}
const body = document.querySelector('body')
const panggil = tag `Hallo nama saya ${nama} saya kelas ${kelas} no absen ${absen}`;
body.innerHTML = panggil











