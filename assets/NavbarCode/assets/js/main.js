/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   // Guard: if the elements aren't present, do nothing (don't throw and
   // abort the rest of this script).
   if (!toggle || !nav) return

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu');

/*=============== DROPDOWNS: open on click, stay open ===============*/
/* Uses event delegation on document so it keeps working even though the
   template (util.js .panel) clones/moves the nav after load. */
;(function () {
  function closeAll() {
    var open = document.querySelectorAll('.dropdown__item.dropdown-open, .dropdown__subitem.dropdown-open');
    Array.prototype.forEach.call(open, function (el) { el.classList.remove('dropdown-open'); });
  }

  function closeSubmenus() {
    var open = document.querySelectorAll('.dropdown__subitem.dropdown-open');
    Array.prototype.forEach.call(open, function (el) { el.classList.remove('dropdown-open'); });
  }

  document.addEventListener('click', function (e) {
    // Submenu toggle: a .dropdown__link whose parent is a .dropdown__subitem
    var dropLink = e.target.closest ? e.target.closest('.dropdown__link') : null;
    if (dropLink && dropLink.parentElement &&
        dropLink.parentElement.classList.contains('dropdown__subitem')) {
      e.preventDefault();
      var sub = dropLink.parentElement;
      var subWasOpen = sub.classList.contains('dropdown-open');
      closeSubmenus();
      if (!subWasOpen) sub.classList.add('dropdown-open');
      return;
    }

    // Top-level toggle: a .nav__link whose parent is a .dropdown__item
    var navLink = e.target.closest ? e.target.closest('.nav__link') : null;
    if (navLink && navLink.parentElement &&
        navLink.parentElement.classList.contains('dropdown__item')) {
      e.preventDefault();
      var item = navLink.parentElement;
      var wasOpen = item.classList.contains('dropdown-open');
      closeAll();
      if (!wasOpen) item.classList.add('dropdown-open');
      return;
    }

    // Clicked a real menu link or anywhere else: close everything.
    closeAll();
  });

  // Esc closes everything
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) closeAll();
  });
})();