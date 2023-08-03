function openNavMenu() {
    let navMenu = document.getElementById("navLinks");
    let closeIcon = document.getElementById("closeIcon");

    if (navMenu.classList.contains("nav-menu-close")) {
        closeIcon.style.transform = "rotate(0deg)";
        navMenu.classList.remove("nav-menu-close");
        navMenu.classList.add("nav-menu-open");
    } else {
        navMenu.classList.add("nav-menu-close");
        navMenu.classList.remove("nav-menu-open");
        closeIcon.style.transform = "rotate(180deg)";

    }
}


const navLink = document.querySelector('#navLinks');
navLink.addEventListener('click', e => {
    if (e.target.matches('.nav-links a')) {

        e.preventDefault();

        const targetId = e.target.getAttribute('data-target');

        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});



const scrolll = document.querySelector('.nav-left');
scrolll.addEventListener('click', e => {
    if (e.target.matches('.nav-left a')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-link");

function changeNavLinks() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active-section"));
    navLinks[index].classList.add("active-section");
}

window.addEventListener("scroll", changeNavLinks);



//close menubar on scroll
window.onscroll = function() {
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.add("nav-menu-close");
    navLinks.classList.remove("nav-menu-open");
};


//Contact form submission


const scriptURL = 'https://script.google.com/macros/s/AKfycbykQCOci8i4hFfoLpZYh0P77oXP1_-5KToUgetmHr_8Sbh-kdMqwx4RJlB5nFT41Z7yqA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})


//dark mode
function darkMode() {
    let darkIicon = document.getElementById('darkIicon');
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkIicon.classList.remove("fa-moon");
        darkIicon.classList.add("fa-sun");
    } else {
        darkIicon.classList.add("fa-moon");
        darkIicon.classList.remove("fa-sun");

    }
}


//   show more or less 
let showText = document.getElementById('showText');
let showIcon = document.getElementById('showIcon');
showText.onclick = function() {
    let eduSection = document.getElementById("educationSection");

    if (eduSection.classList.contains("education-section")) {
        eduSection.classList.remove("education-section");
        eduSection.classList.add("education-section-open");
        showText.innerHTML = "HIDE EDUCATION";
        showIcon.style.transform = "rotate(180deg)";
    } else {
        eduSection.classList.add("education-section");
        eduSection.classList.remove("education-section-open");
        showText.innerHTML = "SHOW EDUCATION";
        showIcon.style.transform = "rotate(0deg)";
    }
}












// ScrollReveal({ distance: '100px' });
// ScrollReveal().reveal('.intro-details',{ origin: 'left' },{ delay: 1000 });
// ScrollReveal().reveal('.intro-details',{ easing: 'ease-in-out' });


// ScrollReveal().reveal('.user-pic-bg-section', { origin: 'right' }, { delay: 1000} );
// ScrollReveal().reveal('.user-pic-bg-section',{ easing: 'ease-in-out'}  );

// ScrollReveal().reveal('#carouselExampleIndicators', { origin: 'left' }, { delay: 1000 } );
// ScrollReveal().reveal('#carouselExampleIndicators', { easing: 'ease-in-out' } );


// ScrollReveal().reveal('.about-details', { origin: 'right' }, { delay: 1000 } );
// ScrollReveal().reveal('.about-details',{ easing: 'ease-in-out' } );


// ScrollReveal({ distance: '0px' });
// ScrollReveal().reveal('.skills-section',{ delay: 500 });

// ======================================================



// ======================================================
// ======================================================

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "none"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);
// ======================================================