// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// SCROLL REVEAL
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
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
const text = "(nội dung)";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
type();
