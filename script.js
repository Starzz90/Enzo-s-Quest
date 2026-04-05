function Page() {
  window.location.href = "https://starzz90.github.io/More-Achivements-section/";
}

function openMythicalModal() {
  document.getElementById("mythicalModal").style.display = "block";
}

function openLegendaryModal() {
  document.getElementById("LegendaryModal").style.display = "block";
}

function openRareModal() {
  document.getElementById("RareModal").style.display = "block";
}

function openUncommonModal() {
  document.getElementById("UncommonModal").style.display = "block";
}

// Close modal when clicking outside
window.onclick = function (event) {
  var mythicalModal = document.getElementById("mythicalModal");
  var legendaryModal = document.getElementById("LegendaryModal");
  var rareModal = document.getElementById("RareModal");
  var uncommonModal = document.getElementById("UncommonModal");

  if (event.target == mythicalModal) {
    mythicalModal.style.display = "none";
  }
  if (event.target == legendaryModal) {
    legendaryModal.style.display = "none";
  }
  if (event.target == rareModal) {
    rareModal.style.display = "none";
  }
  if (event.target == uncommonModal) {
    uncommonModal.style.display = "none";
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
