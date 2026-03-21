//Slide Animations
const intro = document.querySelector('.intro');
const projectsTitleGrid = document.querySelector('.projectsTitleGrid');
if (intro && projectsTitleGrid) {
    window.addEventListener('DOMContentLoaded', () => {
        projectsTitleGrid.classList.add('slideup');
        intro.classList.add('textslide');
    });
}

const navcircle = document.querySelector('.navCircle');
const projectsEl = document.querySelector('.projects');
if (navcircle && projectsEl) {
    navcircle.addEventListener('click', () => {
        projectsEl.classList.add('slideup');
    });
}


//Display and Hide Projects Content
const reactBtn = document.getElementById('react');
const javascriptBtn = document.getElementById('javascript');
const reactPage = document.querySelector('.ReactProjects');
const javascriptPage = document.querySelector('.projectsJs');
const projectsPage = document.querySelector('.projects');

if (reactBtn && javascriptBtn && reactPage && javascriptPage) {
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
}

// Active class
const tabs = document.querySelectorAll('.projectSwitcher');
const reactSection = document.querySelector('.ReactProjects');
const jsSection = document.querySelector('.projectsJs');

if (reactSection && jsSection) {
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
}


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


// PROJECTS HTML
const projects = [
    {
        image: "images/brookside1.jpg",
        title: "Brookside College",
        description: "This is a demo university website built with pure HTML, CSS and Javascript",
        github: "https://github.com/Essietasha/Brookside-College"
    },
    {
        image: "images/englishdict.png",
        title: "English Dictionary",
        description: "This project is an English dictionary web app that retrieves definitions from an API. Type a word into the input field and hit enter to see its definition, pronunciation, and hear the word pronounced correctly. The app also includes a loading effect and error handling for no internet connectivity.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/english-dictionary-app"
    },
    {
        image: "images/randomquote.png ",
        title: "Random Quote Generator",
        description: "A sleek and modern random quote generator using JavaScript. With a glass morphism design, the website will display a title and a quote with the author's name. Will be using an API to generate these random quotes and creating loading effects using try and catch methods and asynchronous functions.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/random-quote-generator"
    },
    {
        image: "images/bmicalc2.jpg",
        title: "Bmi Calculator",
        description: "This project aims to create a body mass index calculator. There are two input fields where the user can enter their height in cm and weight in kg. By clicking the calculate button, the BMI will be calculated and displayed along with the weight condition.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/bmi-calculator"
    },
    {
        image: "images/randomphotos.png",
        title: "Random Photos Generator",
        description: "A random image feed that displays images from any website. The images are randomly refreshed with each page refresh. Inclusive of a button to add new random images. Will use JavaScript to fetch images from an API and manipulate the DOM to display them on the website.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/random-photos-project"
    },
    {
        image: "images/mathematical.png",
        title: "Mathematical Quiz App",
        description: "This multiplication app features a question section, an input section, a submit button, and a score section. The question section displays a random multiplication question every time the page refreshes, and the user can answer in the input section. If the answer is correct, the score increases by one, and the next question appears.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/Mathematical%20Questions%20App"
    },
    {
        image: "images/tipcalc3.png",
        title: "Tip Calculator",
        description: "This project's interface comprises a container labeled Tip Calculator with two input fields: one for the bill amount and the other for the tip percentage. JavaScript is utilized to obtain the values of the two input fields and calculate the total amount based on these values.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/tip-calculator-project"
    },
    {
        image: "images/calendar-full.png",
        title: "Full Calendar App",
        description: "This project entails building a full-month calendar using HTML, CSS, and JavaScript. The calendar includes a header displaying the current month and date, all dates of the month from 1 to 30, and accurately reflects today's date. Everything is dynamically generated and automatically updates based on the current date and month. .",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/calendar-app-full-calendar"
    },
    {
        image: "images/stopwatch1.png",
        title: "Stopwatch Project",
        description: "In this project, a timer is displayed at the centre, along with three buttons - start, stop, and reset.  JavaScript is used to get the browser’s time, manipulate the content, replace it with the calculated time, and provide the start, stop, and reset functionality.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/stop-watch"
    },
    {
        image: "images/temperature2.jpg",
        title: "Temperature Converter",
        description: "This project includes three inputs for Celsius, Fahrenheit, and Kelvin temperature formats. When a user changes any of these inputs, a real-time change will be seen in other input fields. The oninput event listener is used to track changes inside the inputs alongside a switch statement",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/temperature-converter"
    },
    {
        image: "images/rsp5.png",
        title: "Rock Paper Scissors Game",
        description: "This project features a rock, paper, and scissors game. The computer will also choose a random option, and the results will be displayed. You can win, lose, or tie. Scores are tracked at the bottom. JavaScript is used to generate the computer's choice and compare the results.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/rock-paper-scissors"
    },
    {
        image: "images/movie1.png",
        title: "Movie Trailer Pop",
        description: "This project involves creating a movie trailer pop-up with an image, movie title, and Loren Ipsum text displayed on the page. Clicking on the Watch Now button will open a video pop-up where. Closing the video will reset it to the 0-second mark.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/movie-trailer-popup"
    },
    {
        image: "images/calc5.jpg",
        title: "Basic Calculator",
        description: "This is a basic calculator project that carries out mathematical operations.",
        github: "https://github.com/Essietasha/Bnbly"
    },
    {
        image: "images/recipejson1.jpg",
        title: "Recipe Book App I",
        description: "In this project, a recipe book application that features a variety of recipes obtained through a JSON File. On click of each view button, different recipes are displayed on the screen, each being fetched from the JSON file and updated on the screen.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/recipe-book-app-json"
    },
    {
        image: "images/agecalc2.jpg",
        title: "Age Calculator Project",
        description: "This project features a container with the title age calculator with an input of a date. If a user clicks on the date input, he can choose the date of his birthday. Age is calculated based on input and output displayed showing the user’s years of age.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/age-calculator"
    },
    {
        image: "images/weight2.jpg",
        title: "Weight Converter",
        description: "Here is weight converter project that converts pounds to kilograms. The webpage features an input field where users can enter a weight in pounds, and the equivalent weight is displayed in kilograms, ounces and grams. On clicking the rest button, the result is removed, and the input field is emptied.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/weight-converter"
    },
    {
        image: "images/carousel1.jpg",
        title: "Testimonial Slider",
        description: "In this project, a testimonial slider is built using HTML, CSS and JavaScript. It uses buttons to change the sliders forth and back.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/testimonial-slider"
    },
    {
        image: "images/idcard2.png",
        title: "ID Card Generator",
        description: "This project aims to create a demo identity card for a user. There is a form element displayed on the screen. Upon filling this form correctly, an ID card is generated for the user, otherwise, an error message is displayed if form criteria isnt met.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/id-card-profiler"
    },
    {
        image: "images/dicegame1.jpg",
        title: "Dice Game Project",
        description: "This project features two dices at the center of the screen each belonging to a player and a PLAY button. To achieve this, a JavaScript event listener is added to the button. The listener generates a random number, saves it to an array, and updates the history list.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/dice-game"
    },
    {
        image: "images/reciperandom2.jpg",
        title: "Recipe Book App II",
        description: "In this project, a recipe book application that features a variety of recipes obtained through a random recipe element selector. Each time the refresh button is clicked or the page is refreshed, a new set of recipes with distinct ingredients will be displayed.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/recipe-book-app-random"
    },
    {
        image: "images/conference4.png",
        title: "Tabs Section Project",
        description: "The tabs project involves creating a tab section that includes numerous tabs, each with a title and corresponding text. When any tab is clicked on, the title will be changed accordingly. We will also add an elegant hovering effect to each tab, and when a user selects a tab, its background color will change.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/tabs-section"
    },
    {
        image: "images/pomodorotimer1.jpg",
        title: "Timer Project",
        description: "The Pomodoro timer features a countdown clock and three functional buttons. Upon clicking the start button, the timer will commence counting down from 25 minutes. The countdown can be resumed, paused or reset by hitting either the start, pause or reset button. An alert will notify the user when the timer reaches zero.</",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/pomodoro-timer-project"
    },
    {
        image: "images/minigig.png",
        title: "Mini Projects",
        description: "This is a collection of mini projects built with HTML and CSS.",
        github: "https://github.com/Essietasha/Mini-Gig"
    },
    {
        image: "images/socialmedia.png",
        title: "Social Media Selector",
        description: "A social media selector menu that displays social media text and icons. As user clicks on the menu, he'll see a list of social media, and each will have a hovering effect. When user clicks on any icon, the social media text will change accordingly. Icons will also rotate as he opens or closes the menu.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/social-media-selector-menu-project"
    },
    {
        image: "images/stickynavbar.png",
        title: "Sticky Navigation Bar",
        description: "This project designs a sticky navbar that alters its color as a user scrolls down the webpage. It features an image in the background with a navbar at the top displaying a logo and menu. As user scrolls down, he’ll come across some text. As he continues to scroll, the navbar's color will change alongside other designs.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/sticky-navbar"
    },
    {
        image: "images/sidebarmenu.png",
        title: "Sidebar Menu Project",
        description: "At the top right of the website, will can find a hamburger icon. Upon clicking on it, the menu appears smoothly, featuring multiple options with a beautiful hovering effect.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/sidebar-menu-project"
    },
    {
        image: "images/profilestatistics.png ",
        title: "Profile Statistics Project",
        description: "An interactive profile statistics display showcasing work experience, websites made, and apps made. The design centers around three icons. Each icon is accompanied by a number that increments from zero to the final value.  This effect triggers every time the page loads. ",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/profile-statistics-project"
    },
    {
        image: "images/randompassword.png",
        title: "Random Password Generator",
        description: "Generates a password using different characters. The project consists of an input field containing an icon for copying the password and a button to generate it. When user clicks the button, a password is generated randomly. A notification will appear confirming if password is copied.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/random-password-generator"
    },
    {
        image: "images/qa.png",
        title: "Q&A Section Project",
        description: "Question and answer section that can be useful for websites to improve their SEO. Features three questions, each with a plus sign tab. Clicking on the plus sign shows the answer of the question plus an active class will be added to the question, revealing the answer. Clicking on the minus sign removes the active class to hides the answer.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/qa-section-project"
    },
    {
        image: "images/note.png",
        title: "Note Taking App Project",
        description: "A note-taking app with a sleek modern button design. Upon clicking the button, a new note can be created and edited as needed. Double-clicking a note prompts the user to confirm deletion, and notes are saved via browser local storage to persist even after page refresh. This project covers saving and retrieving notes using JavaScript.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/note-app"
    },
    {
        image: "images/weather.png",
        title: "Weather App",
        description: "This weather app empowers users to access weather information for any city. The process will involve the user inputting the city name into an input field and clicking a button or pressing enter to retrieve the weather data. By leveraging JavaScript, w’ll connect to an open weather API to access relevant weather data for the specified city.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/weather-forecast"
    },
    {
        image: "images/calendar-mini.png",
        title: "Calendar App - Mini",
        description: "This project involves creating a mini calendar that displays the current date of the computer on which it is viewed. This information is dynamically retrieved using JavaScript, ensuring that the page always displays the current date.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/calendar-app-mini"
    },
    {
        image: "images/pokeman.png",
        title: "Image Search App - Pokeman",
        description: "An image search app that lets you search for any desired image. You can enter your search query and receive results accompanied by a description. Using an API, the app fetches unique and non-repetitive images. The modern CSS design ensures a fast and responsive user experience, making it enjoyable to search for images.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/pokeman"
    },
    {
        image: "images/imagesearchi.png",
        title: "Image Slider - Auto",
        description: "A photo gallery slider without controls. This automatically slides images on the screen. Useful in advertisement or mobile applications to display products to users.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/image-slider-auto"
    },
    {
        image: "images/randomemoji.png ",
        title: "Random Emoji Project",
        description: "Random emoji generator with a click button that generates a random emoji and displays its name tag. Will use JavaScript to retrieve data from an API and CSS to style the website. To get the necessary API keys, will apply to the Emoji API website.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/random-emoji-project"
    },
    {
        image: "images/loading.png",
        title: "Loading Status Bar",
        description: "In this project, we'll create a loading bar. Upon opening, a header, loading percentage, and bar will be displayed. Refresh the page to watch the percentage increase from 0 to 100, filling the bar. Can use it as a free loader or in own projects.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/loading-status-bar"
    },
    {
        image: "images/imagesearchii.png",
        title: "Image Slider - Controls",
        description: "A photo gallery slider with controls. Displays  or rotates images with buttons.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/image-slider-controls"
    },
    {
        image: "images/rating.png",
        title: "Ratings App",
        description: "This project involves a feedback section with emoji ratings. The final version of this project will display an emoji and five stars on the screen. Upon clicking on different stars, the color of the previous stars will change accordingly. This functionality is achieved using JavaScript to update the star ratings and change the emojis in real-time.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/ratings-app"
    },
    {
        image: "images/randomcolor.png",
        title: "Random Color Generator",
        description: "A tool that generates multiple random colors and codes with JavaScript. Useful in generating color codes. Upon refreshing the page, the colors and codes change randomly for up to 30 color containers. The website is also designed to be responsive, adapting to different screen sizes.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/random-color-generator"
    },
    {
        image: "images/analogueclock.png",
        title: "Analogue Clock",
        description: "Analog clock with the Rolex logo that displays the current time based on the user's browser. 'll convert the current time into degrees to reflect the current time on the clock face. Will update the clock hands' positions dynamically using JavaScript, creating a real-time effect.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/analogue-clock"
    },
    {
        image: "images/darktoggle.png",
        title: "Dark Toggle Mode",
        description: "A toggle button that switches the website between dark and light modes, with a sliding animation for a more visually appealing transition. The user's preference will be stored using the browser's local storage, ensuring that their selection persists even if they refresh the page. ",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/dark-toggle-mode"
    },
    {
        image: "images/todolist.png",
        title: "To-Do List",
        description: "A modern to do list. We can add a new task to the list using the input field. Plus, this to-do list is unique in that even after refreshing the page, the tasks remain saved. With each task, there are two icons: a check mark and a trash bin. The check mark allows you to mark the task as completed, while the trash bin lets you delete the task.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/To-do-List-Project"
    },
    {
        image: "images/realtimechar.png",
        title: "Real-time Character Count",
        description: "A real-time character counter using JavaScript. As user types, the total character count dynamically increases, and the remaining character count decreases. The text area locks once the limit of characters is reached, and the remaining character count becomes zero and user is alerted when they hit the character limit.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/real-time-character"
    },
    {
        image: "images/photogallery.png",
        title: "Photo Gallery Project",
        description: "This a photo gallery project that lets you have an image gallery. Upon entering the search query, images are displayed in rows and columns. Using an API, the app fetches unique and non-repetitive images based on the search query. This app is unique and responsive.",
        github: "https://github.com/Essietasha/50-PROJECTS-with-JavaScript/tree/main/Projects/photo-gallery-project"
    }
];

const githubIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>`;

const projectsGrid = document.getElementById('javaScriptProjectGrid');

if (projectsGrid) {
    projects.forEach(project => {
        const projectHTML = `
            <div class="eachJsProject">
                <div class="jsImage">
                    <img src="${project.image}" class="img-fluid" alt="${project.title}">
                </div>
                <div class="projectDetails">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <p class="srcBtn">
                        <a href="${project.github}" target="_blank">
                            ${githubIcon}
                            <span>Source</span>
                        </a>
                    </p>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectHTML;
    });
}
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
