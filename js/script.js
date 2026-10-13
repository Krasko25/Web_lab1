// Подсветка активного пункта меню (дополнительно к классу .active)
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.main-nav a');
    const current = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('active');
        }
    });

    // Простая валидация формы
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const message = form.querySelector('#message');

            let valid = true;

            if (name.value.trim().length < 2) {
                name.style.borderColor = '#e74c3c';
                valid = false;
            }
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
                email.style.borderColor = '#e74c3c';
                valid = false;
            }
            if (message.value.trim().length < 10) {
                message.style.borderColor = '#e74c3c';
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
                alert('Пожалуйста, проверьте правильность заполнения полей.');
            }
        });
    }
});