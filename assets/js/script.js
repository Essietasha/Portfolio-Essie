//OnLoad Event
window.addEventListener('DOMContentLoaded', () => {
    const projectsTitleGrid = document.querySelector('.projectsTitleGrid');
    const intro = document.querySelector('.intro');

    projectsTitleGrid.classList.add('slideup');
    intro.classList.add('textslide');
})


//Slide Animation
const navcircle = document.querySelector('.navCircle');
const projectsEl = document.querySelector('.projects');
function slideUpProjects(){
    projectsEl.classList.add('slideup');
}
navcircle.addEventListener('click', slideUpProjects);


//Display and Hide Projects Content
let reactBtn;
let javascriptBtn;
let pythonBtn;
let reactPage;
let javascriptPage;
let pythonPage;
let projectsPage;
reactBtn = document.getElementById('react');
javascriptBtn = document.getElementById('javascript');
pythonBtn = document.getElementById('python');
javascriptPage = document.querySelector('.projectsJs');
reactPage = document.querySelector('.ReactProjects');
pythonPage = document.querySelector('.PythonProjects');
projectsPage = document.querySelector('.projects');

reactBtn.addEventListener('click', () => {
    reactPage.style.display = 'block';
    reactPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    javascriptPage.style.display = 'none';
    pythonPage.style.display = 'none';
});

javascriptBtn.addEventListener('click', () => {
    javascriptPage.style.display = 'block';
    javascriptPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    reactPage.style.display = 'none';
    pythonPage.style.display = 'none';
});

pythonBtn.addEventListener('click', () => {
    pythonPage.style.display = 'block';
    pythonPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    reactPage.style.display = 'none';
    javascriptPage.style.display = 'none';
});


//Active Class
let parentDiv;
let childDivs;
parentDiv = document.getElementById('parentDiv');
childDivs = parentDiv.querySelectorAll('div');

function handleButtonClick(event){
    childDivs.forEach(childDiv => {
        childDiv.classList.remove('active');
    });

    //The element/div that triggered the click event.
    event.target.classList.add('active');
}

childDivs.forEach(childDiv => {
    childDiv.addEventListener('click', handleButtonClick);
});



//Keep Animation Active each time section is viewed
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



//PROJECTS 
//Project One Slider
let slideIndex = 1;
showSlides(slideIndex);

function addSlides(index) {
    setTimeout(() =>{
        showSlides(slideIndex += index);
    }, 1000)
  };

function showSlides(index) {
    let i;
    let slide = document.getElementsByClassName("slide");

    if (index > slide.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slide.length }

    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    
    slide[slideIndex-1].style.display = "block";
};


//Project Two Slider
let slideIndexII = 1;
showSlidesII(slideIndexII);

function addSlidesII(indexII) {
    setTimeout(() =>{
        showSlidesII(slideIndexII += indexII);
    }, 1000)
  };

function showSlidesII(indexII) {
    let i;
    let slideII = document.getElementsByClassName("slideII");

    if (indexII > slideII.length) { slideIndexII = 1 }
    if (indexII < 1) { slideIndexII = slideII.length }

    for (i = 0; i < slideII.length; i++){
        slideII[i].style.display = "none";
    }
    
    slideII[slideIndexII-1].style.display = "block";
};


//Project Three Slider
let slideIndexIII = 1;
showSlidesIII(slideIndexIII);

function addSlidesIII(indexIII) {
    setTimeout(() =>{
        showSlidesIII(slideIndexIII += indexIII);
    }, 1000)
  };

function showSlidesIII(indexIII) {
    let i;
    let slideIII = document.getElementsByClassName("slideIII");

    if (indexIII > slideIII.length) { slideIndexIII = 1 }
    if (indexIII < 1) { slideIndexIII = slideIII.length }

    for (i = 0; i < slideIII.length; i++){
        slideIII[i].style.display = "none";
    }
    
    slideIII[slideIndexIII-1].style.display = "block";
};



//Project Four Slider
let slideIndexIIII = 1;
showSlidesIIII(slideIndexIIII);

function addSlidesIIII(indexIIII) {
    setTimeout(() =>{
        showSlidesIIII(slideIndexIIII += indexIIII);
    }, 1000)
  };

function showSlidesIIII(indexIIII) {
    let i;
    let slideIIII = document.getElementsByClassName("slideIIII");

    if (indexIIII > slideIIII.length) { slideIndexIIII = 1 }
    if (indexIIII < 1) { slideIndexIIII = slideIIII.length }

    for (i = 0; i < slideIIII.length; i++){
        slideIIII[i].style.display = "none";
    }
    
    slideIIII[slideIndexIIII-1].style.display = "block";
};


//Project Five Slider
let slideIndexIV = 1;
showSlidesIV(slideIndexIV);

function addSlidesIV(indexIV) {
    setTimeout(() =>{
        showSlidesIV(slideIndexIV += indexIV);
    }, 1000)
  };

function showSlidesIV(indexIV) {
    let i;
    let slideIV = document.getElementsByClassName("slideIV");

    if (indexIV > slideIV.length) { slideIndexIV = 1 }
    if (indexIV < 1) { slideIndexIV = slideIV.length }

    for (i = 0; i < slideIV.length; i++){
        slideIV[i].style.display = "none";
    }
    
    slideIV[slideIndexIV-1].style.display = "block";
};


//Project Six Slider
// let slideIndexVI = 1;
// showSlidesVI(slideIndexVI);

// function addSlidesVI(indexVI) {
//     setTimeout(() =>{
//         showSlidesVI(slideIndexVI += indexVI);
//     }, 1000)
//   };

// function showSlidesVI(indexVI) {
//     let i;
//     let slideVI = document.getElementsByClassName("slideVI");

//     if (indexVI > slideVI.length) { slideIndexVI = 1 }
//     if (indexVI < 1) { slideIndexVI = slideVI.length }

//     for (i = 0; i < slideVI.length; i++){
//         slideVI[i].style.display = "none";
//     }
    
//     slideVI[slideIndexVI-1].style.display = "block";
// };


//Project Seven Slider
let slideIndexVII = 1;
showSlidesVII(slideIndexVII);

function addSlidesVII(indexVII) {
    setTimeout(() =>{
        showSlidesVII(slideIndexVII += indexVII);
    }, 1000)
  };

function showSlidesVII(indexVII) {
    let i;
    let slideVII = document.getElementsByClassName("slideVII");

    if (indexVII > slideVII.length) { slideIndexVII = 1 }
    if (indexVII < 1) { slideIndexVII = slideVI.length }

    for (i = 0; i < slideVII.length; i++){
        slideVII[i].style.display = "none";
    }
    
    slideVII[slideIndexVII-1].style.display = "block";
};


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


// //OnLoad Event
// window.addEventListener('DOMContentLoaded', () => {
//     const projectsGrid = document.querySelector('.projectsGrid');
//     const intro = document.querySelector('.intro');

//     projectsGrid.classList.add('slideup');
//     intro.classList.add('textslide');
// })


// //Slide Animation
// const navcircle = document.querySelector('.navCircle');
// const projectsEl = document.querySelector('.projects');
// function slideUpProjects(){
//     projectsEl.classList.add('slideup');
// }
// navcircle.addEventListener('click', slideUpProjects);


// //Display and Hide Projects Content
// let reactBtn;
// let javascriptBtn;
// let pythonBtn;
// let reactPage;
// let javascriptPage;
// let pythonPage;
// let projectsPage;
// reactBtn = document.getElementById('react');
// javascriptBtn = document.getElementById('javascript');
// pythonBtn = document.getElementById('python');
// javascriptPage = document.querySelector('.projectsJs');
// reactPage = document.querySelector('.ReactProjects');
// pythonPage = document.querySelector('.PythonProjects');
// projectsPage = document.querySelector('.projects');

// reactBtn.addEventListener('click', () => {
//     reactPage.style.display = 'block';
//     reactPage.classList.add('slideup');
//     projectsPage.classList.add('slideabove');
//     javascriptPage.style.display = 'none';
//     pythonPage.style.display = 'none';
// });

// javascriptBtn.addEventListener('click', () => {
//     javascriptPage.style.display = 'block';
//     javascriptPage.classList.add('slideup');
//     projectsPage.classList.add('slideabove');
//     reactPage.style.display = 'none';
//     pythonPage.style.display = 'none';
// });

// pythonBtn.addEventListener('click', () => {
//     pythonPage.style.display = 'block';
//     pythonPage.classList.add('slideup');
//     projectsPage.classList.add('slideabove');
//     reactPage.style.display = 'none';
//     javascriptPage.style.display = 'none';
// });


// //Active Class
// let parentDiv;
// let childDivs;
// parentDiv = document.getElementById('parentDiv');
// childDivs = parentDiv.querySelectorAll('div');

// function handleButtonClick(event){
//     childDivs.forEach(childDiv => {
//         childDiv.classList.remove('active');
//     });

//     //The element/div that triggered the click event.
//     event.target.classList.add('active');
// }

// childDivs.forEach(childDiv => {
//     childDiv.addEventListener('click', handleButtonClick);
// });



// //Keep Animation Active each time section is viewed
// window.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('.slideleft');

//     const options = {
//         root: null, // relative to the viewport
//         rootMargin: '0px',
//         threshold: 0.1 // trigger when 10% of the section is visible
//     };

//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('slidein');
//                 // Reset animation
//                 entry.target.addEventListener('animationend', () => {
//                     entry.target.classList.remove('slidein');
//                 }, { once: true });
//             }
//         });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });

// //Repeat Slide
// window.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('.repeatSlides');

//     const options = {
//         root: null, 
//         rootMargin: '0px',
//         threshold: 0.1 
//     };

//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('repeatslide');
//                 // Reset animation
//                 entry.target.addEventListener('animationend', () => {
//                     entry.target.classList.remove('repeatslide');
//                 }, { once: true });
//             }
//         });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });



// //PROJECTS 
// //Project One Slider
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


// //Project Two Slider
// let slideIndexII = 1;
// showSlidesII(slideIndexII);

// function addSlidesII(indexII) {
//     setTimeout(() =>{
//         showSlidesII(slideIndexII += indexII);
//     }, 1000)
//   };

// function showSlidesII(indexII) {
//     let i;
//     let slideII = document.getElementsByClassName("slideII");

//     if (indexII > slideII.length) { slideIndexII = 1 }
//     if (indexII < 1) { slideIndexII = slideII.length }

//     for (i = 0; i < slideII.length; i++){
//         slideII[i].style.display = "none";
//     }
    
//     slideII[slideIndexII-1].style.display = "block";
// };


// //Project Three Slider
// let slideIndexIII = 1;
// showSlidesIII(slideIndexIII);

// function addSlidesIII(indexIII) {
//     setTimeout(() =>{
//         showSlidesIII(slideIndexIII += indexIII);
//     }, 1000)
//   };

// function showSlidesIII(indexIII) {
//     let i;
//     let slideIII = document.getElementsByClassName("slideIII");

//     if (indexIII > slideIII.length) { slideIndexIII = 1 }
//     if (indexIII < 1) { slideIndexIII = slideIII.length }

//     for (i = 0; i < slideIII.length; i++){
//         slideIII[i].style.display = "none";
//     }
    
//     slideIII[slideIndexIII-1].style.display = "block";
// };



// //Project Four Slider
// let slideIndexIIII = 1;
// showSlidesIIII(slideIndexIIII);

// function addSlidesIIII(indexIIII) {
//     setTimeout(() =>{
//         showSlidesIIII(slideIndexIIII += indexIIII);
//     }, 1000)
//   };

// function showSlidesIIII(indexIIII) {
//     let i;
//     let slideIIII = document.getElementsByClassName("slideIIII");

//     if (indexIIII > slideIIII.length) { slideIndexIIII = 1 }
//     if (indexIIII < 1) { slideIndexIIII = slideIIII.length }

//     for (i = 0; i < slideIIII.length; i++){
//         slideIIII[i].style.display = "none";
//     }
    
//     slideIIII[slideIndexIIII-1].style.display = "block";
// };


// //Project Five Slider
// let slideIndexIV = 1;
// showSlidesIV(slideIndexIV);

// function slideIndexIV(indexIV) {
//     setTimeout(() =>{
//         showSlidesIV(slideIndexIV += indexIV);
//     }, 1000)
//   };

// function showSlidesIV(indexIV) {
//     let i;
//     let slideIV = document.getElementsByClassName("slideIV");

//     if (indexIV > slideIV.length) { slideIndexIV = 1 }
//     if (indexIV < 1) { slideIndexIV = slideIIII.length }

//     for (i = 0; i < slideIV.length; i++){
//         slideIV[i].style.display = "none";
//     }
    
//     slideIV[slideIndexIV-1].style.display = "block";
// };

// //Nav Element Scroll Event
// // window.addEventListener('scroll', () => {
// //     const navDivElement = document.getElementById('navDivEl');
// //     const navLinks = navDivElement.querySelectorAll('a');

// //     navLinks.forEach(link => {
// //         link.style.color = 'black';
// //         if (window.scrollY > 400 ){
// //             link.style.color = "black";

// //             if(window.scrollY > 2000){
// //                 link.style.color = "white";
// //             }
// //             else{
// //                 link.style.color = "black";
// //             }
// //         }
// //         else{
// //             link.style.color = "white";
// //         }
// //     });
// // });