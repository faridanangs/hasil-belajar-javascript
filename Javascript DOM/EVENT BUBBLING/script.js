/// preventDefault(); => Untuk mencegah aksi Default/ mengembalikan nilai pada link

// stopPropagation(); => untuk mencegah pemanggilan element parentnya supaya tidak ikut di panggil(event bubbling)

//// CARA INI TIDAK EFEKTIF KARNA KETIKA KITA BUAT CARD BARU DI CONSOLE MAKA DIA BELUM DI PANGGIL DI JAVASCRIPT KARNA KITA MEMBUAT CARDMYA SETELAH DI PANGGIL
/*
const close = document.querySelectorAll('.close');
close.forEach(a => {
  a.addEventListener('click', e => {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
    e.stopPropagation();
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(a => {
  a.addEventListener('click', e => {
    alert('heey lol');
  });
});

*/
/// DENGAN CARA MEMANGGIL PARENTNYA 
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
  if (e.target.className == 'close'){
    e.target.parentElement.style.display = 'none';
    
  }
  if (e.target.className != 'close'){
    alert('Salah Pencet');
  }
});