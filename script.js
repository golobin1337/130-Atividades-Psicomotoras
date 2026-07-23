// Scroll reveal for sections
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Offer tag: always show today's date, formatted for pt-BR
const offerTag = document.getElementById("offer-tag");
if (offerTag) {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  offerTag.textContent = `Oferta válida somente hoje, ${today} · pagamento único`;
}

// Only one FAQ item open at a time
document.querySelectorAll("details.faq").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll("details.faq[open]").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    }
  });
});
