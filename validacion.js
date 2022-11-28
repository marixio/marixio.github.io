var nombre=document.getElementById("name");
var email=document.getElementById("email");
const pass=document.getElementById("password");
var form=document.getElementById("form")
var res=document.getElementById("res")
form.addEventListener("submit",e=>{
    var minombre="mauricio"
    const contra="1258"
    var ma="mauricio@gmail.com"
    e.preventDefault()
    var resa=""
    var entrar=false
    var entrar1=false,entrar2=false,entrar3=true
    if(nombre.value!==minombre){
         resa+="Usuario incoreccto <br>"
         entrar=true
    }else{
        entrar1=true
    }
    if(pass.value!==contra){
        resa+="contraseña incoreccto <br>"
         entrar=true
    }else{
        entrar2=true
    }
    if(email.value!==ma){
        resa+="email incorrecto"
        entrar=true
    }else{
        entrar3=true
    }
    if(entrar){
        res.innerHTML=resa
    }
    if(entrar1==true&&entrar2==true&&entrar3==true){
        
        window.location.href="index.html"
    }



})