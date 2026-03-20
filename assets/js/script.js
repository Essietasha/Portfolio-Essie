//Slide Animations
window.addEventListener('DOMContentLoaded', () => {
    const projectsTitleGrid = document.querySelector('.projectsTitleGrid');
    const intro = document.querySelector('.intro');

    projectsTitleGrid.classList.add('slideup');
    intro.classList.add('textslide');
})

const navcircle = document.querySelector('.navCircle');
const projectsEl = document.querySelector('.projects');
function slideUpProjects(){
    projectsEl.classList.add('slideup');
}
navcircle.addEventListener('click', slideUpProjects);


//Display and Hide Projects Content
let reactBtn;
let javascriptBtn;
let reactPage;
let javascriptPage;
let projectsPage;
reactBtn = document.getElementById('react');
javascriptBtn = document.getElementById('javascript');
javascriptPage = document.querySelector('.projectsJs');
reactPage = document.querySelector('.ReactProjects');
projectsPage = document.querySelector('.projects');

reactBtn.addEventListener('click', () => {
    reactPage.style.display = 'block';
    reactPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    javascriptPage.style.display = 'none';
});

javascriptBtn.addEventListener('click', () => {
    javascriptPage.style.display = 'block';
    javascriptPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    reactPage.style.display = 'none';
});

// Active class
const tabs = document.querySelectorAll('.projectSwitcher');
const reactSection = document.querySelector('.ReactProjects');
const jsSection = document.querySelector('.projectsJs');

function handleButtonClick(event) {
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    if (event.target.id === 'react') {
        reactSection.classList.add('active-content');
        reactSection.classList.remove('hidden-content');
        
        jsSection.classList.add('hidden-content');
        jsSection.classList.remove('active-content');
    } else {
        jsSection.classList.add('active-content');
        jsSection.classList.remove('hidden-content');
        
        reactSection.classList.add('hidden-content');
        reactSection.classList.remove('active-content');
    }
}

tabs.forEach(tab => tab.addEventListener('click', handleButtonClick));

// Set initial state
reactSection.classList.add('active-content');
jsSection.classList.add('hidden-content');


//Keep Animation Active on page view.
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.slideleft');

    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slidein');
                // Reset animation
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('slidein');
                }, { once: true });
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

//Repeat Slide
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.repeatSlides');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('repeatslide');
                // Reset animation
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('repeatslide');
                }, { once: true });
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


// Projects Slider
const slideIndices = {}; // Store current index per slider

function changeSlide(button, direction) {
    const slider = button.closest('.slider');
    const sliderName = slider.getAttribute('data-slider');

    const slides = slider.querySelectorAll('div[class^="slide"]');
    if (!slideIndices[sliderName]) slideIndices[sliderName] = 1;

    slideIndices[sliderName] += direction;

    if (slideIndices[sliderName] > slides.length) slideIndices[sliderName] = 1;
    if (slideIndices[sliderName] < 1) slideIndices[sliderName] = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndices[sliderName] - 1].style.display = "block";
}

// Extra: Initialize all sliders on page load
document.querySelectorAll('.slider').forEach(slider => {
    const sliderName = slider.getAttribute('data-slider');
    const slides = slider.querySelectorAll('div[class^="slide"]');
    slideIndices[sliderName] = 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[0].style.display = "block";
});

// //Active Class
// let parentDiv;
// let childDivs;
// parentDiv = document.getElementById('parentDiv');
// childDivs = parentDiv.querySelectorAll('div');

// function handleButtonClick(event){
//     childDivs.forEach(childDiv => {
//         childDiv.classList.remove('active');
//     });

//     event.target.classList.add('active');
// }

// childDivs.forEach(childDiv => {
//     childDiv.addEventListener('click', handleButtonClick);
// });


//Nav Element Scroll Event
// window.addEventListener('scroll', () => {
//     const navDivElement = document.getElementById('navDivEl');
//     const navLinks = navDivElement.querySelectorAll('a');

//     navLinks.forEach(link => {
//         link.style.color = 'black';
//         if (window.scrollY > 400 ){
//             link.style.color = "black";

//             if(window.scrollY > 2000){
//                 link.style.color = "white";
//             }
//             else{
//                 link.style.color = "black";
//             }
//         }
//         else{
//             link.style.color = "white";
//         }
//     });
// });

// PROJECTS Slider
// let slideIndex = 1;
// showSlides(slideIndex);

// function addSlides(index) {
//     setTimeout(() =>{
//         showSlides(slideIndex += index);
//     }, 1000)
//   };

// function showSlides(index) {
//     let i;
//     let slide = document.getElementsByClassName("slide");

//     if (index > slide.length) { slideIndex = 1 }
//     if (index < 1) { slideIndex = slide.length }

//     for (i = 0; i < slide.length; i++){
//         slide[i].style.display = "none";
//     }
    
//     slide[slideIndex-1].style.display = "block";
// };