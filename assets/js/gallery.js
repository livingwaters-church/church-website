function scrollGallery(direction) {

    const gallery = document.getElementById("missionGallery");

    if (!gallery) return;

    gallery.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });

}
