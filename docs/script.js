const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const normalized = href.replace(/\/index\.html$/, "/");
  if (normalized === currentPath || (normalized !== "/Rakshak/" && currentPath.startsWith(normalized))) {
    link.classList.add("active");
  }
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    const answer = item.querySelector(".faq-answer");
    const marker = button.querySelector("span");
    if (!answer) return;
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
    if (marker) marker.textContent = isOpen ? "-" : "+";
  });
});

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.getAttribute("data-copy-email");
    const statusSelector = button.getAttribute("data-copy-status");
    const status = statusSelector ? document.querySelector(statusSelector) : null;
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      if (status) status.textContent = "Email copied.";
    } catch {
      if (status) status.textContent = email;
    }

    window.setTimeout(() => {
      if (status) status.textContent = "";
    }, 2200);
  });
});

const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("show", window.scrollY > 460);
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("resize", () => {
  document.querySelectorAll(".faq-item.open .faq-answer").forEach((answer) => {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !navMenu || !navToggle) return;
  navMenu.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
