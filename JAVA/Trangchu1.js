// JavaScript to handle detail, sequence, and user feedback tab content display
document.addEventListener('DOMContentLoaded', () => {
    const bottomTop = document.querySelector('.product-content-right-bottom-top');
    const contentBig = document.querySelector('.product-content-right-bottom-contnet-big');
    const titles = document.querySelectorAll('.product-content-right-bottom-contnet-title-item');
    const contentSections = document.querySelectorAll('.product-content-right-bottom-contnet > div');

    bottomTop.addEventListener('click', () => {
        contentBig.style.display = contentBig.style.display === 'none' || contentBig.style.display === '' ? 'flex' : 'none';
    });

    titles.forEach((title, index) => {
        title.addEventListener('click', () => {
            contentSections.forEach((section, secIndex) => {
                section.style.display = secIndex === index ? 'block' : 'none';
            });
        });
    });
});