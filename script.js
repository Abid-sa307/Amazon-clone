// script.js

// Function to handle search input
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput.value) {
        alert(`Searching for: ${searchInput.value}`);
        // Normally, you would perform a search or redirect to a search results page here
    } else {
        alert('Please enter a search term.');
    }
}

// Add event listener for the search icon click
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', handleSearch);

// Function to handle hover effects on navigation items
function handleNavHover() {
    const navItems = document.querySelectorAll('.navbar div');
    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#333';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
}

// Initialize hover effects
handleNavHover();

// Function to handle responsive design
function handleResponsive() {
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {
        // Ensure that each box element resizes properly on small screens
        box.style.width = '100%';
    });
}

// Call responsive function on window resize
window.addEventListener('resize', handleResponsive);

// Call responsive function initially to set up proper styles
handleResponsive();
