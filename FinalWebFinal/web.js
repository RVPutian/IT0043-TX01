document.addEventListener('DOMContentLoaded', () => {
  
    const navLinks = document.querySelectorAll('nav a');
    const contactButton = document.getElementById('contact-button');

   
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

           
            const targetSectionId = link.getAttribute('href').substring(1);

           
            const targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

           
            navLinks.forEach(link => link.classList.remove('active'));

           
            link.classList.add('active');
        });
    });

    
    contactButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        
        const contactSection = document.querySelector('.contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
