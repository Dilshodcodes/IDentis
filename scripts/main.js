"use strict";

// DOM Element Selection
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuClose = document.getElementById("close-button");
const preLoader = document.querySelector(".preload-container");
const sections = document.querySelectorAll(".section");
const servicesItem = document.querySelectorAll(".services-item");
const servicesContents = document.querySelector(".services-contents");
const servicesMoreButton = document.querySelector(".services-more");
const aElements = document.querySelectorAll("a");

// PreLoader
window.addEventListener("load", () => {
    setTimeout(() => {
        preLoader.classList.add("preload-hidden");
    }, 2000);
    setTimeout(() => {
        preLoader.remove();
    }, 3000);
});

// Mobile Menu Handler
const mobileMenuShow = () => {
    mobileMenuOverlay.classList.remove("hidden");
    mobileMenuContainer.style.left = "0px";
};

const mobileMenuHide = () => {
    mobileMenuOverlay.classList.add("hidden");
    mobileMenuContainer.style.left = "-320px";
};

mobileMenuToggle.addEventListener("click", mobileMenuShow);
mobileMenuOverlay.addEventListener("click", mobileMenuHide);
mobileMenuClose.addEventListener("click", mobileMenuHide);

// SwiperJS
const swiperTestimonial = new Swiper('.swiper-1', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperBlogPost = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Services Fade Animation
servicesItem.forEach(item => {
    item.addEventListener("mouseenter", () => {
        servicesItem.forEach(i => i.style.opacity = "0.5");
        item.style.opacity = "1";
        servicesContents.style.opacity = "0.5";
        servicesMoreButton.style.opacity = "0.5";
    });

    item.addEventListener("mouseleave", () => {
        servicesItem.forEach(i => i.style.opacity = "1");
        servicesContents.style.opacity = "1";
        servicesMoreButton.style.opacity = "1";
    });
});

// Section fade-in Animation
sections.forEach(section => section.classList.add("section-fade"));

const sectionEffectCallback = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove("section-fade");
        sectionEffect.unobserve(entry.target);
    }
};

const sectionEffect = new IntersectionObserver(sectionEffectCallback, {
    root: null,
    threshold: 0,
});

sections.forEach(section => sectionEffect.observe(section));

// <a> Element PreventDefault
// Only prevent default for anchor links that start with "#"
aElements.forEach(item => {
    if (item.getAttribute("href")?.startsWith("#")) {
        item.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(item.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }
});

// Gallery Show/Hide
const showGallery = () => {
    document.getElementById('galleryContainer').style.display = 'flex';
};

const closeGallery = () => {
    document.getElementById('galleryContainer').style.display = 'none';
};
