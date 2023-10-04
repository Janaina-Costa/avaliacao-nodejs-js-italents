const {User} = require('./user')

class Employee extends User {
  constructor(name, age, email, cpf, address, phone,  profession, workload, monthlySalary, foulsCounted, overtimeWorked
    ){
    super(
      name,
      age,
      email,
      cpf,
      address,
      phone,
    )
    this.profession = profession,
    this.monthlySalary = monthlySalary,
    this.foulsCounted = foulsCounted,
    this.overtimeWorked = overtimeWorked,
    this.workload = workload
    this.day = 30
  }

  calculateDiscount = function(){
    const dailySalary = this.monthlySalary / this.day;
    const diaryDiscountCalc = dailySalary * this.foulsCounted;
    return diaryDiscountCalc
  }

  calculateOvertime = function(){
    const dailySalary = this.monthlySalary / this.day;   
    const salaryHour = dailySalary/this.workload;
    const overtimeCalculation = salaryHour * this.overtimeWorked

    return overtimeCalculation
  }

  calculateRemuneration = function (){
    const diaryDiscountCalc = this.calculateDiscount()
    const overtimeCalculation = this.calculateOvertime()  
    const totalRemuneration = this.monthlySalary - diaryDiscountCalc + overtimeCalculation

    return totalRemuneration
  }

  userDataToHolerite= function(){    
    return{
      nome:this.name, 
      email:this.email,
      cpf:this.cpf,
      cargo: this.profession
    }
  }
}

module.exports = {Employee}