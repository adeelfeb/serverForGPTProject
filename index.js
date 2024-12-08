
const obj = {
    x: 30,
    funcc: function(){
        const nested = ()=>{
            console.log("Int heneseed")
            console.log(this)
        }
        nested()
    }
}


const obj2 ={
    x: 45,
    y:2
}

obj.funcc()
obj.funcc.call(obj2)