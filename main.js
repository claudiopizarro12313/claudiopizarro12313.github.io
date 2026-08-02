const langBtn = document.getElementById('lang-btn');
let currentLang = 'es';

langBtn.addEventListener('click', () => {
    if (currentLang === 'es') {
        currentLang = 'en';
        langBtn.textContent = 'ES';
        updateLanguage('en');
    } else {
        currentLang = 'es';
        langBtn.textContent = 'EN';
        updateLanguage('es');
    }
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (element.children.length > 0 && element.querySelector('i')) {
            const icon = element.querySelector('i').outerHTML;
            element.innerHTML = `${icon} ${text}`;
        } else {
            element.textContent = text;
        }
    });
}
