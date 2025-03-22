
// for hamburger menu............ 
const navDialog = document.getElementById('nav-dialogue')

function handlemenu(){
    navDialog.classList.toggle('hidden');
}



// for sliding animation

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext= 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type){
    let itemslider = document.querySelectorAll('.carousel .list .items')
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemslider[0])
        thumbnailDom.appendChild(itemthumbnail[0])
        carouselDom.classList.add('next')
    }else{
        let positionLastItem = itemslider.length - 1;
        listItemDom.prepend(itemslider[positionLastItem]);
        thumbnailDom.prepend(itemthumbnail[positionLastItem]);
        carouselDom.classList.add('prev')
    }


    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {       //settimeout will remove the class form carousel after 3 sec so that we can again click on next button
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);


    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
    
}




//for body-portion animation

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i=0 ; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop= reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}






//for scroll sliding effect 
/* [2.] */const initialtranslateLTR = -(48*4) ; 
const initialtranslateRTL = 36*4 ; 

function setupintersectionobserver(element, mLTR, speed){ //mLTR is move left to right 
   /*2.*/ const intersectioncallback = (entries)=>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler) //to hamne yee banaya hai ki jab scroll bbar neeche aega to hamaaree icons move karenge in X axis scroll event laga rahe hai 
        }else{
            document.removeEventListener('scroll', scrollHandler)
        }

    }

   /*1.*/ const intersectionObserver = new IntersectionObserver(intersectioncallback); //IntersecctionObserver ke underham ek call back pass karwate hai and hame usme bahut sari entries milti hai and un entries ke through ham batate hai ki ye ab scroll ho raha hai ya ye abhi observer ho raha hai ect 

   /*3.*/ intersectionObserver.observe(element) ///iss line ke through yee observe karta hai 



   function scrollHandler(){
      /* [1.] */  const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed //to scrollHandler me kya hoga ki jitna scroll y axis me hoga utna icons x axis me move karega tot jo translateX hai usme jo window.innerheight hai uska meaning hai total height from top to botton - element.getBoundingClientRect().top means height from top to first line1 

      /* [3.] */  let translatetotal = 0 //translatetotal islia banaya because agar ham translatetotal nahi banaenge to `translateX(${translate}px)` hoga and uski wajah se jo hamne yee translte-x-48/36 liha tha html me woo bigad jaega to uss translte-x-48/36 ko bhi rakhna hai and sat hi sat usse x axis me tranlate bhi karna hai islia un dono ko add kar dia
        if(mLTR){
            translatetotal = translateX + initialtranslateLTR
        }else{
            translatetotal = -(translateX + initialtranslateRTL)
        }

     /* [4.] */   element.style.transform = `translateX(${translatetotal}px)`
   }
}

const line4 = document.getElementById('fastline');
setupintersectionobserver(line4, true, 0.7)





//for active link in navigation bar

const navLinkEles = document.querySelectorAll('.nav_link');

navLinkEles.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        navLinkEl.classList.add('active');
    })
})

