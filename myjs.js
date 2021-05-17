

window.addEventListener('load',function(){
    //let slider = document.getElementById('slider');
    //slider.style.height  = window.innerHeight/1.5+"px";
    //let img = document.getElementById('right-image');
    //img.style.height = window.innerHeight;
});

window.addEventListener('scroll',function(){
    let slider = document.getElementById('slider');
    //slider.style.height  = window.innerHeight/1.5+"px";
});


function collapseBtn(e){
    e.classList.toggle('active');
    let collpase_menu = document.getElementsByClassName('collapse-menu')[0];
    if(e.className == "active"){
        collpase_menu.classList.add('show');
    }else{
        collpase_menu.classList.remove('show');
    }
}

