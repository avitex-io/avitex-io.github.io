const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const moonIcon = `
  <path d="M726 876q-106 0-181-75t-75-181q0-106 75-181t181-75q20 0 39 3.5t36 9.5q-47-73-122-116t-168-43q-133 0-226.5 93.5T120 576q0 133 93.5 226.5T440 896q93 0 168-43t122-116q-17 6-36 9.5t-39 3.5Z"/>`;

const sunIcon = `
  <path d="M480 816q-25 0-42.5-17.5T420 756t17.5-42.5T480 696t42.5 17.5T540 756t-17.5 42.5T480 816Zm0-240q-25 0-42.5-17.5T420 516t17.5-42.5T480 456t42.5 17.5T540 516t-17.5 42.5T480 576Zm0-240q-25 0-42.5-17.5T420 276t17.5-42.5T480 216t42.5 17.5T540 276t-17.5 42.5T480 336ZM240 636q-25 0-42.5-17.5T180 576t17.5-42.5T240 516t42.5 17.5T300 576t-17.5 42.5T240 636Zm480 0q-25 0-42.5-17.5T660 576t17.5-42.5T720 516t42.5 17.5T780 576t-17.5 42.5T720 636ZM240 336q-25 0-42.5-17.5T180 276t17.5-42.5T240 216t42.5 17.5T300 276t-17.5 42.5T240 336Zm480 0q-25 0-42.5-17.5T660 276t17.5-42.5T720 216t42.5 17.5T780 276t-17.5 42.5T720 336Z"/>`;

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeIcon.innerHTML = isDark ? sunIcon : moonIcon;
}

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkModeEnabled = storedTheme === 'dark' || (!storedTheme && prefersDark);

setTheme(darkModeEnabled);

toggleButton.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});
