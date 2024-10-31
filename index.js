// Function to scroll to the menu section
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
function scrollToMenu(){
document.getAnimations().forEach((animation) => {
    animation.playbackRate *= 0.5;
  });
}
// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us. We will get back to you soon!");
});

