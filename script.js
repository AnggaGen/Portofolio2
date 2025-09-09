document.addEventListener("DOMContentLoaded", function() {
    console.log("Portofolio dimuat dengan sukses!");

    // Highlight efek skill
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.boxShadow = "0 8px 20px rgba(0, 86, 179, 0.4)";
        });
        skill.addEventListener("mouseleave", () => {
            skill.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
        });
    });

    // Modal foto profil
    const modal = document.getElementById("photoModal");
    const img = document.getElementById("profilePic");
    const modalImg = document.getElementById("modalImage");
    const span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
