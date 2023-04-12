/* font link  */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import url('https://fonts.googleapis.com/css2?family=Freehand&display=swap');
/*bootstrap link*/
@import url("bootstrap.min.css");

/* fontawesome */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");

/* start varibles css  */

:root{
    --theme-color1: #1d2f41;
    --theme-color2: #ff494a;
    --theme-color3: #4476a8;
    --theme-color4: #ecf0f4;
    --bg-theme-color1: var(--theme-color1);
    --bg-theme-color2: var(--theme-color2);
    --bg-theme-color3: var(--theme-color3);
    --bg-theme-color4: var(--theme-color4);
    --border-theme-color1: var(--theme-color1);
    --border-theme-color2: var(--theme-color2);
    --border-theme-color3: var(--theme-color3);
    --border-theme-color4: var(--theme-color4);
    --text-color-bg-theme-color1: #fff;
    --text-color-bg-theme-color2: #fff;
    --text-color-bg-theme-color3: #fff;
    --text-color-bg-theme-color4: #fff;
    --gradient-1: linear-gradient(90deg,#1d2f41 0%,rgba(255,73,74,.5) 50%,rgba(29,47,65,0));
    --gradient-2: linear-gradient(to right,var(--theme-color1),var(--theme-color2));
    --gradient-3: linear-gradient(to top,var(--theme-color1),var(--theme-color2));
    --text-color: #73787d;
    --headings-color: var(--theme-color1);
    --link-color: var(--theme-color1);
    --link-hover-color: var(--theme-color1);
    --text-font: "Roboto",sans-serif;
    --title-font: "Roboto",sans-serif;
    --body-font-size: 16px;
    --body-line-height: 30px;
    --body-font-weight: 400;
    --line-height-heading-h1: 1em;
    --line-height-heading: 1.2em;
    --line-height-heading-small: 1.4em;
    --h1-font-size: 90px;
    --h2-font-size: 45px;
    --h3-font-size: 36px;
    --h4-font-size: 24px;
    --h5-font-size: 20px;
    --h6-font-size: 18px;
    --h1-font-weight: 700;
    --h2-font-weight: 700;
    --h3-font-weight: 700;
    --h4-font-weight: 700;
    --h5-font-weight: 700;
    --h6-font-weight: 700;
    --sec-title-subtitle-color: var(--text-color);
    --sec-title-subtitle-font-size: 14px;
    --sec-title-subtitle-font-family: var(--text-font);
    --sec-title-subtitle-font-weight: 500;
    --sec-title-subtitle-line-height: 1.2em;
    --sec-title-color: var(--headings-color);
    --sec-title-font-size: var(--h2-font-size);
    --sec-title-font-family: var(--title-font);
    --sec-title-font-weight: var(--h2-font-weight);
    --theme-light-background: #f8f6f1;
    --theme-light-background-text-color: var(--headings-color);
    --theme-black: #222429;
    --container-width: 1200px;
    --small-container-width: 1000px;
    --large-container-width: 1550px;
    --container-pt: 120px;
    --container-pb: 120px;
    --style-font: 'Freehand', cursive;
   

}
/* constant in my stlye  */

* {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 100%;
}
body {
    font-family: var(--text-font);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    overflow:hidden;
    overflow-x: hidden;
}
ul{
    list-style: none;
}
p {
    color: var(--text-color);
    font-size: var(--body-font-size);
    font-family: var(--text-font);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
}
a{
    text-decoration: none;
}
img{
    display: inline-block;
    max-width: 100%;
    height: auto;
}
.bttn{
    margin: -34px 0;
    font-size: 14px;
    background: var(--bg-theme-color3);
    font-weight: 400;
    letter-spacing: .1em;
    overflow: hidden;
    color: #fff;
    transition: all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.bttn::after{
    content: "";
    background-color:var(--bg-theme-color2) ;
    bottom: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all .5s ease-in-out;
    left: 100%;
}
.bttn:hover::after{
    left: 0;
}
.bttn::before{
    content: "";
    background-color:var(--bg-theme-color2) ;
    top: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all .5s ease-in-out;
    right: 100%;
}
.bttn:hover::before{
    right: 0;
}
.bttn span{
    z-index: 1;
}



.bttnbg{
    background-color:var(--bg-theme-color2) ;
    margin: 20px auto;
    text-transform: uppercase;
    width: 200px;
    padding:20px 0;

}
.bttnbg::before, 
.bttnbg::after{
    background-color:var(--bg-theme-color1) ;

}
/* ///////////////////////////////////////////////////////////////// */
/* start header style  */
/* ///////////////////////////////////////////////////////////////// */

header {
    background-color:var(--bg-theme-color1) ;
}
header .logo {
    background-color:#FFFBFB ;
    padding:0 100px;
    text-align: center;
    margin: -10px;
}
header nav .logo .navbar-brand img{
    width:100%;
    height: 100px;
    
}
header nav ul li a.nav-link {
    position: relative;
    display: block;
    text-align: center;
    opacity: 1;
    color: #aab3bb;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    padding: 0;
    margin: 0 10px;
    text-transform: capitalize;
    transition: all .3s ease;
}
header nav ul li a.nav-link:hover{
    color: var(--theme-color4);
}
.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link {
    color: var(--theme-color4);
    font-weight: 900;
}
header nav .nav-link {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-end;
    justify-content: space-evenly;
    align-items: center;
}
header nav ul li a.nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 0%;
    transition: all .5s ease-in-out;
    height: 1px;
    background-color: var(--bg-theme-color2);

}
header nav .parentDropdown{
    position: relative;
}
header nav .dropdown-me{
    position: absolute;
    width: 200px;
    background: #fff;
    top: 250%;
    box-shadow: 2px 2px 5px 1px rgb(0 0 0 / 5%), -2px 0 5px 1px rgb(0 0 0 / 5%);
    padding: 10px 0 0;
    visibility: hidden;
    opacity: 0;
    transition: all .5s ease-out;
    line-height: 2;
    overflow: hidden;
    z-index: 88;
}
header nav .dropdown-me a{
    padding: 10px 0;
    line-height: 29px;
    font-weight: 400;
    font-size: 16px;
    color: var(--bg-theme-color1);
    text-align: left;
    margin: 0 30px;
    text-transform: capitalize;
    transition: all .2s ease;
}
header nav .dropdown-me a:hover{
    color: var(--theme-color2);
}

header nav .parentDropdown:hover .dropdown-me{
    visibility: visible;
    opacity: 1;
    top: 200%;
    
}
.nav-link.active::after, 
header nav .nav-link:hover::after{
    width: 100%;

}
header nav .parentDropdown li{
    
    border-bottom: 1px solid #8888882b;
}
header nav .nav-link i{
    margin: 0 5px;
}
header nav .searchIcon i{
    font-size: 24px;
    border-left: 1px solid #73787d;
    padding: 0 30px;
}


/* /////////////////////////////////////////// */
/* start main style  */
/* /////////////////////////////////////////// */

/* section one  */
.slider-wrapper .carousel-item{
    height: 100vh;
    text-align: center;
    padding: 10rem 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    line-height: 2;
}

.slider-wrapper .item1{
    background-image: url("../img/bg/1\ \(1\).jpg");

}
.slider-wrapper .item2{
    background-image: url("../img/bg/2\ \(1\).jpg");

}
.slider-wrapper .item3{
    background-image: url("../img/bg/3\ \(1\).jpg");

}
.slider-wrapper .carousel-control-next-icon, 
.carousel-control-prev-icon {
    padding: 20px;
    background-color: #73787d;
}
.slider-wrapper .carousel-item h2 {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.5;

    
}
.slider-wrapper .carousel-item p{
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
    margin: 20px auto 50px;
    max-width: 640px;
    font-family: var(--text-font);
}


/* section one end  */


/* start features section  */
.features-section{
    margin-top: -50px;
    position: relative;
    margin-bottom: 100px;
    padding: 0;
    z-index: 10000;
}
.features-section .bg{
    background-color: var(--bg-theme-color4);
    background-image: url("../img/bg/pattern-1.8c34e733.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px;
}
.features-section .card .card-body{
    padding: 15px;
}
.features-section .card .card-body h5{
    color: var(--theme-color1);
    font-weight: 700;
    margin-bottom: 18px;
}
.features-section .card .card-body .card-text{
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 20px;
}

.features-section .icon-box {
    position: relative;
    text-align: center;
    padding: 25px 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--bg-theme-color4);
    transition: all .4s ease-in-out;
    margin: 10px;
}
.icon-box .count {
    font-size: 45px;
    line-height: 1em;
    color: var(--theme-color1);
    opacity: .1;
    font-family: var(--style-font);
    transition: all .3s ease;}

.features-section .card:hover .icon-box {
    background-color: var(--bg-theme-color2);
}
.features-section .card:hover .count{
    color: var(--theme-color3);
}
.features-section .card{
    margin-bottom: 30px;
    transition: all .5s ease-in-out;
}
.features-section .card:hover{
    margin-top: -20px;
}
.features-section .bottom-text {
    background-color: var(--bg-theme-color1);
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: .1em;
    margin-top: 40px;

}
.features-section .icon-box i{
    font-size: 50px;
    margin-top: 20px;
    color: var(--theme-color2 );
    transition: all .5s ease-in-out;
}

.features-section .card:hover .icon-box i{
    color: var(--theme-color3);
}

/* end features section */

/* ////////////////////////////////////////////////////// */

/* start About section */
.about-section{
    overflow-x: hidden;
}
.about-section .content-column {
    position: relative;
    margin-bottom: 50px;
    z-index: 1;
}
.about-section .content-column .inner-column {
    position: relative;
    max-width: 80%;
    padding-top: 20px;
}
.sec-title .sub-title {
    position: relative;
    top: -8px;
    font-size: var(--sec-title-subtitle-font-size);
    color: var(--sec-title-subtitle-color);
    line-height: var(--sec-title-subtitle-line-height);
    font-weight: var(--sec-title-subtitle-font-weight);
    font-family: var(--sec-title-subtitle-font-family);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: .1em;
    padding-left: 12px;
}
.sec-title .sub-title:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "/";
    color: var(--theme-color2);
}
.sec-title h2 {
    font-size: var(--h2-font-size);
    letter-spacing: .01em;
    margin-top: -5px;
    margin-bottom: 0;
    color: var(--sec-title-color);
    font-family: var(--sec-title-font-family);
    font-weight: var(--sec-title-font-weight);
}
.about-section .content-column .sec-title h4 {
    color: var(--theme-color3);
    font-style: italic;
    text-decoration: underline;
    margin-top: 35px;
}
.about-section .content-column .sec-title .text {
    margin-top: 35px;
    color: var(--text-color);
    font-size: var(--body-font-size);
    font-family: var(--text-font);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
}
.about-block .inner {
    position: relative;
    padding-left: 80px;
    min-height: 68px;
}
.about-block:hover i {
    color: var(--theme-color1);
    transform: rotateY(-190deg);
}
.about-block i {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 64px;
    color: var(--theme-color2);
    transition: all .5s ease-in-out;
    line-height: 1em;
}
.about-block .title {
    position: relative;
    margin-top: 2px;
    margin-bottom: 0;
    font-size: var(--h5-font-size);
    font-weight: 700;
    color: var(--headings-color);
    font-family: var(--title-font);
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeInRight {
    animation-name: fadeInRight;
}
.about-section .bttnbg {
    margin: 40px 0;
}

.about-section .image-column {
    position: relative;
    margin-bottom: 35px;
}
.about-section .image-column .inner-column {
    position: relative;
    padding-left: 70px;
    /* margin-left: -90px; */
    visibility: visible;

}
.about-section .image-column .image-1 {
    position: relative;
    max-width: 450px;
    margin-bottom: 0;
}
.about-section .image-column .image-1 img {
    width: 100%;
}
.about-section .image-column .image-1:before {
    position: absolute;
    left: -30px;
    top: 0;
    height: 170px;
    width: 20px;
    background-color: var(--bg-theme-color2);
    content: "";
}
.overlay-anim:after {
    background: hsla(0,0%,100%,.3);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    opacity: 1;
    z-index: 9;
    pointer-events: none;
}
.overlay-anim:hover:after {
    height: 100%;
    opacity: 0;
    transition: all .4s linear;
}
.about-section .image-column .image-2 {
    position: absolute;
    right: 90px;
    top: 0;
    margin-bottom: 0;
}
.about-section .image-column .image-3 {
    position: absolute;
    right: 90px;
    bottom: 0;
    margin-bottom: 0;
}
.about-section .image-column .image-2 img, 
.about-section .image-column .image-3 img {
    width: 100%;
    max-width: 300px;
    height: 280px;
}
.about-section .image-column .stemp {
    position: absolute;
    right: 60px;
    top: 200px;
}
.about-section .experience {
    position: absolute;
    /* left: -60px; */
    bottom: 50px;
    min-width: 290px;
    background: #fff;
    padding: 10px;
    box-shadow: 0 15px 60px rgba(68,67,67,.08);
}
.bounce-y {
    animation: bounce-y 10s linear infinite;
}

@keyframes bounce-y {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(-30px)
    }

    to {
        transform: translateY(0)
    }
}

.about-section .experience .inner {
    position: relative;
    background: var(--gradient-2);
    min-height: 100px;
    padding-left: 100px;
    padding-top: 10px;
}
.about-section .experience .inner:before {
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    content: "";
    background-color: #fff;
}
.about-section .experience i{
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 64px;
    color: var(--theme-color1);
}
.about-section .experience .text {
    position: relative;
    font-size: 18px;
    line-height: 26px;
    color: var(--theme-color1);
}
.about-section .experience strong {
    position: relative;
    margin-top: 7px;
    font-size: 34px;
    line-height: 36px;
    color: var(--theme-color2);
    font-weight: 700;
    display: block;
}
/* end section About  */
/* ////////////////////////////////////////// */
/* start countries */

.countries-section {
    position: relative;
    padding: 120px 0;
    margin-top: 50px;
    z-index: 2;
}

.countries-section .bg-layer {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-image: url(../img/bg/pattern-2.891ee956.png);
    background-color: var(--bg-theme-color1);
    max-height: 425px;
}
.countries-section .sec-title {
    margin-bottom: 25px;
}
.sec-title {
    position: relative;
    margin-bottom: 40px;
}
.countries-section .sec-title .sub-title {
    color: #aab3bb;
}
.sec-title.light h2, .sec-title.light h3 {
    color: #fff;
}
.sec-title h2 {
    font-size: var(--sec-title-font-size);
    letter-spacing: .01em;
    margin-top: -5px;
    margin-bottom: 0;
}
.sec-title h1, .sec-title h2 {
    position: relative;
    color: var(--sec-title-color);
    font-family: var(--sec-title-font-family);
    font-weight: var(--sec-title-font-weight);
}
.countries-section .carousel-outer {
    position: relative;
    margin: 0 -165px;
}
.countries-section .slider{
    width: 95%;
    margin: 40px auto;
}

.inner-box {
    position: relative;
    text-align: center;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    background-color: #fff
}

.country-block .inner-box:hover .image img {
    transform: scale(1.1)
}

.country-block .image-box {
    position: relative
}

.country-block .image {
    position: relative;
    overflow: hidden;
    margin-bottom: 0
}

.country-block .image img {
    width: 100%;
    transition: all .3s ease
}

.country-block .image:before {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20px;
    width: 100%;
    overflow: hidden;
    background-position: 50%;
    background-image: url(/_next/static/media/curve.e3c8a7b0.png);
    content: "";
    z-index: 2
}

.country-block .content-box {
    position: relative;
    padding: 0 40px 35px
}

.country-block .content-box .flag {
    position: relative;
    display: block;
    margin: -48px auto 15px;
    height: 57px;
    width: 57px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    transition: all .3s ease;
    z-index: 2
}

.country-block .content-box .flag:hover {
    background-color: var(--bg-theme-color1);
    color: var(--theme-color2)
}



















































/* loading style  */
.loade{
    font-family: "Ubuntu", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    background-color:var(--bg-theme-color1);
    position: absolute;
    inset: 0;
    opacity: 1;
    visibility: visible;
    transition: all ease-in-out;
    overflow: hidden;
    z-index: 9999;
}
.loadeanimation{
    opacity: 0;
    visibility: hidden;
}

.loading-text {
    color: var(--theme-color2);
    font-size: 50px;
    font-weight: var(--h-font-weight);
}


