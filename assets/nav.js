document.addEventListener('DOMContentLoaded', () => {
    // Replace 'church-website' with your actual repository name if it differs
    const repoName = '/church-website'; 

    const fetchComponent = (id, file) => {
        // This forces the browser to look inside your project folder
        fetch(`${repoName}/${file}`) 
            .then(res => {
                if (!res.ok) throw new Error(`Could not find ${file}`);
                return res.text();
            })
            .then(data => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = data;
            })
            .catch(err => console.error(err));
    };

    fetchComponent('header-placeholder', 'header.html');
    fetchComponent('footer-placeholder', 'footer.html');
});
