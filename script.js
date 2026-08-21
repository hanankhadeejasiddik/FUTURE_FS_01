const themeBtn = document.getElementById('theme-btn');
        const root = document.documentElement;
        function applyTheme(theme) {
            root.setAttribute('data-theme', theme);
            themeBtn.textContent = theme === 'light' ? 'dark mode' : 'light mode';
        }
        let currentTheme = 'dark';
        applyTheme(currentTheme);
        themeBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });

        const nameText = "Hanan Khadeeja Siddik";
        const typedEl = document.getElementById('typed-name');
        let i = 0;
        function typeName() {
            if (i <= nameText.length) {
                typedEl.textContent = nameText.slice(0, i);
                i++;
                setTimeout(typeName, 85);
            }
        }
        typeName();

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('section').forEach(sec => revealObserver.observe(sec));
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section, header');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (!link) return;
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }, { threshold: 0.5 });
        sections.forEach(sec => navObserver.observe(sec));

        const backToTopBtn = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('show', window.scrollY > 400);
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });