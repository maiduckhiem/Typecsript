const sayHello = () =>{
    console.log('hello ban')
}

let sum: (a:number , b:number) => number; //kiểu dữ liệu của function

sum = (a:number , b:number) =>{ // arr function cua cs6
    return a + b;
}
const process = (cd:(a:number , b:number)=>number)=>{
    const x = 1;
    const y = 3;

    const result = cd(x,y);
    console.log(result)
}

process
process(sum);

