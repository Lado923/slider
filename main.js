const sliders = document.querySelectorAll('.slide')
const sliderLine =document.querySelector('.slider-line')
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*sliders.length + "px";
    sliders.forEach( item => {
        item.style.width = width + 'px';
    });
    console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider_prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = sliders.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider_next').addEventListener('click', function(){
    count++;
    if (count >= sliders.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    console.log("click")
    sliderLine.style.transform = 'translate(-'+ count * width+'px)';
}