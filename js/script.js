// OVERLAY NAV MENU SHOW HIDE

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function() {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed')
    } else {
        mysitenav.setAttribute('data-navstate', 'open')
    }
};

// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVOR

const io_options = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-sectionstate', 'active');
        } else {
            entry.target.setAttribute('data-sectionstate', 'inactive');
        }
    });
}, io_options);
document.querySelectorAll('.animate-on-scroll').forEach( (section) => {
    myobserver.observe(section);
});