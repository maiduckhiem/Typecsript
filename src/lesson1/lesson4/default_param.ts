// param ? đây là cú pháp optional parameter chuyền hoặc không chuyền 
let incremen: (numb: number, base?: number) => number;

//default & optional parameter
incremen = (numb: number, base: number = 1) => {
  return numb + base;
};

let num = 5;
let base = 1;

console.log(incremen(num));
