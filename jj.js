class Employee{
    constructor(name , salary){
        this.name = name;
        this.salary = salary;
    }

    DisplayPayslip() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
    }

    CalculateNetPay(net){
        let salary = this.salary;
if (salary <= 250000){
    console.log("Netpay is: "  + salary  )
}else if (salary  <=400000){
    const excess = salary - 250000;
    const tax = excess * 0.15;
    const NET = salary - tax ;
 console.log("Netpay is: "  + NET  )
} else if (salary  <=800000){
    const excess = salary - 400000;
    const tax = excess * 0.20;
    const NET = salary - tax ;
    console.log("Netpay is: "  + NET  )
} else if (salary  <=2000000){
    const excess = salary - 800000;
    const tax = excess * 0.25;
    const NET = salary - tax ;
    console.log("Netpay is: "  + NET  )
} else if (salary  <=8000000){
    const excess = salary - 2000000;
    const tax = excess * 0.30;
    const NET = salary - tax ;
    console.log("Netpay is: "  + NET  )
} else{
    const excess = salary - 8000000;
    const tax = excess * 0.30;
    const NET = salary - tax ;
    console.log("Netpay is: "  + NET )
}
    }

}
const employee1 = new Employee ("Ralph", 100000 );
employee1.DisplayPayslip();
const netpay = employee1.CalculateNetPay();


const employee2 = new Employee ("BOSS", 400000 );
employee2.DisplayPayslip();
const netpay2 = employee2.CalculateNetPay();


const employee3 = new Employee ("CEO", 5000000 );
employee2.DisplayPayslip();
const netpay3 = employee3.CalculateNetPay();




