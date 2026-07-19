// Light mode toggle
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

// Moving background
let position = 0;
const speed = 0.2;

function scrollBg(){
    position += speed;
    document.body.style.backgroundPosition = `${position}px`;
    requestAnimationFrame(scrollBg);
}
scrollBg();

// Language selection
function changeLanguage(language){
    const path = window.location.pathname.split('/').pop();
    window.location.href = '../' + language + '/' + path
}
