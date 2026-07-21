document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("global-footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="global-footer">
            <div class="footer-grid">

                <div class="footer-col">
                    <h4>Living Waters</h4>
                    <p>Serving God, Loving People, Changing Lives.</p>
                </div>

                <div class="footer-col">
                    <h4>Gathering Times</h4>
                    <p>Sunday School: 9:00 AM</p>
                    <p>Sunday Worship: 10:30 AM</p>
                    <p>Tuesday Bible Study: 5:00 PM</p>
                </div>

                <div class="footer-col">
                    <h4>Mailing Address</h4>
                    <p>
                        PO Box 1125<br>
                        Oak Grove, KY 42262
                    </p>
                </div>

            </div>

            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Living Waters Community Church. All rights reserved.</p>
            </div>
        </footer>
    `;

});
