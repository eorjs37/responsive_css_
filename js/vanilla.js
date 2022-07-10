const hambugerEvent = () =>{
    const hamEl = document.getElementById('hambuger');
    hamEl.addEventListener('click',()=>{
        if(hamEl.classList.contains('active')){
            hamEl.classList.remove('active');
            overlay.setAttribute('style','display:none;');
        }
        else{
            hamEl.classList.add('active');
            const overlay = document.getElementById('overlay');
            overlay.setAttribute('style','display:inline-block;');
        }
        
    })
}

window.onload = () =>{
    hambugerEvent();
}