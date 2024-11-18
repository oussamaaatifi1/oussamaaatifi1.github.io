const themeToggle = document.querySelector('.theme-toggle');
        const html = document.documentElement;
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.className = savedTheme;
            updateIcon(savedTheme === 'dark');
        }

        function updateIcon(isDark) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }

        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : '');
            updateIcon(isDark);
        });