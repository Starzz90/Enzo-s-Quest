function Page() {
  window.location.href = "https://starzz90.github.io/More-Achivements-section/";
}

// Modal functions
function openMythicalModal() {
  document.getElementById("mythicalModal").style.display = "block";
}

function closeMythicalModal() {
  document.getElementById("mythicalModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  var modal = document.getElementById("mythicalModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const bars = document.querySelectorAll(".stats-fill");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");

        setTimeout(() => {
          bar.style.width = width + "%";
        }, 500);
        observer.unobserve(bar);
      }
    });
  },
  { threshold: 0.5 },
);

bars.forEach((bar) => observer.observe(bar));
