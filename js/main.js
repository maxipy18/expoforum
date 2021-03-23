

const headerSearchIcon = document.querySelector('.header-search__icon');
const headerSearchSearch = document.querySelector('.header-search__search');
const headerLang = document.querySelector('.header-lang');
const headerLangChoice = document.querySelector('.header-lang__choice');
const headerLangCurrent = document.querySelector('.header-lang__current');

headerSearchIcon.addEventListener('click', ()=>{    
    headerSearchSearch.classList.toggle('active');
    headerSearchSearch.focus();
});

headerLang.addEventListener('click', ()=>{
    headerLangChoice.classList.toggle('active');
    headerLangChoice.addEventListener('click', event=>{
        headerLangCurrent.textContent = event.target.textContent;

    });
});