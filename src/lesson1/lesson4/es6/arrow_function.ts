// function myfunction() {
    //js cơ bản
// }
// const myfunction = function(){
    // nâng cao
// }

// => được gọi là arrow function
// const myfunction = () => {

// }
const sayHe = (name: String) =>{
    const result = 'hi' +name;
    console.log(result);
    return result;
}

//TODO : kiểm tra this của arrow function trong class
//  const : person = {
//      name: "chao ban dz",
//      sayhi:()=>{
//          console.log(this,this.name);
//      }
//  };
//  person.sayhi();
sayHe('chao cac ban');