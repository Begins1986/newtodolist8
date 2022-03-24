export const addSalary = (salary: number, bonus: number) => salary+bonus
export const fallSalary = (salary: number, minus: number) => salary-minus
export const multSalary = (salary: number, coefficient: number) => salary*coefficient  //1.2
export const divSalary = (salary: number, coefficient: number) => salary*coefficient  //0.8

//1. В параметрах у всех salary (state)
//2. Название функции отражает тип действия (type of action)
//3. Дополнительные значения для каждого типа действия

export type AddSalaryActionType = {
    type: "ADD_SALARY"
    bonus: number
}

export type FallSalaryActionType = {
    type: "FALL_SALARY"
    minus: number
}

export type MultSalaryActionType = {
    type: "MULT_SALARY"
    coefficient: number
}

export type DivSalary = {
    type: "DIV_SALARY"
    coefficient: number
}

type ActionType = AddSalaryActionType | FallSalaryActionType | MultSalaryActionType | DivSalary

export const salaryReducer = (salary:number, action: ActionType) =>{
    switch (action.type){
        case "ADD_SALARY":
            return salary+action.bonus
        case "FALL_SALARY":
            return salary+action.minus
        case "MULT_SALARY":
        case "DIV_SALARY":
            return salary*action.coefficient
        default:
            return salary
    }
}

