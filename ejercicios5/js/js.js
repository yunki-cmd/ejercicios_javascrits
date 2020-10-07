const input=document.getElementById('inpu');
const btn=document.getElementById('btn');
const resultado=document.getElementById('resultado');
const formulario=document.getElementById('formulario')



formulario.addEventListener('click',(e)=>{
    let valor=input.value;
    if(valor!=undefined){
        if(e.target.value=="incrementar"){
            valor++;
            input.setAttribute('value',`${valor}`);
        }else if(e.target.value=="decrementar"){
            valor--;
            input.setAttribute('value',`${valor}`);
        }
    }
})



