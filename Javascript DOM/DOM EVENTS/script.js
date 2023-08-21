/*
//////    const.onclick = function;
// di gunakan untuk menjalankan value ketika di klik

/// ini Secara events headler
const judul = document.getElementById('judul');
const p = document.querySelector('.p2');
function ubahWarna(){
  judul.style.backgroundColor = 'lightblue';
  p.style.backgroundColor = 'lightgreen';
}
judul.onclick = ubahWarna;
p.onclick = ubahWarna;
*/

/*
////   const.addEventListener('click', function() {} )
// untuk membuat events secara mudah dan kompleks
const ran = document.querySelector('section#b p')
const sectionB = document.querySelector('section#b')


ran.addEventListener('click', function () {
  alert('Data berhasil di tambah');
  const pNew = document.createElement('p');
  const pTextNew = document.createTextNode('Paragraf Baru');
  pNew.prepend(pTextNew);
  sectionB.prepend(pNew);
});
*/

// Membuat Iklan Sederhana
const sectionA = document.querySelector('section#a')

const iklan = document.getElementsByClassName('iklan')[0];
iklan.addEventListener('click', function(){
  let textNew = prompt('Buat Ekemen Baru (y/n)? ');
  if (textNew === 'y' || 'Y'){
    const elmnNew = document.createElement('p');
    const tNew = document.createTextNode('Paragraf Barru');
    elmnNew.prepend(tNew);
    sectionA.prepend(elmnNew);
    }
   
  else{
    alert('Masukan Kata yes');
  }
})