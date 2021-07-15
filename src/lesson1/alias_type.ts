// union type: number | string
type NumberStringBoolean = number | string | boolean;
// type myaliastype = type1 | type2 | type 3
const conbine1 = (a: NumberStringBoolean, b: NumberStringBoolean): NumberStringBoolean => {
    if (typeof a == 'number' && typeof b == 'number'){
        return (+a) + (+b);
    }else if (typeof a == 'string' && typeof b == 'string'){
        return a.toString()+b.toString();
    }else{
        return a && b;
    }
}
console.log(conbine1(1,2));
console.log(conbine1('1','2'));
console.log(conbine1('fpt','polytechnic'));
console.log(conbine1(true,false));

/*
    type myalias  = string | boolean ....
*/ 