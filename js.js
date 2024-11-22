const inputname=document.getElementById("name")
const inputemail=document.getElementById("gmail")
const inputpswd=document.getElementById("pswd")
const button1=document.getElementById("btn")
const formtag=document.querySelector("form")
document.body.style.margin="200px 300px"
formtag.style.boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
formtag.style.display="flex"
formtag.style.flexDirection="column"
formtag.style.gap="10px"
// formtag.style.border=" 2px solid black"
formtag.style.width="300px"
formtag.style.height="200px"
formtag.style.padding="50px 20px"
formtag.style.backgroundColor="coral"


document.body.style.backgroundColor="lightgreen"

button1.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=inputname.value
    const useremail=inputemail.value
    const userpswd=inputpswd.value

    localStorage.setItem("name",username)
    localStorage.setItem("email",useremail)
    localStorage.setItem("pswd",userpswd)

    setTimeout(()=>{
        window.location.href="login.html"
       
    })


})


