document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  });
});

function redirectTo(url) {
  window.location.href = url;
}

function downloadResume() {
  const resumeUrl = "SIVABHARATHI-P.C-Resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Sivabharathi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function downloadResume() {
  window.location.href = "SIVABHARATHI-P.C-Resume.pdf";
}

function redirectTo(url) {
  window.open(url, "_blank");
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

