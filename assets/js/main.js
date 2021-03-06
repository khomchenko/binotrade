// Tabs
let tab = function() {
    let tabNav = document.querySelectorAll('.btn-tab-link'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active')
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
}
tab();

// Hamburger
let $hamburger = document.querySelector('.btn-hamburger');
let $hamburgerClose = document.querySelector('.btn-hamburger-close');
let $navMobile = document.querySelector('.nav-mobile');

$hamburger.addEventListener('click', function() {
    $navMobile.classList.add('active');
})

$hamburgerClose.addEventListener('click', function() {
    $navMobile.classList.remove('active');
})

// WOW
new WOW().init();