class BookingError extends Error {
    constructor(message) {
        super(message);
        this.name = "BookingError";
    }
}

// Mock rooms
const rooms = [
    { id: 1, capacity: 2, bookings: [] },
    { id: 2, capacity: 4, bookings: [] },
    { id: 3, capacity: 1, bookings: [] }
];

const form = document.getElementById("bookingForm");
const resultDiv = document.getElementById("result");

// Liste des thèmes et fonds
const themes = [
    { background: 'url("shaq1.jpg")', textColor: '#5b3a2f' },
    { background: 'url("shaq2.jpg")', textColor: '#023047' },
    { background: 'url("shaq3.jpg")', textColor: '#000000' },
    { background: 'url("nosecat.jpg")', textColor: '#cdb9da' },
    { background: 'url("theoriginalcat.jpg")', textColor: '#354e83' },
    { background: 'url("whycat.jpg")', textColor: '#9900ff' },
    { background: 'url("wideputin.jpg")', textColor: '#ffffff' },
    { background: 'url("catretarded.jpg")', textColor: '#ffffff' },
    { background: 'url("catwide.png")', textColor: '#ffffff' },
];

// Fonction pour obtenir un thème aléatoire
function getRandomTheme() {
    return themes[Math.floor(Math.random() * themes.length)];
}

// Fonction pour afficher un GIF et rafraîchir la page
function showErrorAnimation() {
    // Crée un conteneur pour le GIF
    const gifContainer = document.createElement('div');
    gifContainer.style.position = 'fixed';
    gifContainer.style.top = '0';
    gifContainer.style.left = '0';
    gifContainer.style.width = '100vw';
    gifContainer.style.height = '100vh';
    gifContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    gifContainer.style.display = 'flex';
    gifContainer.style.justifyContent = 'center';
    gifContainer.style.alignItems = 'center';
    gifContainer.style.zIndex = '1000';

    // Ajoute le GIF
    const gif = document.createElement('img');
    gif.src = './qvo03bww3ke91.gif'; // Lien d'un GIF humoristique
    gif.style.width = '200px';
    gif.style.transition = 'transform 2s ease-in-out';

    gifContainer.appendChild(gif);
    document.body.appendChild(gifContainer);

    // Agrandit le GIF
    setTimeout(() => {
        gif.style.transform = 'scale(30)';
    }, 100);

    // Rafraîchit la page avec un nouveau thème après 2.5 secondes
    setTimeout(() => {
        const theme = getRandomTheme();
        document.body.style.backgroundImage = theme.background;
        document.body.style.backgroundColor = 'black';
        document.body.style.color = theme.textColor;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'contain';
        document.body.style.backgroundPosition = 'center';
        gifContainer.remove(); // Retire le GIF après animation
    }, 1500);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    resultDiv.innerHTML = "";

    const lastName = document.getElementById("lastName").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const reservationDate = document.getElementById("reservationDate").value;
    const numPeople = parseInt(document.getElementById("numPeople").value, 10);

    try {
        // Validation des données
        if (lastName.length < 3 || lastName.length > 20) {
            throw new BookingError("Last Name must be between 3 and 20 characters.");
        }

        if (firstName.length < 3 || firstName.length > 20) {
            throw new BookingError("First Name must be between 3 and 20 characters.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new BookingError("Invalid email address.");
        }

        if (!reservationDate) {
            throw new BookingError("Please select a valid reservation date.");
        }

        if (isNaN(numPeople) || numPeople < 1) {
            throw new BookingError("Number of people must be at least 1.");
        }

        // Vérification de la disponibilité des chambres
        const availableRoom = rooms.find(
            (room) =>
                room.capacity >= numPeople &&
                !room.bookings.includes(reservationDate)
        );

        if (!availableRoom) {
            throw new BookingError("No room available for the selected date and number of people.");
        }

        // Réservation de la chambre
        availableRoom.bookings.push(reservationDate);
        resultDiv.innerHTML = `<p class="success">Booking successful! Room ${availableRoom.id} has been reserved for ${reservationDate}.</p>`;
    } catch (error) {
        if (error instanceof BookingError) {
            console.log("BookingError caught:", error.message); // Debug log
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
            showErrorAnimation(); // Affiche l'animation GIF en cas d'erreur
        } else {
            console.error(error);
            resultDiv.innerHTML = `<p class="error">An unexpected error occurred. Please try again later.</p>`;
        }
    }
});



