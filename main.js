document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'es';

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

        // Buscar todos los elementos con atributos data-es y data-en
        const translatableElements = document.querySelectorAll('[data-es][data-en]');

        translatableElements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });
});