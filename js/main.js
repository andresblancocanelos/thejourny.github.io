/** =====================================
 * HAMBURGUER MENU ANIMATION
=====================================*/

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



/** =====================================
 * TEXT APPEAR ANIMATION
=====================================*/

const entranceAnimation = ()=> {
    let screenWidth = window.innerWidth
    const navLogo = document.querySelector('.nav-logo')
    const navMenu = document.querySelector('.nav-menu')
    const heroH1 = document.querySelector('.hero-section-left').childNodes[1]
    const heroH3 = document.querySelector('.hero-section-left').childNodes[3]
    const heroImg = document.querySelector('.hero-section-right')
    let tl = gsap.timeline()
    
    if(screenWidth < 769) {
        tl.from( [ navLogo, navMenu, heroH1, heroH3, heroImg ], {duration:1.5, scale:0.9, opacity:0, ease: "expo", stagger:0.3}, ">1")
    } else {
        tl.from( [ navLogo, navMenu, heroH1, heroH3, heroImg ], {duration:1.5, scale:0.9, opacity:0, y:-50, ease: "expo", stagger:0.3}, ">1")
    }

}
entranceAnimation()
