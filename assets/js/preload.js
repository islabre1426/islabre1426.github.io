// Handling favicon theme.
const faviconLight = document.querySelector('.favicon-light');
const faviconDark = document.querySelector('.favicon-dark');
const detectDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (!detectDarkMode) {
    throw console.error('Uh oh! window.matchMedia is not supported on this browser');
} else {
    if (detectDarkMode.matches) {
        document.head.removeChild(faviconLight);
    } else {
        document.head.removeChild(faviconDark);
    };
};