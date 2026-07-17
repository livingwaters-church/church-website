document.addEventListener('DOMContentLoaded', () => {
    // The base path for your GitHub Pages project
    const basePath = '/church-website';

    const loadComponent = (id, file) => {
        // This constructs the URL as /church-website/header.html
        fetch(`${basePath}/${file}`)
            .then(res => {
                if (!res.ok) throw new Error(`${file} failed: ${res.status}`);
                return res.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(err => console.error('Injection error:', err));
    };

    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
