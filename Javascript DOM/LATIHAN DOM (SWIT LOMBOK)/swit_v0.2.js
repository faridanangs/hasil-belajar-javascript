function getComputer(){
  const komp = Math.random();
  if (komp < 0.30) return 'orang';
  if (komp > 0.30 && komp < 0.70) return 'gajah';
  return 'semut';
}

function hasilMain(user, komp) {
  if (user == komp) return 'Seri';
  if (user == 'gajah') return (komp == 'orang')? 'Menang' : 'Kalah';
  if (user == 'orang') return (komp == 'gajah')? 'Kalah' : 'Menang';
  if (user == 'semut') return (komp == 'orang')? 'Kalah' : 'Menang';
}

function putar(){
  const imgPut = document.querySelector('.img-computer')
  const gambar = ['orang','gajah','semut'];
  let i = 0;
  const awal = new Date().getTime();
  setInterval( function(){
  if (new Date().getTime() - awal > 1000){
    return;
  }
    
    
    imgPut.setAttribute('src', 'img/'+gambar[i++]+ '.png');
    if ( i == gambar.length ) i = 0;
    
  }, 100)
}

const pilih = document.querySelectorAll('li img');
pilih.forEach( a => {
  a.addEventListener('click', function(){
  const computer = getComputer();
  const player = a.className;
  const hasil = hasilMain(player,computer);
  putar();
  
  setTimeout( function(){
    const imgC = document.querySelector('.img-computer')
    imgC.setAttribute('src', 'img/'+ computer + '.png')
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
  }, 1000);
  });
});






/*
function putar(){
  const imgCompu = document.querySelector('.img-computer');
  const gambar = ['orang','gajah','semut']
  let i = 0;
  const awal = new Date().getTime();
  setInterval(function(){
    if (new Date().getTime() - awal > 1000){
      
      return;
    }
    imgCompu.setAttribute('src','img/'+ gambar[i++]+'.png');
    if (i == gambar.length) i = 0;
    
    
    
    
  },50);

}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(a => {
  a.addEventListener('click', function(){
    const getComp = getComputer();
    const getUser = a.className;
    const hasil = hasilMain(getUser,getComp);
    putar();
    
    setTimeout( function (){
    const imgComp = document.querySelector('.img-computer');
    imgComp.setAttribute('src', 'img/'+getComp+'.png');
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
    },1000);
 
        
  });
});


const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click',function(){
  const getComp = getComputer();
  const getUser = pGajah.className;
  const hasil = hasilMain(getUser,getComp);
  
  const imgComp = document.querySelector('.img-computer');
  imgComp.setAttribute('src', 'img/'+getComp+'.png');
  
  const info = document.querySelector('.info');
  info.innerHTML = hasil;

});
const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click',function(){
  const getComp = getComputer();
  const getUser = pOrang.className;
  const hasil = hasilMain(getUser,getComp);
  
  const imgComp = document.querySelector('.img-computer');
  imgComp.setAttribute('src', 'img/'+getComp+'.png');
  
  const info = document.querySelector('.info');
  info.innerHTML = hasil;

});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click',function(){
  const getComp = getComputer();
  const getUser = pSemut.className;
  const hasil = hasilMain(getUser,getComp);
  
  const imgComp = document.querySelector('.img-computer');
  imgComp.setAttribute('src', 'img/'+getComp+'.png');
  
  const info = document.querySelector('.info');
  info.innerHTML = hasil;

});
*/