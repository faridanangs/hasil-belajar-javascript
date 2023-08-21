const iklan = document.querySelector('.iklan')
const body = document.querySelector('body');
const temak = document.querySelector('.konten p')

const tombol = document.createElement('button');
const text = document.createTextNode('gelap');
tombol.append(text);
body.append(tombol);

tombol.style.position = 'fixed';
tombol.style.top = '0';
tombol.style.right = '0';


tombol.addEventListener('click', function(e){
  body.classList.toggle('active-body');
  
});

temak.innerHTML = 'loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident accusamus aspernatur officiis consectetur incidunt error excepturi, harum eaque, eligendi quos nemo commodi repudiandae asperiores dolorem vitae autem eius, tempora animi adipisci iusto nam mollitia, sed. Voluptatum sed nulla quia dolorem porro doloribus totam quod ea vitae natus impedit alias voluptates eligendi nisi quam, deleniti voluptate iste ut similique veritatis molestiae blanditiis beatae debitis facilis. Earum deleniti libero ipsum, laboriosam ad. Veniam recusandae, repellat expedita doloribus soluta sequi eveniet rerum, cupiditate quae a. Voluptatem laudantium praesentium, ex quasi optio? Possimus ab suscipit sit voluptas, adipisci vitae. Assumenda neque ipsam ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident accusamus aspernatur officiis consectetur incidunt error excepturi, harum eaque, eligendi quos nemo commodi repudiandae asperiores dolorem vitae autem eius, tempora animi adipisci iusto nam mollitia, sed. Voluptatum sed nulla quia dolorem porro doloribus totam quod ea vitae natus impedit alias voluptates eligendi nisi quam, deleniti voluptate iste ut similique veritatis molestiae blanditiis beatae debitis facilis. Earum deleniti libero ipsum, laboriosam ad. Veniam recusandae, repellat expedita doloribus soluta sequi eveniet rerum, cupiditate quae a. Voluptatem laudantium praesentium, ex quasi optio? Possimus ab suscipit sit voluptas, adipisci vitae. Assumenda neque ipsam ducimus. Lorem ipsum dolor sit amet, consectetur'

iklan.addEventListener('click', function(e){
  if ( e.target.className == 'close'){
    e.target.parentElement.style.display = 'none';
    e.stopPropagation();
    e.preventDefault();
    return;
  }
  if ( e.target.className != 'close'){
    alert('hallo syg');
  }
 
});
// backgroundColor