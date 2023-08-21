
// Loping menggunakan String literal use array
/*
const data = [
  {
    nama:'farud anang s',
    kelas:11,
    jurusan: 'ipa',
  },
  {
    nama:'diana milda',
    kelas:11,
    jurusan: 'ipa',
  },
  {
    nama:'holid',
    kelas:11,
    jurusan: 'ipa',
  }
  ];
const el =  `<div><h1>${data.map(a =>
`<ul>
<li>${a.nama}</li>
<li>${a.kelas}</li>
<li>${a.jurusan}</li>
</ul>`).join('')}</h1></div>`
*/

// Pengkondisian menggunakan string literal
/*
const data = {
    nama: 'farid anang s',
    musik: 'rege',
    feat: 'fucturing'
  }
const el = `
<div>
<ul>
<li>${data.nama}</li>
<li>${data.musik} ${data.feat ? `(feat. ${data.feat}` : ''}
</ul>
</div>`
*/

// string literal bersarang

const data = {
  nama: 'Farid anang s',
  jurusan: 'pemrograman web',
  semester: '5',
  mapel:['fisika','kimia','agama','mtk'],
}

function mapel(a){
  return `<ul>
  ${a.map(z => `<li>${z}</li>`).join('')}
  </ul>
  
  `
}


let el = `<div>
<h2>nama: ${data.nama}</h2>
<h3>jurusan: ${data.jurusan}</h3>
<h4>semester: ${data.semester}</h4>
mapel: ${mapel(data.mapel)}
</div>
`



document.body.innerHTML = el;
