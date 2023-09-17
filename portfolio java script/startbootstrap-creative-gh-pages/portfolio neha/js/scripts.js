/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // DYNAMIC MODAL
    var audioId = document.getElementById("audio")
    var calculator=document.getElementById("calculator")
    var countdown = document.getElementById('countdown')
    var digitelClock = document.getElementById('digitelClock')
    var form = document.getElementById('form')
    var imageGallery = document.getElementById('imageGallery')
    var mouseover = document.getElementById('mouseover')
    var shoppingCart = document.getElementById('shoppingCart')
    var imageSlider = document.getElementById('imageSlider')
    var modalTitle = document.getElementById('exampleModalLabel');

    audioId.addEventListener('click', function() {
        modalTitle.innerHTML= 'Alphabets with audio';
        loadFrameSrc('audio-portfolio/audio.html');
    })
    calculator.addEventListener('click', function() {
        modalTitle.innerHTML= 'Calculator';
        loadFrameSrc('calculater/calculator.html');
    })
    countdown.addEventListener('click', function() {
        modalTitle.innerHTML= 'Countdown';
        loadFrameSrc('countdown/countDown.html');
    })
    digitelClock.addEventListener('click', function() {
        modalTitle.innerHTML= 'Digitel-clock';
        loadFrameSrc('Digitel-clock/digitelClock.html');
    })
    form.addEventListener('click', function() {
        modalTitle.innerHTML= 'Form';  
        loadFrameSrc('form/validationPractice.html');
    })
    imageGallery.addEventListener('click', function() {
        modalTitle.innerHTML= 'Image-Gallery';
        loadFrameSrc('image-gallery/imageGalleryWithThumbs.html');
    })
    mouseover.addEventListener('click', function() {
        modalTitle.innerHTML= 'Mouseover';

        loadFrameSrc('mouseover/mouseOver.html');
    })
    imageSlider.addEventListener('click', function() {
        modalTitle.innerHTML= 'Image-slider';
      loadFrameSrc('imafe-slider/imageFile.html');

    })

    function loadFrameSrc(path){
        var iFRame = document.getElementById('loadHTML');
        iFRame.src = path
        var myModal = document.getElementById('exampleModal');
        myModal.addEventListener('shown.bs.modal', function () {
        })
    }
});