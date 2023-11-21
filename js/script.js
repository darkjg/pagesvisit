const boton = document.getElementById("btnReestablecer");
const visitas = document.getElementById("contadorVisitas");
let numero=localStorage.Contador;
if(localStorage.Contador==null){
    localStorage.setItem("Contador",0);
}
window.addEventListener("load",function (){
    numero =localStorage.Contador++;
})

console.log(numero);
visitas.innerHTML=numero;
localStorage.setItem("Contador",numero);

boton.addEventListener("click",function(){
    localStorage.setItem("Contador",0);
    location.reload();
})

