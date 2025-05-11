function setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.textContent = 'Tillbaka till toppen';
    scrollBtn.title = 'Gå till toppen';
    document.body.appendChild(scrollBtn);

    scrollBtn.style.display = 'none';
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
}
setupScrollToTop();

function updateClock() {
    const clock = document.getElementById('live-clock');
    if (clock) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

function updateDate() {
    const dateElement = document.getElementById('live-date');
    if (dateElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('sv-SE', options);
        dateElement.textContent = formattedDate;
    }
}
updateDate();