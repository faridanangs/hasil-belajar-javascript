/// preventDefault => Untuk mencegah aksi Default


const close = document.querySelectorAll('.close');
close.forEach(a => {
  a.addEventListener('click', e => {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  });
});