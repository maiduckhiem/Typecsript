class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

class Emloyee extends Person {
  private salary: number;

  public Emloyee(id: number, name: string, salary: number) {
    super(id,n)
    this.name = name;
    this.salary = salary;
  }
  public getSalary() {
    return this.salary;
  }
  public setSalary(salary: number) {
    this.salary = salary;
  }
  public toString(){
      return `${this.getId()} - ${this.name} - ${this.salary}`
  }
}

let e: Emloyee = new Emloyee(1, "Chao ban" , 0);
// let p: Person = new Person("choaDDD");
// console.log(p.name);
// p.setName("chaonn");
// console.log(p.getName());


// public được phép truy xuất tất cả mọi nơi
// protected chỉ được truy xuất trong class đó hoặc trong các lớp con
// private chỉ được truy xuất trong class đó 
