//? JSON

let studnet={
    stdId:101,
    stdName:"Pavan",
    stdAge:23,
    stdPh:9874563210,
    stdAddress:"Mysore"
}
console.log(studnet)


let jsonObj=JSON.stringify(studnet)
console.log(jsonObj)

let regularObj=JSON.parse(jsonObj)
console.log(regularObj)