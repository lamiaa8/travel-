// import  bootstrap file
// import "bootstrap.min.js";

window.onscroll = function() {
    nav();
    mobilNav()
    slidercontrol();
    sliderControl2();
    sliderControl3();
    sliderControl4();
    counter();
    upTop();
    searchPopup();
}



// loading 
const body = document.getElementById("body")
const loadText = document.querySelector(".loading-text");
const loade = document.getElementById("loade");
let load = 0;
let int = setInterval(blurring,30);

function blurring(){
    load++
    if(load>100){
        loade.classList.add("loadeanimation");
        clearInterval(int);
        body.style.overflow = "visible";


    }
    loadText.innerText = `${load}% 
    loading`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


// code slider 







function slidercontrol(){
    $('.testimonial-section .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
}
function sliderControl2(){
    $('.countries-section .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:5
            }
        }
    });
}

function sliderControl3(){
    $('.clients-section .owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:5
            }
        }
    });
}

function sliderControl4(){
    $('.gallery-section  .owl-carousel, .training-section .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
}


// counter code 

function counter(){

    const countOne =document.getElementById("countone");
    const countTwo =document.getElementById("countTwo");
    const coutThree =document.getElementById("coutThree");
    const countfour =document.getElementById("countfour");

    let lam = 0;
    let lame = 0;
    let la = 0;
    let l = 0;
    if(($(window).scrollTop()) >= ($(".fun-fact-section").offset().top-500))
    {
        setInterval(function(){
            if(lam >= 0 && lam <30 )
            {
                lam+=1;
                countOne.innerHTML = lam;
            }
        },100);
        
        setInterval(function(){
            if(lame >= 0 && lame <389 )
            {
                lame+=1
                countTwo.innerHTML = lame;
            }
        },100);
        
        setInterval(function(){
            if(la >= 0 && la <5 )
            {
                la+=1
                coutThree.innerHTML = la;
            }
        },1000);
        
        setInterval(function(){
            if(l >= 0 && l <98 )
            {
                l+=1
                countfour.innerHTML = l;
            }
        },100);
    }
    

}

function upTop(){
    let upTop = document.getElementById("upTop");
    if( window.scrollY > 300 ) {
        upTop.style.display = "block";
        upTop.addEventListener("click" , function(){
            window.scroll({
                top:0,
                behavior:"smooth"
            })
        })
    }
    else{
        upTop.style.display = "none";
    }

}



function searchPopup(){
    let search = document.getElementById("search");
    let searchIconMobil =document.getElementById("searchIconMobil")
    let searchIcon = document.getElementById("searchIcon");
    let searchClose = document.getElementById("searchClose")
    searchIcon.addEventListener("click", function(){
        search.classList.add("searchShow")
    });
    searchIconMobil.addEventListener("click", function(){
        search.classList.add("searchShow")
    });

    searchClose.addEventListener("click", function(){
        search.classList.remove("searchShow");
    });

}

function nav(){
    let sticky = document.getElementById("sticky");
    let NavLoadingShow = document.getElementById("NavLoadingShow")
    
    if( window.scrollY > 300 ) {
        sticky.classList.add("showNavScllor");
        NavLoadingShow.classList.remove("showNavScllor");
    }
    else{
        sticky.classList.remove("showNavScllor");
        NavLoadingShow.classList.add("showNavScllor");
    }
}

function mobilNav(){
    document.getElementById("barsOfNav").addEventListener("click",function(){
        document.getElementById("tag").classList.add('tag');
        document.getElementById("taginsetAnimal").classList.add("taginsetAnimal");
    });

    document.getElementById("colseNav").addEventListener("click",function(){
        document.getElementById("tag").classList.remove('tag');
        document.getElementById("taginsetAnimal").classList.remove("taginsetAnimal");

    });

}
