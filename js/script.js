 /*----------BURGER----------*/

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuItems = document.querySelectorAll('.menu__item');
let body = document.querySelector('body');

burger.addEventListener('click', AddClass);

function AddClass(){
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    for(let index = 0; index < menuItems.length; index++){
        const menuItem = menuItems[index];
        menuItem.classList.toggle('active');
    }
}
/*-----------SWIPER--------------*/

new Swiper('.swiper-container',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides:true,
    slidesPerView: 'auto',
    loop: true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    spaceBetween: 10,
   autoplay:{
        delay:2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    keyboard:{
        enabled: true,
        onlyInViewport:true,
        pageUpDown:true,
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 3,
        },
        1100:{
            slidesPerView: 4,
        },
        1450:{
            slidesPerView: 5,
        },
    },
    freeMode: true,
});
/*-------------ANIMATION------------*/

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            animItemOffset = offset(animItem).top// позиция объекта относительно верха
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300); 
}
