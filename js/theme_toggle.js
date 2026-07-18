const toggleButton = document.getElementById('theme_toggle');
const body = document.body;

toggleButton.addEventListener('click', ()=>{
    body.classList.toggle('light-mode')
    body.classList.toggle('dark-mode')
})
