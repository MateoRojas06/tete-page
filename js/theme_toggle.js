const toggleButton = document.getElementById('theme_toggle');
const body = document.body;
const main = document.querySelector('main');

toggleButton.addEventListener('click', ()=>{
    main.classList.toggle('light-mode');
    main.classList.toggle('dark-mode');

    body.classList.toggle('light-mode')
    body.classList.toggle('dark-mode')
})
