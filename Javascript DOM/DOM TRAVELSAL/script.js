/// TANPA MENGGUNAKAN DOM TRAVELSAL
/*
const close = document.querySelector('div.card .close');
const card = document.querySelector('div.card');
close.addEventListener('click', function(){
  card.style.display = 'none';
});
*/



////## MENGGUNAKAN DOM TRAVELSAL
/*
///close[i].parentElement.style.display = 'none';
///parentElement => ( ADALAH DOM TRAVELSAL)
/// bisa juga kita use e.target TANPA menggunakan close[i]
// dgan cara kita taruh parameter di function events

const close = document.querySelectorAll('.close');

for (let i = 0; i < close.length; i++){
  close[i].addEventListener('click', function(e){
    //close[i].parentElement.style.display = 'none';
    e.target.parentElement.style.display = 'none';
  });
}
*/



/*

//// KITA JUGA BISA MENGGUNAKAN FOREACH.
// forEach berjalan ketika nilainya list/array/nodeList.

/// INI ERROR KARNA KITA TIDAK MENARUH PARAMETER DI FUNGSI forEach

close.forEach(function(){
  close.addEventListener('click', function(e){
      e.target.parentElement.style.display = 'none';
  });
});
*/




/*
///### previousElementSibling (untuk mencari elemen sodaranya di atasnya)
const nama = document.querySelector('.nama')
console.log(nama.previousElementSibling);


///### nextElementSibling (untuk mencari elemen sodaranya di bawahnya)
const nama = document.querySelector('.nama')
console.log(nama.nextElementSibling);

*/


