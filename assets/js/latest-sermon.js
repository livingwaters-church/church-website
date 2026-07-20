document.addEventListener("DOMContentLoaded", function () {

    fetch("data/latest-sermon.json")
        .then(response => response.json())
        .then(sermon => {

            const title = document.getElementById("sermon-title");
            const speaker = document.getElementById("sermon-speaker");
            const scripture = document.getElementById("sermon-scripture");
            const date = document.getElementById("sermon-date");
            const link = document.getElementById("sermon-link");
            const thumbnail = document.getElementById("sermon-thumbnail");


            if (title) {
                title.textContent = sermon.title;
            }

            if (speaker) {
                speaker.textContent = sermon.speaker;
            }

            if (scripture) {
                scripture.textContent = sermon.scripture;
            }

            if (date) {
                date.textContent = "📅 " + sermon.published;
            }

            if (link) {
                link.href = sermon.url;
            }

            if (thumbnail) {
                thumbnail.style.backgroundImage =
                `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.4)), url(${sermon.thumbnail})`;
            }

        })

        .catch(error => {
            console.error("Sermon loading error:", error);
        });

});
