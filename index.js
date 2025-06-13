const srch = document.querySelector("#search-icon")
const cart = document.querySelector("#cart-icon")
const crs = document.querySelector('.full');
const srp = document.querySelector('.search-form');


cart.addEventListener("click", function () {
    gsap.timeline().to(".full ", {
        right: 0,
        duration: .4,
        ease: "power2.out",
        opacity:1,
    })
    gsap.timeline().from("img", {
        scale: 1.2,
        opacity: 0.002,
        duration: 0.7,
        stagger: 0.32,
    })
    gsap.timeline().from(".content", {
        x: 150,
        opacity: 0.02,
        duration: 0.8,
        stagger: 0.29,
    })
})
srch.addEventListener("click", function () {
    gsap.to(".search-form", {
        // x: -200,
        opacity: 1,
        duration: 0.8,
        ease: "power5.out",
    })
})

document.querySelector(".home").addEventListener("click", function () {

    srp.style.opacity = '0';
    srp.style.transition = 'ease-out .3s';
})
document.querySelector(".home").addEventListener("click", function () {

    crs.style.opacity = '0';
    crs.style.transition = 'ease-out .3s';
})




