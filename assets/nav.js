document.addEventListener('DOMContentLoaded', () => {
    // Using '../' tells the browser to go up one level from /assets/ 
    // to your root folder where header.html and footer.html are located.
    fetch('../header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Header fetch error:', err));

    fetch('../footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Footer fetch error:', err));
});
