const konten = document.querySelector('.container');
const gambarUtama = konten.querySelector('.besar')

konten.addEventListener('click', function(e){
  if (e.target.className == 'kotak'){
    gambarUtama.src = e.target.src;
    gambarUtama.classList.add('fuid')
    setTimeout(function(){
      gambarUtama.classList.remove('fuid');
    },10000);
  }
});






