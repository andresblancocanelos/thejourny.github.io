

/*====================================
HAMBURGER MENU ANIMATION
====================================*/

//

function menuAnimation() {
    document.querySelector('.ham-icon').addEventListener('click', function(e) {
        if(document.querySelector('.menu-box')){
            document.querySelector('.menu-box').classList.add('menu-box-active');
            document.querySelector('.menu-box').classList.remove('menu-box');
            
            //add stop scrolling
            document.querySelector('body').classList.add('stop-scrolling')
        } else {
            document.querySelector('.menu-box-active').classList.add('menu-box');
            document.querySelector('.menu-box-active').classList.remove('menu-box-active');
            //remove stop scrolling
            document.querySelector('body').classList.remove('stop-scrolling')
        }
    })
}
menuAnimation();