class Person
{
    name: string;
    age: number;
    

    constructor(name: string,age: number)
    {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person
{
    salary: number;

    constructor(name: string,age: number,salary:number)
    {
        super(name,age);
        this.salary = salary;
    }

    Print() : string
    {
        return this.name +" "+ this.age + " " + this.salary;
    }
}

class PrintEmployee
{
    PrintEmployyes(employeeList : Array<Employee>) : void
    {
        for(let i = 0;i < employeeList.length; ++i)
        {
            console.log(employeeList[i].Print());
        }
    }
}

let employeeList: Array<Employee> = 
[
    new Employee("John",33,2222),
    new Employee("Julia",17,3333),
    new Employee("John",33,2222),
    new Employee("John",33,2222),
];

new PrintEmployee().PrintEmployyes(employeeList);





