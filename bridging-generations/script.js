'use strict';

(function () {
    var nav = document.getElementById('site-nav');
    var heroTrigger = document.getElementById('hero-video-trigger');
    var watchBtn = document.getElementById('watch-talk-btn');
    var modal = document.getElementById('live-modal');
    var modalDialog = modal.querySelector('[role="dialog"]');
    var closeSelectors = '[data-modal-close]';
    var lastFocusedElement = null;
    var youtubeEmbedUrl = 'https://www.youtube.com/embed/y9HQQNGeZPE?autoplay=1&rel=0';
    var hasInlineVideoLoaded = false;

    function updateNavShadow() {
        if (window.scrollY > 8) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }
    }

    updateNavShadow();
    window.addEventListener('scroll', updateNavShadow, { passive: true });

    function injectInlineVideo() {
        if (hasInlineVideoLoaded) return;
        hasInlineVideoLoaded = true;
        heroTrigger.innerHTML =
            '<iframe ' +
            'title="Featured talk video" ' +
            'src="' + youtubeEmbedUrl + '" ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
            'allowfullscreen ' +
            'style="width:100%;height:100%;border:0;"></iframe>';
    }

    if (heroTrigger) {
        heroTrigger.addEventListener('click', function () {
            injectInlineVideo();
        });

        heroTrigger.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                injectInlineVideo();
            }
        });
    }

    function getFocusableElements(container) {
        return container.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
    }

    function openModal(trigger) {
        lastFocusedElement = trigger || document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalDialog.focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    modal.addEventListener('click', function (event) {
        if (event.target.matches(closeSelectors)) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (!modal.classList.contains('is-open')) return;

        if (event.key === 'Escape') {
            closeModal();
            return;
        }

        if (event.key !== 'Tab') return;

        var focusable = getFocusableElements(modalDialog);
        if (!focusable.length) return;

        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        var active = document.activeElement;

        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    });

    if (watchBtn) {
        watchBtn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(watchBtn);
        });
    }

    var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
    if ('IntersectionObserver' in window && cards.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var card = entry.target;
                    var index = cards.indexOf(card);
                    card.style.transitionDelay = String(index * 90) + 'ms';
                    card.classList.add('is-visible');
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(function (card) {
            observer.observe(card);
        });
    } else {
        cards.forEach(function (card) {
            card.classList.add('is-visible');
        });
    }

    var themeToggle = document.getElementById('theme-toggle');
    var themeStorageKey = 'preferredTheme';

    function applyTheme(theme) {
        var isDark = theme === 'dark';
        document.documentElement.classList.toggle('theme-dark', isDark);
        if (!themeToggle) return;
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        themeToggle.textContent = isDark ? 'Light' : 'Dark';
    }

    function getSavedTheme() {
        return localStorage.getItem(themeStorageKey);
    }

    function getPreferredTheme() {
        var saved = getSavedTheme();
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(getPreferredTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var newTheme = document.documentElement.classList.contains('theme-dark') ? 'light' : 'dark';
            localStorage.setItem(themeStorageKey, newTheme);
            applyTheme(newTheme);
        });
    }
})();
