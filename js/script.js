let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    const words = ["Software Developer", "UI Designer", "Web Developer"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        let loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('typing-text').innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000); // Wait before deleting
                return false;
            }
            timer = setTimeout(loopTyping, 150);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        let loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('typing-text').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    }

    typingEffect();
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about');
    const aboutButton = document.querySelector('a[href="#about"]'); // Assuming your About button has this link

    // Intersection Observer to animate on scroll
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('active');
            }
        });
    });

    observer.observe(aboutSection);

    // Function to animate when the About button is clicked
    function scrollToAbout() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to the About section
        aboutSection.classList.add('active');  // Trigger the animation
    }

    // Add event listener to the About button
    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default link behavior
        scrollToAbout();
    });
});
