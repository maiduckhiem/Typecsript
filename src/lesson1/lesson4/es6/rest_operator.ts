//rest operator
//dùng cho tham số của một hàm vị trí và công dụng khác nhau
const tong  = (...numbers:number[] ) => {
    let sum: number=0;
    let count: number=0;
    numbers.forEach(Element  => {
        sum += Element;
        count++;
    })
    return sum / count;
}
console.log(tong(1,2,4,5,6,7,8,9));