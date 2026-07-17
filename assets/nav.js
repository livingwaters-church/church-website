document.addEventListener('DOMContentLoaded', () => {
    // These paths work from any subfolder by starting with / 
    // and prepending your repository name if necessary.
    // Try this first:
    const fetchComponent = (id, file) => {
        fetch(`/${file}`) 
            .then(res => res.text())
            .then(data => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = data;
            })
            .catch(err => console.error(err));
    };

    fetchComponent('header-placeholder', 'header.html');
    fetchComponent('footer-placeholder', 'footer.html');
});
