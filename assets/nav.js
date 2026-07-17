document.addEventListener('DOMContentLoaded', () => {
    // Determine the base path to ensure it works in subfolders
    const pathPrefix = window.location.pathname.includes('/about/') || 
                       window.location.pathname.includes('/ministries/') ||
                       window.location.pathname.includes('/donate/') ||
                       window.location.pathname.includes('/rightnow/') ? '../' : './';

    // Inject Header
    fetch(`${pathPrefix}header.html`)
        .then(res => {
            if (!res.ok) throw new Error('Header not found');
            return res.text();
        })
        .then(data => {
            const header = document.getElementById('header-placeholder');
            if (header) header.innerHTML = data;
        })
        .catch(err => console.error(err));

    // Inject Footer
    fetch(`${pathPrefix}footer.html`)
        .then(res => {
            if (!res.ok) throw new Error('Footer not found');
            return res.text();
        })
        .then(data => {
            const footer = document.getElementById('footer-placeholder');
            if (footer) footer.innerHTML = data;
        })
        .catch(err => console.error(err));
});
