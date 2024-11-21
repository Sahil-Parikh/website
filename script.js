document.addEventListener('DOMContentLoaded', function () {
    const toggleSections = document.querySelectorAll('#about-me, #education, #past-experience, #skills, #portfolio li');

    toggleSections.forEach(section => {
        section.addEventListener('click', function () {
            // Check if the section is already open
            if (this.classList.contains('open')) {
                this.classList.remove('open'); // Close the section if it is open
            } else {
                // Close other sections if you want only one open at a time (optional)
                toggleSections.forEach(sec => sec.classList.remove('open'));
                this.classList.add('open'); // Open the clicked section
            }
        });
    });
});