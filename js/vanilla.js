const hambugerEvent = () =>{
    const hamEl = document.getElementById('hambuger');
    hamEl.addEventListener('click',()=>{
        if(hamEl.classList.contains('active')){
            hamEl.classList.remove('active')
        }
        else{
            hamEl.classList.add('active')
        }
        
    })
}

window.onload = () =>{
    hambugerEvent();
}