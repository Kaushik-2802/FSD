function merge(arr){
    let res=[]
    arr.forEach(element=>{
        [...element].forEach(element=>{
            res.push(element)
        })
    })
    return res
}

let arr=[[1,2],[2,3],[3,4],[4,5]]
console.log(merge(arr))