const toggleButton = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  document.body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});
