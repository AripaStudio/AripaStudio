const translations = {};
let currentLang = localStorage.getItem('lang') || 'en';

async function fetchTranslations(lang) {
    try {
        const response = await fetch(`./json/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translations for ${lang}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching translations:", error);
        return {};
    }
}

function getNestedValue(obj, keyPath) {
    const parts = keyPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length; i++) {
        if (current === undefined || current === null || typeof current !== 'object' || !current.hasOwnProperty(parts[i])) {
            return undefined;
        }
        current = current[parts[i]];
    }
    return current;
}

function applyTranslations(lang) {
    if (!translations[lang]) {
        console.warn(`Translations for ${lang} are not loaded.`);
        return;
    }

    // --- این خط جدید برای عیب یابی است ---
    console.log(`DEBUG: translations[${lang}] content:`, translations[lang]);
    // ------------------------------------

    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translatedText = getNestedValue(translations[lang], key);

        if (translatedText !== undefined) {
            if (element.tagName === 'TITLE') {
                document.title = translatedText;
            } else if (element.tagName === 'META') {
                if (element.name === 'description') {
                    element.setAttribute('content', translatedText);
                } else if (element.name === 'keywords') {
                    element.setAttribute('content', translatedText);
                }
            } else if (element.tagName === 'A' && key.includes('navigation.')) {
                const spanElement = element.querySelector('span');
                if (spanElement) {
                    spanElement.innerHTML = translatedText;
                } else {
                    element.innerHTML = translatedText;
                }
            } else {
                element.innerHTML = translatedText;
            }
        } else {
            console.warn(`Translation for key "${key}" not found in ${lang}.json`);
        }
    });

    document.documentElement.lang = lang;
}

async function initializeLanguage() {
    await Promise.all([
        fetchTranslations('en').then(data => translations.en = data),
        fetchTranslations('fa').then(data => translations.fa = data)
    ]);
    applyTranslations(currentLang);
}

document.addEventListener('DOMContentLoaded', async () => {
    await initializeLanguage();

    const langToggleButton = document.getElementById('lang-toggle-buttonID');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', toggleLanguage);
    }
});

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'fa' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
}
