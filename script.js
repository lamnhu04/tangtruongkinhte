// TẮT LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// SCROLL REVEAL
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// TYPING EFFECT
const typing = document.querySelector(".typing");
const text = " ";
let i = 0;

function type() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
type();
// SCROLL REVEAL CHO ABOUT
document.addEventListener("DOMContentLoaded", function() {
    let aboutSection = document.querySelector("#about .about-container");
    window.addEventListener("scroll", function() {
        let topPos = aboutSection.getBoundingClientRect().top;
        if (topPos < window.innerHeight - 150) {
            aboutSection.classList.add("active");
        }
    });
});
