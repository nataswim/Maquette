document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const animate = () => {
            const target = +counter.getAttribute("data-target"); // Valeur cible
            const count = +counter.innerText; // Valeur actuelle
            const increment = target / 100; // Incrémentation (ajustez pour la vitesse)

            if (count < target) {
                counter.innerText = Math.ceil(count + increment); // Mise à jour de la valeur
                setTimeout(animate, 30); // Appel récursif
            } else {
                counter.innerText = target; // Assurez-vous que la valeur finale est exacte
            }
        };

        animate(); // Lancer l'animation
    });
});
