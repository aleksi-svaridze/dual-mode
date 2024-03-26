const btn = document.querySelector('span');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('website.theme') ? theme = localStorage.getItem('website.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    btn.innerHTML = `D`;
  } else {
    btn.innerHTML = `L`;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

btn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
    theme = 'light';
  } else {
    theme = 'dark';
  }

  localStorage.setItem('website.theme', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
    let theme = getCurrentTheme();
    if(theme === 'dark'){
        theme = 'light';
    } else {
        theme = 'dark';
    }

    localStorage.setItem('website.theme', `${theme}`);
    loadTheme(theme);
//   loadTheme(getCurrentTheme());
})