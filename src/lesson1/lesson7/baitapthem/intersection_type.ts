type Combinable = string | number;
type Numeric = number | boolean;


//Intersection type 
type Universal = Combinable & number ;
// let a1: Universal = 'chao b'; // string
// let b1: Universal = true;
let c1: Universal = 23;

type sinhvien = {
    ten: string;
    masv: string;
}
type nhanvien ={
    ten : string;
    ngaybadau : Date;
}
type thuctapsinh = sinhvien & nhanvien;

/*intersection type > | < usion type*/
let x : thuctapsinh = {
    ten: 'nguyen van a',
    masv: 'ph2',
    ngaybadau: new Date()
}

