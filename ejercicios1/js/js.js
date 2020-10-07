const input=document.getElementById('inpu');
const btn=document.getElementById('btn');
const resultado=document.getElementById('resultado');
const pi=3.14;



btn.addEventListener('click',()=>{
    const valor=input.value;
    if(valor!=undefined){
        resultado.innerHTML=`<span> el are del circulo es:${(valor*2)*pi} </span>`;
    }
})



