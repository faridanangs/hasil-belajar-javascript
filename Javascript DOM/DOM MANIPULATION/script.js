/// MANIPULATION LIST
/*
//# innerHTML -> UNTUK MENGGANTI,MENGHAPUS,MEMBUAT,MENGUBAH NILAI DARI SEBUAH ELEMENT

const idlol = document.querySelector('section#b p');
idlol.innerHTML = 'Hello P';

// menghapus elemen di dalam id b dan menambah kata di dalam paragraf 
const apus = document.querySelector('section#b');
apus.innerHTML = 'loldhsjsnsn';

// membuat elemen baru menggunakan innerHTML
const ubah = document.querySelector('section#b');
ubah.innerHTML = `<div><p>Hello World</p></div>`;
ubah.style.width = 'auto';


//# +  setAttribute('atribute', 'value'); *make atribut mew
const make = document.querySelector('#judul');
make.setAttribute('id', 'hello');

//# +  getAttribute('atribute'); show atribut
make.getAttribute('judul');


/////     ( classList ) HUSUS UNTUK CLASS SAJA.   //////

//////////# classList.add('nama class');
// => untuk menambah class

//////////# classList.remove('nama class');
// => untuk menghapus class

//////////# classList.items(index class);
// => untuk melihat nama class index ke n

//////////# classList.toggle('nama class');
// => jika ada di HAPUS, jika tidak ada DITAMBAH

//////////# classList.contains('nama class');
// => mencari apakah ada nama kelas class nama

//////////# classList.replace('class lama', 'class baru');
// => mengganti nama kelas yang lama dgan nama kelas baru;

*/
/*
/// MANIPULATION NODE

//# 1. document.createElement('nama element');
// => untuk membuat element baru
const elementBaru = document.createElement('p');
const liBaru = document.createElement('li');

//# 2. document.createTextNode('masukan textnya');
// => di gunakan untuk membuat textnya
const textBaru = document.createTextNode('iniParagrafBaru');
const textLi = document.createTextNode('option baru');
// Bunga = textnya, Pot = elemennya
//# 3. pot.appendChild(bunga);
//=> di gunakan untuk menggabungkan elemen dan text
elementBaru.appendChild(textBaru);
liBaru.appendChild(textLi);
// kita panggil tempat kita akan menaruh elemen nya
const sectionA = document.getElementById('a');
sectionA.appendChild(elementBaru);


// a = element yang mau di tambah, b = sebelum elemen apa
//# 3. ortu.insertBefore(a, b);
// Kita Cari parentnya
const ul = document.querySelector('section#b ul');
// tempat kita masuk elemennya
const li3 = ul.querySelector('li:nth-child(1)');
ul.insertBefore(liBaru,li3)

//# 4. ortuNode.removeChild(element);
//=> di gunakan untuk menghapus element
const link = sectionA.querySelector('a');
sectionA.removeChild(link)

// a = pengubah, b = yang di ubah
//# 5. ortu.replaceChild(a,b);
//=> di gunakan untuk mengubah element

const sectionB = document.getElementById('b')
const ubhP = sectionB.querySelector('p');

const h2Elmnt = document.createElement('h1');
const h2Text = document.createTextNode('Judul Baru');

h2Elmnt.appendChild(h2Text);

sectionB.replaceChild(h2Elmnt, ubhP);

*/


// Tess MANIPULATION NODE

const sectionA = document.getElementById('a');
const sectionB = document.getElementById('b');

const pBaru = document.createElement('p');
const pBaru2 = document.createElement('p');
const Baru = document.createElement('p');
const textBaru = document.createTextNode('paragraf Baru');
const Patas = document.createTextNode('paragraf atas');
const Pbawah = document.createTextNode('paragraf bawah');

pBaru.append(Patas);
pBaru2.append(Pbawah);
Baru.append(textBaru);

sectionA.prepend(pBaru);
sectionA.append(pBaru2);

pBaru2.remove();


pBaru.replaceWith(Baru)