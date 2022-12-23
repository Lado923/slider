const sliders = document.querySelectorAll('.slide')
const sliderLine =document.querySelector('.slider-line')
let count = 0;
let width;

//swiper
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

const logBlock = document.querySelector('.slider_container');

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
};

function handleTouchMove(event) {
    if(!x1 || !y1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
       if(xDiff > 0) {
        leftSkroll();
    
    }
        else {
              rightSkroll();
        }
        x1 = null;
y1 = null;
} else {
    if(yDiff > 0) {console.log("down")}
    else {console.log("up")}
    x1 = null;
y1 = null;
}

}



//

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*sliders.length + "px";
    sliders.forEach( item => {
        item.style.width = width + 'px';
    });
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider_prev').addEventListener('click', function(){
    leftSkroll();
})
document.querySelector('.slider_next').addEventListener('click', function(){
    rightSkroll();
});

function leftSkroll(){
        count--;
        if (count < 0) {
            count = sliders.length - 1;
        }
        rollSlider();

}

function rightSkroll(){
        count++;
        if (count >= sliders.length) {
            count = 0;
        }
        rollSlider();
}

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+ count * width+'px)';
}