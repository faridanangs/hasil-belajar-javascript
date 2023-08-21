//// .concat() ==> untuk menggabungkan 2 buah array
let a = [7,6,8,8,9,7,];
let b = [2,7,6,5,5,];
let c = a.concat(b);
console.log(c);

//// .pop() ==> untuk menghapus nilai array yg trakhir
let x = [2,7,6,5,5,];
let z = x.pop();
console.log('nilai yg di pop: ' + z);

//// .push() untuk memanukan nilai ke dalam array
let j = [2,7,6,5,5,];
console.log('Sebelum di push '+j)
j.push(100000);
console.log('Setelah di push '+j)

/// .reverse() untuk membalikkan nilai
let i = [2,7,6,5,5,];
console.log('Sebelum di reverse '+i);
i.reverse();
console.log('Sesudah di reverse'+i);



