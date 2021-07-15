// union type: number | string

const conbine = (a: number | string | boolean, b: number | string | boolean) => {
    if (typeof a == 'number' && typeof b == 'number'){
        return (+a) + (+b);
    }else if (typeof a == 'string' && typeof b == 'string'){
        return a.toString()+b.toString();
    }else{
        return a && b;
    }
}
console.log(conbine(1,2));
console.log(conbine('1','2'));
console.log(conbine('fpt','polytechnic'));
console.log(conbine(true,false));

