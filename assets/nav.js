document.addEventListener('DOMContentLoaded', () => {
    // Define the base path for your GitHub Pages project
    const basePath = '/church-website'; 

    const loadComponent = (id, file) => {
        // Build the path to include the project folder name
        fetch(`${basePath}/${file}`)
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
