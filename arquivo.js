window.onload = function(e){
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position='fixed';

        } else{
            menu.style.position = 'initial';
        }
    });
} 

const hamburguer = document.querySelector(".hamburguer");
const some = document.querySelector(".some");
const header = document.querySelector("header");


header.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    some.classList.toggle('active');
    
   
})

// hamburguer.addEventListener("click", () =>{
//     hamburguer.classList.toggle('active');
//     some.classList.toggle('active');
   
// })


const navLinksEls = document.querySelectorAll('.itens');
const sectionEls = document.querySelectorAll('section');


let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 200)) {
            currentSection = sectionEl.id;
        }
    });

    navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSection)){
            document.querySelector('.actives').classList.remove('actives');
            navLinksEl.classList.add('actives');
        }
    })
})














// let sections = document.querySelectorAll('section');
// let linkss = document.querySelectorAll('header li a');

// window.onscroll = () => {
//     sections.fonEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             linkss.fonEach( links => {
//                 links.classList.remove('active');
//                 document.querySelector('header li a [href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

// };