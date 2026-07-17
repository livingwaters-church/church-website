
//document.addEventListener('DOMContentLoaded', () => {
    // These paths work from any subfolder by starting with / 
    // and prepending your repository name if necessary.
    // Try this first:
    //const fetchComponent = (id, file) => {
      //  fetch(`/${file}`) 
        //    .then(res => res.text())
           // .then(data => {
          //      const element = document.getElementById(id);
             //   if (element) element.innerHTML = data;
            //})
            //.catch(err => console.error(err));
    //};

    //fetchComponent('header-placeholder', 'header.html');
    //fetchComponent('footer-placeholder', 'footer.html');
//});

document.addEventListener('DOMContentLoaded', () => {
    // Determine the base path for pages in subdirectories
    // If the URL contains a folder name, we need to go up one level
    const isSubpage = window.location.pathname.split('/').filter(Boolean).length > 1;
    const pathPrefix = isSubpage ? '../' : './';

    const loadComponent = (id, file) => {
        // No leading slash here
        fetch(pathPrefix + file) 
            .then(res => {
                if (!res.ok) throw new Error(`${file} not found`);
                return res.text();
            })
            .then(data => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = data;
            })
            .catch(err => console.error('Load Error:', err));
    };

    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
