let a= document.getElementById("numa")
let b= document.getElementById("numb")

document.getElementById("button").onclick= function(){
    result()
}
function result(){
    document.getElementById("result").innerHTML= parseInt(a.value) * parseInt(b.value)
}