type ten_gl = string | 0 | 1;
// let xulythongtin: Function;
let xulythongtin: (a: ten_gl) => void
xulythongtin = (info: ten_gl): void => {
    if(typeof info == 'string'){
        console.log('ho ten'+ info);
    }else if (info == 1){
        console.log('gioi tinh : nam');
    }else{
        console.log('gioi tinh : nu');
    }
}
 let printinfo: Function = (a: string): void =>{
     console.log(a); 
 }

// const main = (callback : Function)=> {
//     callback(1);
// }
const main = (callback : (a: ten_gl)=> void) =>{
    callback(1);
}

main(xulythongtin);


/*
giải thích : callback : (a: ten_gl) => void
- tham số callback truyền vào phải đúng theo định dạng như sau :
- số 1 tham số truyền vào là a ; a có kiểu ten_gl (alias)
*/ 