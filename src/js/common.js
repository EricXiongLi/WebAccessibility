/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);


// xc_E2_Accessible font size: scale all the font sizes dynamically
const root = document.documentElement;
const computedFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
let fontSize = parseFloat(computedFontSize);
const maxFontSize = 30;
const minFontSize = 10;

function handleFontSizeChange(change) {
  fontSize += change;
  if (fontSize > maxFontSize || fontSize < minFontSize) {
    fontSize -= change;
    return;
  }
  root.style.fontSize = `${fontSize}px`;
}

document.getElementById('font-increase-button').addEventListener('click', () => {
  handleFontSizeChange(2);
});

document.getElementById('font-decrease-button').addEventListener('click', () => {
  handleFontSizeChange(-2);
});

document.getElementById('font-increase-button-1').addEventListener('click', () => {
  handleFontSizeChange(2);
});

document.getElementById('font-decrease-button-1').addEventListener('click', () => {
  handleFontSizeChange(-2);
});


// xc_E3_Drop-down menu: updates the aria-expanded attribute of the menu button and Toggle navigation button to announce "expanded" or "collapsed" as appropriate
// define the array of menu objects
var menus = [
  {
    menuItem: document.getElementById('nav-bar-faculties'),
    expanded: false
  },
  {
    menuItem: document.getElementById('nav-bar-education'),
    expanded: false
  },
  {
    menuItem: document.getElementById('nav-bar-industry'),
    expanded: false
  },
  {
    menuItem: document.querySelector('.navbar-toggler'),
    expanded: false
  }
];
// traverse the array of menu objects
menus.forEach(function(menu) {
  menu.menuItem.addEventListener('click', function() {
    menu.expanded = !menu.expanded;
    menu.menuItem.setAttribute('aria-expanded', menu.expanded);
  });
});


// xc_E3_Menu keyboard interaction (1): Opened sub-menu gets closed automatically when the user presses the ESC key.
// After closing, the menu header would be focused
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    e.preventDefault();

    var openSubmenu = document.querySelector('.dropdown-menu.show');
    if (openSubmenu) {
      // Close the sub-menu
      openSubmenu.classList.remove('show');

      // Update the aria-expanded attribute of the menu item
      menuHeader = openSubmenu.getAttribute("aria-labelledby")
      document.getElementById(menuHeader).setAttribute('aria-expanded', "false");
      
      // Focus on the parent menu item
      openSubmenu.parentElement.querySelector('.nav-link').focus();
    }
  }
});


// xc_E3_Menu keyboard interaction (2): The menu items can also be activated by pressing the SPACE key in addition to ENTER key
const menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach( function(item) {
  item.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();
      item.click();
      item.setAttribute("aria-expanded", "true")
    }
  });
});


// xc_E3_Menu keyboard interaction (3): When navigating outside an open menu with TAB, the now inactive menu would be closed as well
const dropdown_items = document.querySelectorAll(".dropdown-menu")
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    dropdown_items.forEach((item) => {
      if (item.classList.contains('show') && !item.contains(document.activeElement)) {
        item.classList.remove('show');
      }
    });
  }
});
