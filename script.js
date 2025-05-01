// Portfolio Filter Functionality
const portfolioTitles = document.querySelectorAll('.portfolio_title a');
const portfolioItems = document.querySelectorAll('.portfolio_content');

portfolioTitles.forEach(title => {
    title.addEventListener('click', function (event) {
        event.preventDefault();
        const filterCategory = this.getAttribute('data-filter').toLowerCase();

        portfolioItems.forEach(item => {
            const projectCategory = item.getAttribute('data-category').toLowerCase();
            item.style.display = (filterCategory === 'all' || projectCategory === filterCategory) ? 'block' : 'none';
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
