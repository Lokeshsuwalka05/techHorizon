/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav--menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__bracket1',1.5, {opacity:0,y:-300,delay:.2})
gsap.from('.home__bracket2',1.5, {opacity:0,y:-300,delay:.2})
gsap.from('.home__bracket3',1.5, {opacity:0,y:-300,delay:.2})
gsap.from('.home__bracket4',1.5, {opacity:0,y:-300,delay:.2})
gsap.from('.home__bracket5',1.5, {opacity:0,y:-300,delay:.2})
gsap.from('.home__bracket6',1.5, {opacity:0,y:-300,delay:.9})
gsap.from('.home__computer',1.5, {opacity:0,y:300,delay:.3})
gsap.from('.home__cloud-1',1.5, {opacity:0,y:200,delay:1.2})
gsap.from('.home__cloud-2',1.5, {opacity:0,x:200,delay:1.3})
gsap.from('.home__content',1.5, {opacity:0,y:-100,delay:1.4})
gsap.from('.home__title img',1.5, {opacity:0,x:100,delay:1.6})




// // JavaScript for dropdown toggle
// document.addEventListener("DOMContentLoaded", function() {
//     const dropdowns = document.querySelectorAll('.dropdown');
    
//     dropdowns.forEach(dropdown => {
//         const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
//         const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
//         dropdownToggle.addEventListener('click', function() {
//             dropdownMenu.classList.toggle('show');
//         });
        
//         // Close dropdown when clicking outside
//         window.addEventListener('click', function(e) {
//             if (!dropdown.contains(e.target)) {
//                 dropdownMenu.classList.remove('show');
//             }
//         });
//     });
// });



                    //============  js for clouds movement============//

                    const clouds1 = document.getElementsByClassName('home__cloud-1');
                    const clouds2 = document.getElementsByClassName('home__cloud-2');
                    
                    window.addEventListener('scroll', () => {
                        const scrollValue = window.scrollY;
                        
                        // Move home__cloud-1 to the left
                        Array.from(clouds1).forEach(cloud => {
                            const speed = 4; 
                            cloud.style.transform = `translateX(-${scrollValue * speed}px)`; 
                        });
                    
                        // Move home__cloud-2 to the right
                        Array.from(clouds2).forEach(cloud => {
                            const speed = 2.5; 
                            cloud.style.transform = `translateX(${scrollValue * speed}px)`; 
                        });
                    });
                    
                    //============  js for TECHNOLOGY SECTION ============//
                    document.addEventListener("DOMContentLoaded", function() {
                        const cards = document.querySelectorAll('.card');
                        
                        const observer = new IntersectionObserver(entries => {
                          entries.forEach(entry => {
                            if (entry.isIntersecting) {
                              // Remove active class from all cards
                              cards.forEach(card => {
                                card.classList.remove('active');
                              });
                              
                              // Add active class to the card in view
                              entry.target.classList.add('active');
                            }
                          });
                        }, { threshold: 0.5 });
                      
                        cards.forEach(card => {
                          observer.observe(card);
                        });
                      });
                      