let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});



// email.js  


(function () {
    // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "TrTPIKOuls4ut-6kS",
        });
    })();
    
    
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
                // these IDs from the previous steps
        emailjs.sendForm('service_t00czs9', 'template_ww6bwqx', this)
            .then(() => {
                console.log('SUCCESS!');
                }, (error) => {
                console.log('FAILED...', error);
               // contactMessage.textContent = 'Message sent successfully';
                //remove message after 5 sec
              //  setTimeout(()=>{
                //contactMessage.textContent = ''
                //}, 5000);
                //clear input field
                //contactForm.reset();
             }
            );
             
        });
    }


