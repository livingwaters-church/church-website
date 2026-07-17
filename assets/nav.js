document.addEventListener('DOMContentLoaded', () => {
    // The leading slash "/" means "Start at the root folder"
    fetch('/header.html')
        .then(res => {
            if (!res.ok) throw new Error('Header not found');
            return res.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Error:', err));

    fetch('/footer.html')
        .then(res => {
            if (!res.ok) throw new Error('Footer not found');
            return res.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Error:', err));
});
