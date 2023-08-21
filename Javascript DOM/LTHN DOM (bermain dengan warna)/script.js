const clickLol = document.querySelector('button');
const p = document.querySelector('p');
const warn = document.querySelector('.warna');
const lol = document.querySelector('.lol');
const p2 = document.querySelectorAll('.p2');
/// membuat warna
clickLol.onclick = function(){
  //document.body.style.backgroundColor = 'rgba(145,247,245,0.5';
  //document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
  clickLol.classList.toggle('tom-class')
}

/// membuat warna random
const tomNew = document.createElement('button');
const tomText = document.createTextNode('Warna Random');
tomNew.appendChild(tomText);
tomNew.setAttribute('type', 'button');
clickLol.after(tomNew)

tomNew.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  tomNew.style.backgroundColor = `rgb(${r},${g},${b})`
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`
});

/// Membuat warna menggunakan range
const merah = document.querySelector('input[name=Merah]');
const hijau = document.querySelector('input[name=Hijau]');
const biru = document.querySelector('input[name=Biru]');

merah.addEventListener('input', function(){
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
   p2[0].innerHTML = `rgb(${r},${g},${b})`;
});
hijau.addEventListener('input', function(){
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  p2[1].innerHTML = `rgb(${r},${g},${b})`
})
biru.addEventListener('input', function(){
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  p2[2].innerHTML = `rgb(${r},${g},${b})`

});
lol.style.color = 'rgb(225,227,206)'


