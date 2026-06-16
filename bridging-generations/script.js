'use strict';

(function () {
    var watchBtn = document.getElementById('watch-talk-btn');
    var modal = document.getElementById('live-modal');
    var modalDialog = modal.querySelector('[role="dialog"]');
    var closeSelectors = '[data-modal-close]';
    var lastFocusedElement = null;

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

    // Reveal talk cards as they scroll into view.
    var cards = Array.prototype.slice.call(document.querySelectorAll('.talk-card'));
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

    // Add a subtle shadow to the sticky header once the page scrolls.
    var header = document.getElementById('site-header');
    if (header) {
        var onScroll = function () {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
})();
