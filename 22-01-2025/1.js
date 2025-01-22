function greet(name,callback){
    const message=`Hello ${name}`
    callback(message)
}

greet("abc",(greet)=>{
    console.log(greet)
})
greet("kaushik",(greet)=>{
    console.log(greet)
})