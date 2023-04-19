// 

let nums = document.querySelectorAll(".count-box .num");
let section = document.querySelector(".clients-section");
let started = false; // Function Started ? No

window.onscroll = function() {
    nav();
    mobilNav()
    slidercontrol();
    sliderControl2();
    sliderControl3();
    sliderControl4();
    upTop();
    searchPopup();
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


// section start page 
function pageName( x){
    return `<div class="bg">
            <div class="container">
                <h2>
                    ${x}
                </h2>
                <P>
                    <span>
                        home 
                    </span>
                    >
                    <span>
                    ${x}
                    </span>
                </P>
            </div>
        </div>
    `;
}
// header of all pages 
function navAllPage(){
    return `
    <nav class="navbar navbar-expand-lg showNavScllor" id="NavLoadingShow">
            <div class="container-fluid">
                <div class="logo">
                    <a class="navbar-brand" href="#">
                        <img src="img/lemo.png" alt="logo of web " class="logoImg">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav col-lg-8 col-xlg-2 m-auto justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="aboout.html">about</a>
                        </li>
                        <li class="nav-item parentDropdown">
                            <a class="nav-link" href="#">
                                pages
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-me">
                                <li><a class="dropdown-item" href="team detailes.html">team details</a></li>
                                <li><a class="dropdown-item" href="Testimonials.html">Testimonials</a></li>
                            </ul>
                        </li>
                        <li class="nav-item parentDropdown">
                            <a class="nav-link" href="#">
                                country
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-me">
                                <li><a class="dropdown-item" href="countrydetailes.html"> country details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item parentDropdown">
                            <a class="nav-link" href="#">
                                news
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-me">
                                <li><a class="dropdown-item" href="news.html">New grid</a></li>
                                <li><a class="dropdown-item" href="blog.html">New details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html"> contact</a>
                        </li>
                    </ul>
                    <div class="navbar-text">
                        <div class="row">
                            <a href="#" class="col-lg-3 col-xlg-3 searchIcon"id="searchIcon" ><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a class="bttn booking col-lg-9" href="#">
                                <span class="btn-title">Book a consultation</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="mobileNav">
            <div class="row  allInNav ">
                <div class=" col-lg-3 col-sm-4 col-md-4 logo">
                    <a class="navbar-brand" href="#">
                        <img src="img/lemo.png" alt="logo of web " class="logoImg">
                    </a>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4 iconDiv ">
                    <div class="row">
                        <a href="#" class=" col-3 searchIcon" id="searchIconMobil" ><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="col-9" id="barsOfNav">
                            <i class="fa-solid fa-bars"></i>
                        </a>
                    </div>
                </div>
            </div>


            <div class="rightnav" id="tag">
                <div class="toAnimation">
                    <div class="taginset" id="taginsetAnimal">
                        <a class="logo" href="#">
                            <img src="img/lemo.png" alt="logo of web " class="logoImg">
                        </a>
                        <ul class=" col-lg-8  ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboout.html">about</a>
                            </li>
                            <li class="nav-item parentDropdown">
                                <a class="nav-link" href="#">
                                    pages
                                    <i class="fa-solid fa-caret-down"></i>
                                </a>
                                <ul class="dropdown-me">
                                <li><a class="dropdown-item" href="team detailes.html">team details</a></li>
                                <li><a class="dropdown-item" href="Testimonials.html">Testimonials</a></li>
                                </ul>
                            </li>
                            <li class="nav-item parentDropdown">
                                <a class="nav-link" href="#">
                                    country
                                    <i class="fa-solid fa-caret-down"></i>
                                </a>
                                <ul class="dropdown-me">
                                    <li><a class="dropdown-item" href="countrydetailes.html">country detailes</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item parentDropdown">
                                <a class="nav-link" href="#">
                                    news
                                    <i class="fa-solid fa-caret-down"></i>
                                </a>
                                <ul class="dropdown-me">
                                    <li><a class="dropdown-item" href="news.html">New grid</a></li>
                                    <li><a class="dropdown-item" href="blog.html">New details</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="contact.html"> contact</a>
                            </li>
                        </ul>
                        <div>
                            <div class="contact-info">
                                <div class="row">
                                    <div class="col-2">
                                        <i class="fa-solid fa-house-chimney-window"></i>
                                    </div>
                                    <div class="col-10">
                                        <h3>Buttonwood, California.
                                        </h3>
                                        <p>Rosemead, CA 91770
            
                                        </p>
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-2">
                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                    <div class="col-10">
                                        <h3>+1 253 565 2365
                                        </h3>
                                        <p>Mon to Fri 9am to 6pm
            
                                        </p>
                                    </div>
                                    
                                </div>
            
                                <div class="row">
                                    <div class="col-2">
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="col-10">
                                        <h3>support@colorlib.com
                                        </h3>
                                        <p>Send us your query anytime!  </p>
                                    </div>
                                    
                                </div>
            
                            </div>
                        </div>
    
                        <ul class="social-icon">
                            <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/#"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="/#"><i class="fab fa-pinterest"></i></a></li>
                            <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
    
                        <a href="#"class="cloce" id="colseNav">
                            <i class="fa-solid fa-xmark"></i>
                        </a>
    
    
                    </div>
                </div>

            </div>



        </nav>
        

        <div class="search-popup" id="search">
            <span class="search-back-drop"></span>
            <button class="close-search " id="searchClose">
                <span class="fa fa-times"></span>
            </button>
            <div class="search-inner">
                <form method="post" action="index">
                    <div class="form-group">
                        <input type="search" name="search-field" placeholder="Search..." required="">
                        <button type="submit"><i class="fa fa-search"></i></button></div>
                </form>
            </div>
        </div>


        <div class="sticky-header" id="sticky">
            <div class="container">
                <div class="inner-container">
                    <div class="logo">
                        <a href="#" class="navbar-brand">
                            <img title="logo" src="img/lemo.png">
                        </a>
                    </div>
                    <div class="nav-outer">
                        <nav class="main-menu">
                            <div class="navbar-collapse show collapse clearfix">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="aboout.html">about</a>
                                    </li>
                                    <li class="nav-item parentDropdown">
                                        <a class="nav-link" href="#">
                                            pages
                                            <i class="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul class="dropdown-me">
                                        <li><a class="dropdown-item" href="team detailes.html">team details</a></li>
                                        <li><a class="dropdown-item" href="Testimonials.html">Testimonials</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item parentDropdown">
                                        <a class="nav-link" href="#">
                                            country
                                            <i class="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul class="dropdown-me">
                                            <li><a class="dropdown-item" href="countrydetailes.html">country detailes</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item parentDropdown">
                                        <a class="nav-link" href="#">
                                            news
                                            <i class="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul class="dropdown-me">
                                            <li><a class="dropdown-item" href="news.html">New grid</a></li>
                                            <li><a class="dropdown-item" href="blog.html">New details</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " href="#"> contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>

    `
}
// footer of all pages
function footer(){
    return `
    <div class="container">
    <div class="upper-box">
        <div class="logo">
            <a href="/">
                <img src="img/lemo.png" title="Vixoz">
            </a>
        </div>
        <div class="subscribe-form">
            <h5 class="title">Subscribe to Newsletter</h5>
            <form method="post" action="#">
                <div class="form-group"><input type="email" name="email" class="email" placeholder="Email Address" required="">
                        <button type="button" class="theme-btn btn-style-one bttn bttnbg ">
                            <span class="btn-title">Subscribe</span></button></div>
            </form>
        </div>
    </div>
</div>
<div class="widgets-section">
    <div class="container">
        <div class="row">
            <div class="footer-column col-xl-3 col-lg-4">
                <div class="footer-widget about-widget">
                    <h5 class="widget-title">Contact</h5>
                    <div class="text">66 Road Broklyn Street, 600 <br>New York, USA</div>
                    <ul class="contact-info">
                        <li><i class="fa fa-envelope"></i> <a
                                href="mailto:needhelp@potisen.com">needhelp@company.com</a><br></li>
                        <li><i class="fa fa-phone-square"></i> <a href="tel:+926668880000">+92 666 888 0000</a><br>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-column col-xl-6 col-lg-8 col-md-12 mb-0">
                <div class="footer-widget links-widget">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <h5 class="widget-title">Explore</h5>
                            <ul class="user-links">
                                <li><a href="/#">About Company</a></li>
                                <li><a href="/#">Meet the Team</a></li>
                                <li><a href="/#">News &amp; Media</a></li>
                                <li><a href="/#">Our Projects</a></li>
                                <li><a href="/#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <h5 class="widget-title">Visa</h5>
                            <ul class="user-links">
                                <li><a href="/#">Students Visa</a></li>
                                <li><a href="/#">Business Visa</a></li>
                                <li><a href="/#">Family Visa</a></li>
                                <li><a href="/#">Travel Visa</a></li>
                                <li><a href="/#">Work Visa</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <h5 class="widget-title">Services</h5>
                            <ul class="user-links">
                                <li><a href="/#">PR Applicants</a></li>
                                <li><a href="/#">Visa Consultancy</a></li>
                                <li><a href="/#">Travel Insurance</a></li>
                                <li><a href="/#">Work Permits</a></li>
                                <li><a href="/#">Abroad Study</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-column col-xl-3 col-lg-4 col-md-6">
                <div class="footer-widget gallery-widget">
                    <h5 class="widget-title">Gallery</h5>
                    <div class="widget-content">
                        <div class="outer clearfix">
                            <figure class="image"><a href="/#"><img src="img/project-thumb-1.jpg"
                                        title="Vixoz"></a></figure>
                            <figure class="image"><a href="/#"><img src="img/project-thumb-2.jpg"
                                        title="Vixoz"></a></figure>
                            <figure class="image"><a href="/#"><img src="img/project-thumb-3.jpg"
                                        title="Vixoz"></a></figure>
                            <figure class="image"><a href="/#"><img src="img/project-thumb-4.jpg"
                                        title="Vixoz"></a></figure>
                            <figure class="image"><a href="/#"><img src="img/project-thumb-5.jpg"
                                        title="Vixoz"></a></figure>
                            <figure class="image"><a href="/#"><img src="img/project-thumb-6.jpg"
                                        title="Vixoz"></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <div class="container">
        <div class="inner-container">
            <div class="copyright-text">© Copyright 2022 by <a href="/">Company.com</a></div>
            <ul class="social-icon-two">
                <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="/#"><i class="fab fa-pinterest"></i></a></li>
                <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    </div>
</div>
    `

}
// about page
async function getApi() {
    let apiRespons = await fetch("/js/api.json")
    let finalApi = await apiRespons.json()
    // countries
    let cuntry ="";
    for(let i = 0 ; i < (finalApi.appApi.countrys.length) ; i++ ){
        cuntry += `
            <div class="item">
                <div class="inner-box">
                    <div class="image-box">
                        <figure class="image">
                            <a class="lightbox-image" href="countrydetailes.html">
                                <img src=${finalApi.appApi.countrys[i].img} title="country">
                            </a>
                        </figure>
                    </div>
                    <div class="content-box">
                        <div class="flag">
                            <img src=${finalApi.appApi.countrys[i].flag} title="flag">
                        </div>
                        <h5 class="title">
                            <a href="countrydetailes.html">${finalApi.appApi.countrys[i].name}</a>
                        </h5>
                        <div class="text">${finalApi.appApi.countrys[i].Visa}</div>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("countrySlider").innerHTML= cuntry;
    sliderControl2()

    // services section 
    let services = "";
    for(let i = 0 ; i < (finalApi.appApi.offers.length) ; i++){
        services += `
            <div class="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" style="visibility: visible;">
                <div class="inner-box">
                    <div class="image-box">
                        <figure class="image">
                            <a href="visa.html">
                                <img src=${finalApi.appApi.offers[i].img} title="servoes">
                            </a>
                        </figure>
                        <div class="icon-box">
                            <i class="icon fa fa-graduation-cap"></i>
                        </div>
                    </div>
                    <div class="content-box">
                        <h5 class="title"><a href="visa.html">${finalApi.appApi.offers[i].name}</a></h5>
                        <div class="p text">${finalApi.appApi.offers[i].description}</div>
                        <a class="read-more" href="visa.html">Read More <i
                                class="fa fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>

        `;

    }
    document.getElementById("serviceBlock").innerHTML = services ;
}
// ///////////////////////////
//  blog  page
async function newsApi() {
    let apiRespons = await fetch("/js/api.json")
    let finalApi = await apiRespons.json()
    // countries
    let postnew =`
        <div class="blog-details__img">
            <img src="${finalApi.appApi.news[0].img}" title="Vizox">
            <div class="blog-details__date">
                <span class="day">28</span>
                <span class="month">Aug</span>
            </div>
        </div>
        <div class="blog-details__content">
            <ul class="list-unstyled blog-details__meta">
                <li><a href="blog.html"><i class="fas fa-user-circle"></i> Admin</a> </li>
                <li><a href="blog.html"><i class="fas fa-comments"></i> 03 Comments</a></li>
            </ul>
            <h3 class="blog-details__title font-weight-600">${finalApi.appApi.news[0].titles}</h3>
            <p class="blog-details__text-2"> ${finalApi.appApi.news[0].discretion}   </p>
            
        </div>
    `;
    document.getElementById("postNew").innerHTML= postnew;
    let comments = `<h3 class="comment-one__title">${finalApi.appApi.news[0].comments.length} Comments</h3>`;
    for(let i = 0 ; i < (finalApi.appApi.news[0].comments.length) ; i++){
        comments += `
        <div >
            <div class="comment-one__single">
                <div class="comment-one__image"> 
                    <img src="${finalApi.appApi.news[0].comments[i].personImg}" title="\"> 
                </div>
                <div class="comment-one__content">
                    <h3>${finalApi.appApi.news[0].comments[i].personName}</h3>
                    <p class="blog-details__text-2">${finalApi.appApi.news[0].comments[i].comment}
                    </p>
                    <a class="bttn bttnbg comment-one__btn" href="blog.html"><span
                        class="btn-title">Reply</span>
                </a>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("comenments").innerHTML = comments ;

    let lastPost = "";
    for(let i = 1 ; i < (finalApi.appApi.news.length) ; i++){
        lastPost += `
        <li>
            <div class="sidebar__post-image"> 
                <img src="${finalApi.appApi.news[i].img}" title=""> </div>
            <div class="sidebar__post-content">
                <h3> 
                    <span class="sidebar__post-content-meta">
                        <i class="fas fa-user-circle"></i>Admin
                    </span>
                    <a href="blog.html">${finalApi.appApi.news[i].titles}</a>
                </h3>
            </div>
        </li>
        `
    }
    document.getElementById("lastPost").innerHTML = lastPost ;

}
async function pushInApi(){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    finalApi.appApi.news[0].comments.push({
        personName : `${document.getElementById("nameOfpers").value}` ,
        comment : `${document.getElementById("massage").value}`,
        personImg: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
    });
        // let newcomment = finalApi.appApi.news[0].comments
    let comments = `<h3 class="comment-one__title">${finalApi.appApi.news[0].comments.length} Comments</h3>`;
    for(let i = 0 ; i < (finalApi.appApi.news[0].comments.length) ; i++){
        comments += `
        <div >
            <div class="comment-one__single">
                <div class="comment-one__image"> 
                    <img src="${finalApi.appApi.news[0].comments[i].personImg}" title="\"> 
                </div>
                <div class="comment-one__content">
                    <h3>${finalApi.appApi.news[0].comments[i].personName}</h3>
                    <p class="blog-details__text-2">${finalApi.appApi.news[0].comments[i].comment}
                    </p>
                    <a class="bttn bttnbg comment-one__btn" href="blog.html"><span
                        class="btn-title">Reply</span>
                </a>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("comenments").innerHTML = comments ;
    document.getElementById("nameOfpers").value ="";
    document.getElementById("massage").value ="";

}


// news 
async function news(){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    let News = "";
    for (let i = 0 ; i < finalApi.appApi.news.length ; i++ ){
        News +=`
                    <div class="news-block col-lg-6 col-md-12 mb-4">
                        <div class="inner-box" onclick="showNew(${i})">
                            <div class="image-box">
                                <figure class="image">
                                    <a href="#showDetailsNew" >
                                        <img src="${finalApi.appApi.news[i].img}"title="new">
                                    </a>
                                </figure>
                                <span class="date"><b>26</b> Nov</span>
                            </div>
                            <div class="content-box">
                                <ul class="post-info">
                                    <li><i class="fa fa-user-circle"></i> by Admin</li>
                                    <li><i class="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 class="title"><a href="#showDetailsNew">${finalApi.appApi.news[i].titles}</a></h4>
                                <a class="read-more" href="#showDetailsNew">Read More <i class="fa fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

        
        `
    }
    document.getElementById("theallnew").innerHTML = News;


}
async function showNew(x){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    document.getElementById("showDetailsNew").innerHTML = `
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img src="${finalApi.appApi.news[x].img}" alt="new"  title="">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h4 class="title"><a href="#">${finalApi.appApi.news[x].titles} </a></h4>
                        <p> ${finalApi.appApi.news[x].discretion} </p>
                    </div>
    `
    
}



// country details 

async function detailes(index = -1){
    let apiRespons = await fetch("/js/api.json")
    let finalApi = await apiRespons.json()
    if(index == -1){
        document.getElementById("details").innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="country-details__img">
                            <img src="${finalApi.appApi.countrys[0].img}" title="country"> 
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="country-content">
                            <h3>${finalApi.appApi.countrys[0].name}a</h3>
                            <p>
                                ${finalApi.appApi.countrys[0].discription}
                                </p>
                            <ul class="country-details-list">
                                <li><span>Country</span><span>${finalApi.appApi.countrys[0].name}</span></li>
                                <li><span>Languages Spoken</span><span>${finalApi.appApi.countrys[0].Languages}</span></li>
                                <li><span>Visa Requirements</span><span>${finalApi.appApi.countrys[0].Visa}</span></li>
                                <li><span>Area (km2)</span><span>${finalApi.appApi.countrys[0].Area}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    }else{
        document.getElementById("details").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="country-details__img">
                        <img src="${finalApi.appApi.countrys[index].img}" title="country"> 
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="country-content">
                        <h3>${finalApi.appApi.countrys[index].name}a</h3>
                        <p>
                            ${finalApi.appApi.countrys[index].discription}
                            </p>
                        <ul class="country-details-list">
                            <li><span>Country</span><span>${finalApi.appApi.countrys[index].name}</span></li>
                            <li><span>Languages Spoken</span><span>${finalApi.appApi.countrys[index].Languages}</span></li>
                            <li><span>Visa Requirements</span><span>${finalApi.appApi.countrys[index].Visa}</span></li>
                            <li><span>Area (km2)</span><span>${finalApi.appApi.countrys[index].Area}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    }


}


async function shortcountry(){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    let display = "";
    for(let i = 0 ; i < (finalApi.appApi.countrys.length); i++){
        display += `
            <div class="country-block-three col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box">
                    <div class="content">
                        <div class="flag"><img src="${finalApi.appApi.countrys[i].flag}" title="country"></div>
                        <h5 class="title"><a href="#" onclick="detailes(${i})">${finalApi.appApi.countrys[i].name}</a></h5>
                        <div class="text">${finalApi.appApi.countrys[i].Visa}</div>
                    </div>
                </div>
            </div>

        `
    }
    document.getElementById("shortCut").innerHTML = display;


}


// team detailes



async function teamDetails(numOfTeam = -1){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    
    if(numOfTeam == -1)
    {
        document .getElementById("teamDetails").innerHTML =`

        <div class="container pb-100" >
            <div class="team-details__top pb-70">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__top-left">
                            <div class="team-details__top-img"> <img src="${finalApi.appApi.team[2].img}" title="Vizox">
                                <div class="team-details__big-text"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__top-right">
                            <div class="team-details__top-content">
                                <h3 class="team-details__top-name">${finalApi.appApi.team[2].name}</h3>
                                <p class="team-details__top-title">${finalApi.appApi.team[2].position}</p>
                                <div class="team-details__social"> <a href="#"><i
                                            class="fab fa-twitter"></i></a> <a href="#"><i
                                            class="fab fa-facebook"></i></a> <a href="#"><i
                                            class="fab fa-pinterest-p"></i></a> <a href="#"><i
                                            class="fab fa-instagram"></i></a> </div>
                                <p class="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                                <p class="team-details__top-text-3">Lorem ipsum is simply free text used by copytyping
                                    refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                                    architecto beatae </p>
                                <p class="team-details__top-text-2">When an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries
                                    architecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-details__bottom pt-100">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__bottom-left">
                            <h4 class="team-details__bottom-left-title">Personal Experience</h4>
                            <p class="team-details__bottom-left-text">${finalApi.appApi.team[2].about}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__bottom-right">
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Technology</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="77" style="width: 77%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="77">77</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Marketing</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="90" style="width: 90%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="90">90</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Business</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="99" style="width: 99%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="99">99</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `

    }else
    {
        document .getElementById("teamDetails").innerHTML =`

        <div class="container pb-100" >
            <div class="team-details__top pb-70">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__top-left">
                            <div class="team-details__top-img"> <img src="${finalApi.appApi.team[numOfTeam].img}" title="Vizox">
                                <div class="team-details__big-text"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__top-right">
                            <div class="team-details__top-content">
                                <h3 class="team-details__top-name">${finalApi.appApi.team[numOfTeam].name}</h3>
                                <p class="team-details__top-title">${finalApi.appApi.team[numOfTeam].position}</p>
                                <div class="team-details__social"> <a href="#"><i
                                            class="fab fa-twitter"></i></a> <a href="#"><i
                                            class="fab fa-facebook"></i></a> <a href="#"><i
                                            class="fab fa-pinterest-p"></i></a> <a href="#"><i
                                            class="fab fa-instagram"></i></a> </div>
                                <p class="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                                <p class="team-details__top-text-3">Lorem ipsum is simply free text used by copytyping
                                    refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                                    architecto beatae </p>
                                <p class="team-details__top-text-2">When an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries
                                    architecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-details__bottom pt-100">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__bottom-left">
                            <h4 class="team-details__bottom-left-title">Personal Experience</h4>
                            <p class="team-details__bottom-left-text">${finalApi.appApi.team[numOfTeam].about}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="team-details__bottom-right">
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Technology</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="77" style="width: 77%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="77">77</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Marketing</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="90" style="width: 90%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="90">90</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="skills">
                                    <div class="skill-item">
                                        <div class="skill-header">
                                            <h6 class="skill-title">Business</h6>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner">
                                                <div class="bar progress-line" data-width="99" style="width: 99%;">
                                                    <div class="skill-percentage">
                                                        <div class="count-box"><span class="count-text" data-speed="3000"
                                                                data-stop="99">99</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `

    }


}

async function teamGeid(){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    let grid = "";
    for(let i = 0; i < finalApi.appApi.team.length; i++  ){
        grid +=`
        <div class="team-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box"  onclick=" teamDetails(${i})">
                <div class="image-box">
                    <figure class="image">
                        <a href="#teamDetails" onclick=" teamDetails(${i})">

                            <img src="${finalApi.appApi.team[i].img}" title="team">
                        </a>
                    </figure>
                </div>
                <div class="info-box">
                    <h5 class="name"><a href="#teamDetails" onclick=" teamDetails(${i})">${finalApi.appApi.team[i].name}</a>
                    </h5><span class="designation" onclick=" onclick=" teamDetails(${i})>${finalApi.appApi.team[i].position}</span>

                    <div class="social-links"><a href="/#"><i class="fab fa-facebook-f"></i></a>
                        <a href="/#"><i class="fab fa-twitter"></i></a>
                        <a href="/#"><i class="fab fa-pinterest-p"></i></a>
                        <a href="/#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>


        `;
    }
    document.getElementById("teamGrid").innerHTML= grid;

}


// testimonial psge
async function testimonialFun(){
    let apiRespons = await fetch("/js/api.json");
    let finalApi = await apiRespons.json();
    let grid = "";
    for(let i = (finalApi.appApi.team.length - 4); i < finalApi.appApi.team.length; i++  ){
    
        grid +=`
                    <div class="testimonial-block-two col-lg-6 col-md-6 col-sm-12 ">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image">
                                    <img src="${finalApi.appApi.team[i].img}" title="testimonial">
                                </figure>
                            </div>
                            <div class="content-box">
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                <div class="text">To review means to look back over something for evaluation or memory. It’s
                                    always a joy to hear that the work I do has positively impacted our clients.</div>
                                <div class="info-box">
                                    <h5 class="name">${finalApi.appApi.team[i].name}</h5>
                                    <span class="designation">${finalApi.appApi.team[i].position}</span>
                                    <span class="icon icon-quote-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>

        `;

    }
    document.getElementById("testimonial").innerHTML = grid;

}

