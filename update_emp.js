const emp={
    name:"abc",
    role:"sde",
    sal:10000,
    age:20,
    location:"USA"
}

function updateDetails(emp){
    let updateSal=emp.sal*1.02
    emp.sal=updateSal
    console.log(emp)
}

updateDetails(emp)