const hambugerEvent = () =>{
    const hamEl = document.getElementById('hambuger');
    const sidebarEl = document.getElementById('sidebar');
    hamEl.addEventListener('click',()=>{
        if(hamEl.classList.contains('active')){
            hamEl.classList.remove('active');
            overlay.setAttribute('style','display:none;');
            sidebarEl.setAttribute('style','left:-200px');
        }
        else{
            hamEl.classList.add('active');
            const overlay = document.getElementById('overlay');
            overlay.setAttribute('style','display:inline-block;');
            sidebarEl.setAttribute('style','left:0px');
        }
        
    })
}

const typeIt = () =>{
    new TypeIt('.type-effect')
    .type("This is my first string!")
    .delete()
    .pause(1000)
    .type("Plus a little more.")
    .delete()
    .pause(1000)
    .type("Plus a little more2.")
    .go();
}

window.onload = () =>{
    hambugerEvent();
    typeIt();
}