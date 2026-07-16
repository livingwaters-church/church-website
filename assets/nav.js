document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    fetch('/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Inject Footer
    fetch('/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
