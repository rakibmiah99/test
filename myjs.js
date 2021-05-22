

window.addEventListener('load',function(){
    //let slider = document.getElementById('slider');
    //slider.style.height  = window.innerHeight/1.5+"px";
    //let img = document.getElementById('right-image');
    //img.style.height = window.innerHeight;
    
    //container = document.getElementsByClassName('container')[0];
    //container.classList.add('active');
    //container.style.width = window.innerWidth+"px";
     
});

window.addEventListener('scroll',function(){





    const menu = document.querySelectorAll('ul li');
    const total_section = document.getElementsByTagName('section');
    for(i=0;i<total_section.length;i++){
        content = "";
        const section_height = total_section[i].clientHeight;
        if(pageYOffset > total_section[i].offsetTop){
           var content =  total_section[i].getAttribute('id');
           if(menu[i].getAttribute('data-name') != content){
               menu[i].setAttribute('class','active');
           }
            
        }else{
           
        }
    }
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

