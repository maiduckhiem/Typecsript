"use strict";
// type myaliastype = type1 | type2 | type 3
var conbine2 = function (a, b, typeAs) {
    if ((typeof a == 'number' && typeof b == 'number') || typeAs == 'as-number') {
        return (+a) + (+b);
    }
    else if ((typeof a == 'string' && typeof b == 'string') || typeAs == 'as-string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(conbine2(1, 2, 'as-number'));
console.log(conbine2('1', '2', ' as-number'));
console.log(conbine2('fpt', 'polytechnic', 'as-string'));
console.log(conbine2(true, false, 'as-string'));
/*
    type myalias  = string | boolean ....
*/ 
