import {
    addSalary,
    AddSalaryActionType, DivSalary,
    divSalary,
    fallSalary,
    FallSalaryActionType,
    multSalary, MultSalaryActionType,
    salaryReducer
} from "./Tasks";


test('addSalary', ()=>{
    //1. тестовые данные
    const salary:number = 700
    const bonus: number = 250
    //2. Выполнение тестируемого кода
    const result = addSalary(salary, bonus)
    //3. Проверка ожидаемого результата
    expect(result).toBe(950)
})

test('fallSalary', ()=>{
    //1. тестовые данные
    const salary:number = 950
    const coefficient: number = 50
    //2. Выполнение тестируемого кода
    const result = fallSalary(salary, coefficient)
    //3. Проверка ожидаемого результата
    expect(result).toBe(900)
})

test('multSalary', ()=>{
    //1. тестовые данные
    const salary:number = 1000
    const coefficient: number = 1.2
    //2. Выполнение тестируемого кода
    const result = multSalary(salary, coefficient)
    //3. Проверка ожидаемого результата
    expect(result).toBe(1200)
})

test('divSalary', ()=>{
    const salary:number = 1000
    const coefficient: number = 0.9
    expect(divSalary(salary, coefficient)).toBe(900)
})

test('case "ADD_SALARY" of salaryReducer', ()=>{
    const salary:number = 700
    const action: AddSalaryActionType = {
        type: "ADD_SALARY",
        bonus: 300
    }
    expect(salaryReducer(salary, action)).toBe(1000)
})

test('case "FALL_SALARY" of salaryReducer', ()=>{
    const salary:number = 950
    const action: FallSalaryActionType = {
        type: "FALL_SALARY",
        minus: 50
    }
    expect(salaryReducer(salary, action)).toBe(1000)
})

test('case "MULT_SALARY" of salaryReducer', ()=>{
    const salary:number = 1000
    const action: MultSalaryActionType = {
        type: "MULT_SALARY",
        coefficient: 1.2
    }
    expect(salaryReducer(salary, action)).toBe(1200)
})

test('case "DIV_SALARY" of salaryReducer', ()=>{
    const salary:number = 1000
    const action: DivSalary = {
        type: "DIV_SALARY",
        coefficient: 0.9
    }
    expect(salaryReducer(salary, action)).toBe(900)
})