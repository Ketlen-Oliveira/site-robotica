document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os ícones das redes sociais
    const saibaMaisBtn = document.querySelector("#tournaments-information .btn");
    const facebookIcon = document.querySelector(".bi-facebook");
    const twitterIcon = document.querySelector(".bi-twitter");
    const linkedinIcon = document.querySelector(".bi-linkedin");
    const instagramIcon = document.querySelector(".bi-instagram");
    const links = document.querySelectorAll(".links-container a");
    const form = document.querySelector("#contact-information form");

    // Adiciona eventos de clique aos ícones das redes sociais
    saibaMaisBtn.addEventListener("click", function() {
        window.location.href = "https://www.portaldaindustria.com.br/sesi/canais/torneio-de-robotica/#:~:text=Durante%20a%20nossa%20temporada%20de,um%20mundo%20de%20possibilidades%20infinitas.";
    });

    facebookIcon.addEventListener("click", function() {
        window.location.href = "https://www.facebook.com/FestivalSESIdeRobotica";
    });

    twitterIcon.addEventListener("click", function() {
        window.location.href = "https://twitter.com/SouSESI?t=lQg6RNCCdggEL4IJI7hwNg&s=08";
    });

    linkedinIcon.addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/company/sesi-nacional";
    });

    instagramIcon.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/festivalsesiderobotica";
    });
});

// Inicialização
showSlides();


