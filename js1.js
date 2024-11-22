const inputname=document.getElementById("name")
const inputpswd=document.getElementById("pswd")
const button2=document.getElementById("btn")
document.body.style.backgroundColor="coral"

button2.addEventListener("click",()=>{
    const username=inputname.value
    const userpswd=inputpswd.value
    const enteredname=localStorage.getItem("name")
    const enteredpswd=localStorage.getItem("pswd")
    if(username==enteredname && userpswd==enteredpswd){
        alert("login succesfully")
        window.open("home.html")
    }
    else{
        alert("crendentails are worng")
    }


})