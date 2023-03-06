// Write your solution in this file!
const employee = {
    name : "Sam", 
    streetAddress : "10830 Merritt Dr"
}



function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    }

}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Jafet"
    )


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway"
    
    return employee
}







function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]

    return newEmployee
}



function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name 
    return employee
}