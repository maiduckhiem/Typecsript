abstract class Department{
    static fiscalYear = 2020;
    protected employmees : string[] = [];
    constructor (protected readonly id: string , public name: string){

    }
    static createEmplymees(name:string ){
        return{name:name};
    }
    abstract describe(this: Department): void
    addEmployee(employee: string){
        this.employmees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employmees.length);
        console.log(this.employmees);
    }
} 
class ITDepartment extends Department{
    admins:string[];
    constructor(id: string,admins:string[]){
        super(id,'IT');
        this.admins = admins;
    }
    describe(){
        console.log('chao ban'+ this.id);
    }
}
const employee1 = Department.createEmplymees('max');
console.log(employee1,Department.fiscalYear);
const IT  = new ITDepartment('d1', ['max']);
IT.addEmployee('max');
IT.addEmployee('manu')