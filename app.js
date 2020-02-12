function animateForm() {
    const arrows = document.querySelectorAll('.arrow');

    arrows.forEach(arrow=> {
        arrow.addEventListener('click',() => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type == 'text' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type == 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            } else if(input.type =='password' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation = "shake 1s ease-in-out"
            }
            parent.addEventListener('animationonend',() => {
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user){
    if(user.value.length < 6 ){
        console.log('error: Not Enough Characters');
        error('rgb(189,87,87');
    }else{
        error('rgb(87,189,130');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@] +\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(189,87,87');
    }else{
        error('rgb(87,189,130');
        return true;
    }
}
function nextSlide(parent,nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}
animateForm();