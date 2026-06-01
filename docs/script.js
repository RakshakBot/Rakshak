const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const settingsMenus = document.querySelectorAll(".settings-menu");

const closeNavMenu = () => {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

const closeSettingsMenus = () => {
  settingsMenus.forEach((menu) => {
    menu.classList.remove("open");
    const button = menu.querySelector(".settings-toggle");
    if (button) button.setAttribute("aria-expanded", "false");
  });
};

if (navToggle && navMenu) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
    if (!isOpen) closeSettingsMenus();
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNavMenu();
      closeSettingsMenus();
    });
  });
}

settingsMenus.forEach((menu) => {
  const button = menu.querySelector(".settings-toggle");
  if (!button) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const shouldOpen = !menu.classList.contains("open");
    closeSettingsMenus();
    menu.classList.toggle("open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (navMenu && navToggle && navMenu.classList.contains("open") && !navMenu.contains(target) && !navToggle.contains(target)) {
    closeNavMenu();
  }

  if (![...settingsMenus].some((menu) => menu.contains(target))) {
    closeSettingsMenus();
  }
});

const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
document.querySelectorAll(".nav-link, .settings-dropdown a").forEach((link) => {
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

document.querySelectorAll('form[data-formspree="true"]').forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = form.querySelector("[data-form-status]");
    const submitButton = form.querySelector('[type="submit"]');
    const action = form.getAttribute("action");
    const method = form.getAttribute("method") || "POST";

    if (!action) {
      form.submit();
      return;
    }

    const setStatus = (type, message) => {
      if (!status) return;
      status.textContent = message;
      status.className = `form-alert show ${type}`;
    };

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch(action, {
        method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success", `Message sent successfully. We'll review it as soon as possible.`);
      window.location.assign("/Rakshak/thank-you/");
    } catch {
      setStatus("error", `Something went wrong. Please try again or contact us through the support server.`);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || "Send Message";
      }
    }
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

  if (window.innerWidth > 992) {
    closeNavMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeSettingsMenus();
  closeNavMenu();
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
