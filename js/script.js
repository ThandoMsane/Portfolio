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
    const aboutButton = document.querySelector('.about-btn'); // Fix the About button selector

    // Intersection Observer to animate on scroll
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('active');  // Add animation class when in view
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(aboutSection);

    // Function to scroll and animate when the About button is clicked
    function scrollToAbout() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to About section
        aboutSection.classList.add('active');  // Trigger the animation immediately
    }

    // Add event listener to the About button
    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default link behavior
        scrollToAbout();  // Scroll to About and animate
    });
});


//Services

function toggleService(button) {
    const serviceDetails = button.nextElementSibling;

    // Toggle the visibility of the service details
    if (serviceDetails.style.display === "none" || serviceDetails.style.display === "") {
        serviceDetails.style.display = "block";
        button.textContent = "Close";
    } else {
        serviceDetails.style.display = "none";
        button.textContent = "View More";
    }
}

//Modal

function toggleService(button) {
    const serviceItem = button.closest('.service-item');
    const title = serviceItem.querySelector('h3').textContent;
    const description = serviceItem.querySelector('p').textContent;
    const imageSrc = serviceItem.querySelector('img').src;

    // Populate modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = imageSrc;

    const featuresList = serviceItem.querySelector('ul');
    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = ''; // Clear existing features
    Array.from(featuresList.children).forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature.textContent;
        modalFeatures.appendChild(li);
    });

    // Show modal
    document.getElementById('serviceModal').style.display = 'flex';
}

// Close modal on close button click
document.querySelector('.close-button').onclick = function() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Close modal on clicking outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// my skills

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const skillValue = bar.getAttribute("data-skill");
                    bar.style.width = skillValue; // Set the width based on data-skill
                    observer.unobserve(bar); // Stop observing once animated
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    skillBars.forEach((bar) => observer.observe(bar));
});


