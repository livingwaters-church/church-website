document.addEventListener('DOMContentLoaded', () => {
    // Determine the root path dynamically
    const rootPath = window.location.origin;

    // Use absolute paths
    const loadComponent = (id, file) => {
        fetch(`${rootPath}/${file}`)
            .then(res => {
                if (!res.ok) throw new Error(`${file} failed: ${res.status}`);
                return res.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(err => console.error(err));
    };

    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
