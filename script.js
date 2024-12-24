// Mot de passe et réponses encodés en Base64
const encodedPassword = "bWF1cnk="; // "motdepasse"
const enigmas = {
    "enigme1.html": { question: ".--- . / ... ..- .. ... / - --- ..- .--- --- ..- .-. ... / -.. . ...- .- -. - / - --- .. / -- .- .. ... / - ..- / -. . / .--. . ..- -..- / .--. .- ... / -- . / ...- --- .. .-. / --.- ..- .. / ... ..- .. ... -....- .--- .", answer: "ZnV0dXI" }, // "infini"
    "enigme2.html": { question: "Quand on me prononce, je me casse. Que suis-je ?", answer: "c2lsZW5jZQ==" }, // "futur"
    "enigme3.html": { question: "(Indice: Si tu galères, tu peux demander de l'aide à HeRVé:) Ni gsyvw werw neqemw qi jexmkyiv. Uym wymw-ni ?", answer: "dGVtcHM=" } // "le temps"
};

// Gestion du mot de passe
if (document.getElementById('submit')) {
    document.getElementById('submit').addEventListener('click', function () {
        const password = document.getElementById('password').value.toLowerCase();
        const decodedPassword = atob(encodedPassword);

        if (password === decodedPassword) {
            window.location.href = "enigme1.html";
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = "Mot de passe incorrect. Veuillez réessayer.";
        }
    });
}

// Gestion des énigmes
if (document.getElementById('validate')) {
    const currentPage = window.location.pathname.split('/').pop();
    const enigma = enigmas[currentPage];

    if (enigma) {
        // Afficher la question
        document.getElementById('question').textContent = enigma.question;

        // Validation de la réponse
        document.getElementById('validate').addEventListener('click', function () {
            const userAnswer = document.getElementById('answer').value.toLowerCase();
            const decodedAnswer = atob(enigma.answer);

            if (userAnswer.includes(decodedAnswer)) {
                if (currentPage === "enigme3.html") {
                    window.location.href = "success.html";
                } else if (currentPage === "enigme1.html") {
                    window.location.href = "enigme2.html";
                } else if (currentPage === "enigme2.html") {
                    window.location.href = "enigme3.html";
                }
            } else {
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = "Mauvaise réponse. Essayez encore.";
            }
        });
    }
}