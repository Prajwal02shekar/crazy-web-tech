//! OOP's
//? Object Oriented Programming Language


//? Class and Objects

// let student={
//     stdName:"Ajith",
//     stdAddress:"Mysore",

//     display(){
//         console.log(this.stdName)
//         console.log(this.stdAddress)
//     }
// }
// console.log(student)
// student.display()

//? Class

// class Employee {
//     // DataMembers
//     // empName;
//     // empAge;
//     // empAddress;

//     //Methods
//     // display(){

//     // }
// }

//! Example for class and objects

// class Employee{
//     stdName="Pavan";
//     stdAddress="T Narsipura";

//     display(){
//         console.log(this.stdName)
//         console.log(this.stdAddress)
//     }
// }

// let e1=new Employee()
// console.log(e1)
// console.log(e1.stdName)
// console.log(e1.stdAddress)
// e1.display()

//? constructor

// class Car{
//     constructor(){
//         console.log("Iam a constructor")
//     }
// }
// let c1=new Car();
// console.log(c1)

//? Initializing a values
// class Student{
//     constructor(){
//         console.log("Iam a constructor");
//         this.stdName="Ajith";
//         this.stdAge="23"
//     }
// }
// let s1=new Student();
// console.log(s1)

//? constructor with parameters
// class Car{
//     constructor(brand,varient){
//         console.log("Iam a constructor");
//         this.brand=brand;
//         this.varient=varient
//     }
// }

// let c1=new Car("polo","diseal");
// console.log(c1)

// class Student{
//     stdName="Ajith";
//     stdAge=23;

//     display(){
//         console.log(`My name is ${this.stdName}`)
//         console.log(`My age is ${this.stdAge}`)
//     }
// }
// let s1=new Student();
// s1.display()


// class Employee{
//     empName;
//     empAge;
//     empDesignation;

//     constructor(empName,empAge,empDesignation){
//         console.log("This is constructor");
//         this.empName=empName
//         this.empAge=empAge
//         this.empDesignation=empDesignation
//     }
//     displayDetails(){
//         console.log(this.empName)
//         console.log(this.empAge)
//         console.log(this.empDesignation)
//     }
// }

// let emp1=new Employee("Sakshi",23,"Developer")
// console.log(emp1)



//! OOP's Pillors

//? Encapsulation
//? Abstraction
//? Inheritance
//? Polymorphism


//? Encapsulation


// class ATM {
//     #bankBalance = 0;

//     getBalanace() {
//         return this.#bankBalance
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             return this.#bankBalance = this.#bankBalance + amount
//         }
//     }
//     withdraw(amount) {
//         if (amount <= this.#bankBalance) {
//             return this.#bankBalance = this.#bankBalance - amount
//         } else {
//             console.log("Insuffient Balance")
//         }
//     }
// }

// let b1 = new ATM();
// console.log(b1.getBalanace())

// b1.deposit(500)
// console.log(b1.getBalanace())


// b1.withdraw(600)
// console.log(b1.getBalanace())


//? Abstraction

// class ATM{
//     #checkBalanace(){
//         console.log("Checking Balance.....!")
//     }

//     withdraw(amount){
//         this.#checkBalanace();
//         console.log(`${amount} withdrawan`)
//     }
// }

// let b1=new ATM();
// b1.withdraw(500)


//? Inheritance
// class Company{
//     admin(){
//         console.log("Admin Logged in")
//     }
// }
// class Employeee extends Company{
//     emp(){
//         console.log("Employeee Logged In")
//     }
// }

// let e1 =new Employeee();
// e1.admin()
// e1.emp()


//? Polymorphism

// class Payment {
//     pay(amount) {
//         console.log(`${amount} paid through cash`)
//     }
// }
// class UPI extends Payment {
//     pay(amount) {
//         console.log(`${amount} paid Through UPI`)
//     }
// }
// class Card extends Payment {
//     pay(amount) {
//         console.log(`${amount} paid through credit card`)
//     }
// }

// let p1 = new Payment();
// p1.pay(100)

// let u1 = new UPI();
// u1.pay(500)

// let c1 = new Card();
// c1.pay(600)



//? CRUD Opertions Using OOP's

class Student {
    constructor() {
        this.students = [];
    }

    //? ADD Operation
    addStudent(id, name, age, gender, address) {
        let std = {
            id: id,
            name: name,
            age: age,
            gender: gender,
            address: address
        }

        this.students.push(std)
        console.log("Student Added Successfully")
    }

    //? READ Operation
    getStudents() {
        //! Printing All Students
        console.log(this.students)

        //! Printing Individual Students
        this.students.forEach((std) => {
            console.log(std)
        })
    }

    //? UPDATE Operation
    updateStudent(id, name, age, gender, address) {
        let student = this.students.find((std) => std.id === id)

        if (student) {
            student.name = name,
                student.age = age,
                student.gender = gender
            student.address = address
            console.log("Student Data Updated Successfully")
        } else {

            console.log("Student Data Not Found")
        }
    }
    //? DELETE Operation

    deleteStudent(id) {
        let index = this.students.findIndex((std) => std.id === id)
        console.log(index, "INDEX")


        if (index != -1) {
            this.students.splice(index, 1)
            console.log("Student Deleted Successfully")
        } else {
            console.log("Student Data Not Found")
        }
    }
}


let s1 = new Student();

//! Adding a Student
s1.addStudent(101, "Pavan", 22, "Male", "Mysore")
s1.addStudent(102, "Siri", 25, "Female", "Mysore")
s1.addStudent(103, "Sakshi", 25, "Male", "Mysore")

//! Displaying a Student
s1.getStudents()

//! Updating a Data
s1.updateStudent(103, "Pavan Kumar", 25, "Male", "T Narsipuru")


//! Displaying a Student
s1.getStudents()

//! Deleting a Student
s1.deleteStudent(105)

//! Displaying a Student
s1.getStudents()




//! Question 1
// Create an EmployeeCRUD class to manage employee records.
// Each employee should have(id,name,age,designation,salary)
// Create the following methods:
// addEmployee() → Add employee
// getEmployees() → Display all employees
// updateEmployee() → Update employee using ID
// deleteEmployee() → Delete employee using ID

//! Question 2
// Create a BookCRUD class to manage library books.
// Each book should have:(id,bookName,author,price,category)
// Create the following methods:
// addBook()
// getBooks()
// updateBook()
// deleteBook()