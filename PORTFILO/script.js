const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-closed')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const blurHeader = () => {
    const header = document.getElementById('header')
    // this will add a blur effect to the header when the user scrolls down more than 50 viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



// email js

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_5e89ulv', 'template_rdnlmn1', '#contact-form', 'ipj67ISbA_Z15sHEB')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000);

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent(services Error)'
        })
}
contactForm.addEventListener('submit', sendEmail)

// scroll section active link

const scrollup = () => {
    const scrollup = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

// scroll active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    // reset : true

})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image` , {origin : 'bottom'})
sr.reveal(`.about__data , .skills__data`, {origin : 'left'})
sr.reveal(`.about__image , .skills__content`, {origin : 'right'})
sr.reveal(`.services__card , .projects__card`,{interval : 100})