//// membuat game swit lombok
let tanya = 'true'
while (tanya){
  // MEMBUAT INPUTAN USER
  let user = prompt('\tPilih; Semut, Gajah, Orang: ');
  
  
  // Buat inputan Komputer
  let komp = Math.random();
  if (komp < 0.30){
    komp = 'orang';
  }else if(komp > 0.30 && komp < 0.60){
    komp = 'gajah';
  }else{
    komp = 'semut';
  }
  
  // Membuat/Memulai Gamenya
  hasil = '';
  if (user == komp){
    hasil = 'Seri';
  }else if(user == 'orang'){
    hasil = (komp = 'semut') ? 'Menang' : 'Kalah';
  }else if(user == 'gajah'){
    hasil = (komp = 'semut') ? 'Kalah' : 'Menang';
  }else if(user == 'semut'){
    hasil = (komp = 'orang') ? 'Kalah' : 'Menang';
  }else{
    alert('Masukan Yang Benar!!');
  }
  
  alert(`Kamu memilih: ${user} & komputer memilih: ${komp}\nMaka hasilnya kamu: ${hasil}`);
  tanya = confirm('lagi? ');
}
alert('trimakasih!!!');