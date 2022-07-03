function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) { 
        const toast = document.createElement('div');

        // Auto removeClass
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 5000);

        // removeClass when clicked
        toast.onclick = function (e) 
        {   
            // Tìm class của chính nó coi có class này hay không, không có thì tìm
            // cha của nó
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                // Timeout sẽ không chạy nếu đã click
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `animation: slideInleft ease 0.3s, fadeOut linear 1s ${delay}s forwards;`
        toast.innerHTML = `
        <!-- Success -->
           <!-- Đặt tên theo tiêu chuẩn BEM -->
           <div class="toast__icon">
               <i class="${icon}"></i>
           </div>
           <div class="toast__body">
               <h3 class="toast__title">${title}</h3>
               <p class="toast__msg">${message}</p>
           </div>
           <div class="toast__close">
               <i class="fas fa-times"></i>
           </div>
        `;
        main.appendChild(toast);

       
    }
};


function showSuccessToast() {
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký thành công",
        type: "success",
        duration: 1000
    });
}

function showErrorToast() {
    toast({
        title: "Thất bại!",
        message: "Bạn đã đăng ký thất bại",
        type: "error",
        duration: 3000
    });
}
