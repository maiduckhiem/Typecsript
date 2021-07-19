/*
? operrator : đánh dấu 1 thuộc tính là optional (không bắt buộc)
nếu class thực thi interface mà không định nghĩa lại thuộc tính 
*/

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
class MyPerson implements Greetable{
  public greet(name:string):void{
    console.log('hello' + name)
  }
}
let use : Greetable;
use = new MyPerson();
use.greet('chao ban');
console.log(use)