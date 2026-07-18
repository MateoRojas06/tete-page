const toggleButton = document.getElementById('theme_toggle');
const currentTheme = localStorage.getItem('theme');
const body = document.body;

if (currentTheme === 'light'){
    body.classList.add('light-mode');
}

toggleButton.addEventListener('click', ()=>{
    body.classList.toggle('light-mode')

    if (body.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
