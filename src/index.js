const {User} = require('./user')
const {Employee} = require('./employee')


const user = new User('Jupira',42,'jupira@gmail.com', '999.999.999-00', '[{Rua:Est. do Guerengue, nº1, complemento: bl2 apt 501, Bairro:Taquara, Cidade }]', '[{Cel1:21 9988888888, Cel2:21 6888888888}]' )

const holerite = new Employee()
holerite.name = user.name
holerite.cpf= user.cpf
holerite.email = user.email
holerite.profession = 'Médico Ortopedista'
holerite.monthlySalary = 7000
holerite.workload = 8
holerite.overtimeWorked = 6
holerite.foulsCounted = 10
holerite.calculateRemuneration()

const holeriteExtract = holerite.showHolerite()

const employee1 = holerite.userDataToHolerite()

console.log({
  Funcionario:employee1,
  Holerite:holeriteExtract
});
