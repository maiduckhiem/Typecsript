const person = {
    name: "khiem body dep",
    age: 20,
}
const employee = {
    ...person,
    // name: 'khiem dz',
    // age: 20,
    salary: '2000 vnd'
    //cú pháp spread operator nó lấy tất cả các thuộc tính của cái oj đưa vào trong
}
console.log(employee);


const diem = [1,2,3,4,5,6,7];
const diemAll = [
    ...diem,
    2,4,6];

console.log(diemAll);
/*spread operator có thể dùng trên object & arr.
sử dụng để lấy tất cả các thuộc tính {object} / phần tử {array}*/