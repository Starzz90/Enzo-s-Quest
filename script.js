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
function openGold() {
  document.getElementById("GoldModal").style.display = "block";
}
function openSilver() {
  document.getElementById("SilverModal").style.display = "block";
}
function openBronze() {
  document.getElementById("BronzeModal").style.display = "block";
}
function closeGold() {
  document.getElementById("GoldModal").style.display = "none";
}
function closeSilver() {
  document.getElementById("SilverModal").style.display = "none";
}
function closeBronze() {
  document.getElementById("BronzeModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  var mythicalModal = document.getElementById("mythicalModal");
  var legendaryModal = document.getElementById("LegendaryModal");
  var rareModal = document.getElementById("RareModal");
  var uncommonModal = document.getElementById("UncommonModal");
  var goldModal = document.getElementById("GoldModal");
  var silverModal = document.getElementById("SilverModal");
  var bronzeModal = document.getElementById("BronzeModal");

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
  if (event.target == goldModal) {
    goldModal.style.display = "none";
  }
  if (event.target == silverModal) {
    silverModal.style.display = "none";
  }
  if (event.target == bronzeModal) {
    bronzeModal.style.display = "none";
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
