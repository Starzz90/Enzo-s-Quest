function Page(){
    window.location.href = "https://starzz90.github.io/More-Achivements-section/";
}
const bars = document.querySelectorAll('.stats-fill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const bar = entry.target;
            const width = bar.getAttribute('data-width');

            setTimeout(() => {
                bar.style.width = width + '%';;
            }, 500);
            observer.unobserve(bar);
        }
    });
}, {threshold: 0.5});

bars.forEach(bar =>
    observer.observe(bar)
);