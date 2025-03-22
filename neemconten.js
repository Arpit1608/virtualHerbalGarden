// for popup video

document.getElementById('openModal').addEventListener('click', function() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('hidden'); // <----- Show the modal
    const video = document.getElementById('popupVideo')
    video.play()  
});

document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('videoModal');
    modal.classList.add('hidden') 
    const video = document.getElementById('popupVideo');
    video.pause() 
    video.currentTime = 0 
});


// for sliding images
var slides = document.querySelectorAll('.slidee');
var butns = document.querySelectorAll('.btun')
let currenslide = 1 


//img sider
var manualNav = function(manual){
    slides.forEach((slidee) => {
        slidee.classList.remove('active');

        butns.forEach((btun) =>{
            btun.classList.remove('active');
        })
    })


    slides[manual].classList.add('active');
    butns[manual].classList.add('active');
}

butns.forEach((butns, i) => {
    butns.addEventListener("click", () => {
        manualNav(i);
        currenslide =i ;
    })
})



//auto play slides
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active')

    let i=1;

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlides) => {
                activeSlides.classList.remove('active')
            })



            slides[i].classList.add('active')
            butns[i].classList.add('active')
            i++;


            if(slides.length == i){
                i=0;
            }
            if(i >= slides.length){
                return;
            }

            repeater()
        }, 12000)
    }
    repeater()
}
    repeat()





//bookmark section

const book = document.querySelector('#culur');

function checkClass(){
    var elem = document.getElementsByClassName('bg-bookmark-color');
    if(elem.length > 0){
        book.addEventListener('click', () => {
            book.classList.remove('bg-bookmark-color')
        })
    }else{
        book.addEventListener('click', () => {
            book.classList.add('bg-bookmark-color')
        })
    }
}

