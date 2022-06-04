function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        // auto remove
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration+1000);

        // remove when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-exclamation',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-exclamation'
        }

        const icon = icons[type];
        const delay = duration/1000;
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        
    }
}

function showSuccessToast(){
    toast({
    title: 'Success',
    message: 'This is a test message for the bem 1 2 3 4 ...',
    type: 'success',
    duration: 5000
});
}

function showErrorToast(){
    toast({
    title: 'Error',
    message: 'This is a test message for the bem 1 2 3 4 ...',
    type: 'error',
    duration: 5000
});
}
