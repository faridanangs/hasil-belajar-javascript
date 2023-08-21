/// Cara penggunaan higr order function
// function di dalam function

//> action adalah callback dari higr order function
// contoh 1
/*
function random (n, action){
  for (i = 0; i < n; ++i){
    action(i)
  }
}
random(10,alert);
*/
// contoh 2
// function random adalah higr order function
/*
function random(n){
  return function (){ // return value (callback)
    console.log(n)
  }
}
let a = random(10);
a();
*/
// contoh 3
/// Penggunaan higr order function
/*
random.addEventListener('click', function(){
  random.innerHTML = 'ini adalah callback'
}
*/

