const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterTabs = document.querySelectorAll(".filter-tab");
const projectCards = document.querySelectorAll(".project-card");
const pdfModal = document.querySelector(".pdf-modal");
const pdfFrame = document.querySelector(".pdf-dialog iframe");
const pdfTitle = document.querySelector("#pdf-title");
const pdfClose = document.querySelector(".pdf-close");

document.querySelector("#year").textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    filterTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

document.querySelectorAll("[data-pdf]").forEach((button) => {
  button.addEventListener("click", () => {
    pdfTitle.textContent = button.dataset.title;
    pdfFrame.src = button.dataset.pdf;
    pdfModal.classList.add("open");
    pdfModal.setAttribute("aria-hidden", "false");
    pdfClose.focus();
  });
});

function closePdfModal() {
  pdfModal.classList.remove("open");
  pdfModal.setAttribute("aria-hidden", "true");
  pdfFrame.src = "about:blank";
}

pdfClose.addEventListener("click", closePdfModal);

pdfModal.addEventListener("click", (event) => {
  if (event.target === pdfModal) {
    closePdfModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && pdfModal.classList.contains("open")) {
    closePdfModal();
  }
});
