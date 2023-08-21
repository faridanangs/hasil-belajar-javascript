/*
//# 1.document.getElementById(); to mengambil element html
//const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.innerHTML = "Lorem Ispum";
judul.style.backgroundColor = '#ccc';
judul.style.textAlign = "center";

//# 2.document.getElementsByTagName(); to get HTMLcolections
//const p = document.getElementsByTagName('p');
//// Secara maunual
p[1].style.backgroundColor = "#aac";
p[2].style.backgroundColor = "#bac";
p[3].style.backgroundColor = "#fac";
p[0].style.backgroundColor = "#dac";

//// menggunakan looping

for (i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "#dac";
  p[i].style.textAlign = 'center';
  p[i].style.fontSize = '20px';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
h1.innerHTML = 'Hello World';

const link = document.getElementsByTagName('a')[0];
link.style.textAlign = 'center';
link.innerHTML = 'link nbnfffaeh lol';
link.style.textDecoration = 'none';
link.style.color = 'grey';

//#3.document.getElementsByClassName();to get HTMLcolections
// const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "lorem ispum dolor is amet takiya bnteng";
p1.style.color = '#acf';

*/

/*

//# 4.document.querySelector(); to get element
const p4 = document.querySelector(" #b p");
p4.style.color = "green";
p4.style.backgroundColor = 'rgba(153,230,236,.3)';
p4.style.border = '4px solid #bab';
p4.style.borderRadius = '4px';
p4.style.boxShadow = '.6px .6px 3px black'
p4.style.textAlign = 'center'
p4.style.textTransform = 'capitalize'

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.backgroundColor = 'rgba(148,199,245,.4)'
li3.style.border = '2px solid #bab';
li3.style.borderRadius = '4px';
li3.style.boxShadow = '.6px .6px 3px black';
li3.style.textAlign = 'center';

//const a = document.querySelector('section#a a');
// Yang pertama ketemu yang akan di eksekusi/di jalanankan
const a = document.querySelector('a');
a.style.textDecoration = 'none';

// Jika ingin di jalanankan yang kita mau, gunakan selector yang lebih pleksibel contoh
const a2 = document.querySelector('section#b a')
a2.style.textDecoration = 'none';
a2.style.backgroundColor = 'rgba(240,151,151.3)';

//# 4. document.querySelectorAll(); to get nodeList
const p = document.querySelectorAll('p');
for (i = 0; i < p.length; i++){
  p[i].style.backgroundColor = ' rgba(148,180,245,.4)' ;
}

*/

/* 
//# 5.Menggunakan document root
// KITA AMBIL DULU PEMBUNGKUS DARI ELEMEN YANG MAU KITA PANGGIL,  KEMUDIAN KITA BUAT PARIABEL BARU DAN KITA AMBIL VARIABEL YANG KITA GUNAKAN UNTUK MENGAMBIL PEMBUNGKUS DARI VARIABEL YANG MAU KITA PANGGIL CONTOH SEPERTI DI BAWAH.
const section = document.querySelector('#b');
const p = section.querySelector('p');
p.style.backgroundColor = 'rgba(247,247,174,.8)';

*/