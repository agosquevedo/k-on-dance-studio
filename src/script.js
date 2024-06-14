document.addEventListener("DOMContentLoaded", function() {
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('animate-logo');

    // Swiper initialization
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        console.error('Swiper is not defined');
    }

    // FullCalendar initialization
    if (typeof FullCalendar !== 'undefined') {
        const classSchedule = {
            "Lunes": [
                { title: "Kpop I (Male)", start: '2024-06-10T18:30:00', end: '2024-06-10T19:30:00' },
                { title: "Kpop I (Male)", start: '2024-06-10T19:30:00', end: '2024-06-10T20:30:00' }
            ],
            "Martes": [
                { title: "Kpop II (Ori)", start: '2024-06-11T19:30:00', end: '2024-06-11T20:30:00' },
                { title: "Jazz Contemporáneo (Kena)", start: '2024-06-11T16:30:00', end: '2024-06-11T18:30:00' },
                { title: "Street Dance (Leon)", start: '2024-06-11T18:30:00', end: '2024-06-11T19:30:00' }
            ],
            "Miércoles": [
                { title: "Kpop I (Male)", start: '2024-06-12T18:30:00', end: '2024-06-12T19:30:00' },
                { title: "Kpop I (Male)", start: '2024-06-12T19:30:00', end: '2024-06-12T20:30:00' }
            ],
            "Jueves": [
                { title: "Kpop II (Ori)", start: '2024-06-13T19:30:00', end: '2024-06-13T20:30:00' },
                { title: "Street Dance (Leon)", start: '2024-06-13T18:30:00', end: '2024-06-13T19:30:00' }
            ],
            "Viernes": [
                { title: "Heels Dance (Ori)", start: '2024-06-14T19:30:00', end: '2024-06-14T21:30:00' },
                { title: "Formación K-ON", start: '2024-06-14T16:30:00', end: '2024-06-14T21:30:00' }
            ],
            "Sábado": [
                { title: "Coreografía Adultos (Leon)", start: '2024-06-15T11:30:00', end: '2024-06-15T13:30:00' },
                { title: "Kids ON (Male y Kena)", start: '2024-06-15T11:30:00', end: '2024-06-15T13:30:00', description: 'Estrellitas (3 a 6)' },
                { title: "Kids ON (Male y Kena)", start: '2024-06-15T11:30:00', end: '2024-06-15T13:30:00', description: 'Kool Kidz (7 a 9)' }
            ],
            "Domingo": []
        };

        const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const today = new Date();
        const todayIndex = today.getDay();

        const events = [];
        for (let i = 0; i < 7; i++) {
            const dayIndex = (todayIndex + i) % 7;
            const dayName = daysOfWeek[dayIndex];
            if (classSchedule[dayName]) {
                classSchedule[dayName].forEach(event => {
                    const eventDate = new Date(today);
                    eventDate.setDate(today.getDate() + i);
                    event.start = eventDate.toISOString().split('T')[0] + 'T' + event.start.split('T')[1];
                    event.end = eventDate.toISOString().split('T')[0] + 'T' + event.end.split('T')[1];
                    events.push(event);
                });
            }
        }

        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: events,
            eventClick: function(info) {
                const popup = document.getElementById("classPopup");
                const popupTitle = document.getElementById("popupTitle");
                const popupTime = document.getElementById("popupTime");
                const popupDescription = document.getElementById("popupDescription");
                const popupBtn = document.getElementById("popupBtn");

                popupTitle.textContent = info.event.title;
                popupTime.textContent = "Horario: " + info.event.start.toLocaleString();
                popupDescription.textContent = info.event.extendedProps.description || "";

                popup.style.display = "block";
            }
        });

        calendar.render();

        const closePopup = document.getElementsByClassName("close-popup")[0];
        if (closePopup) {
            closePopup.onclick = function() {
                const popup = document.getElementById("classPopup");
                popup.style.display = "none";
            }
        }
    } else {
        console.error('FullCalendar is not defined');
    }

    // EmailJS integration
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_wia2yr8', 'template_your_template_id', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Correo enviado!');
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Error al enviar el correo: ' + JSON.stringify(error));
                });
        });
    }

    // Video mute/unmute logic
    const video = document.getElementById('background-video');
    const soundButton = document.getElementById('sound-button');

    let touchTimeout;

    soundButton.addEventListener('mousedown', () => {
        soundButton.classList.add('active');
        touchTimeout = setTimeout(() => {
            video.muted = false;
        }, 500); // Mantener presionado por 500 ms para activar el sonido
    });

    soundButton.addEventListener('mouseup', () => {
        soundButton.classList.remove('active');
        clearTimeout(touchTimeout);
        video.muted = true;
    });

    soundButton.addEventListener('mouseleave', () => {
        soundButton.classList.remove('active');
        clearTimeout(touchTimeout);
        video.muted = true;
    });

    // Para dispositivos táctiles
    soundButton.addEventListener('touchstart', () => {
        soundButton.classList.add('active');
        touchTimeout = setTimeout(() => {
            video.muted = false;
        }, 500);
    });

    soundButton.addEventListener('touchend', () => {
        soundButton.classList.remove('active');
        clearTimeout(touchTimeout);
        video.muted = true;
    });

    soundButton.addEventListener('touchcancel', () => {
        soundButton.classList.remove('active');
        clearTimeout(touchTimeout);
        video.muted = true;
    });

    // Mover el botón con el mouse
    document.addEventListener('mousemove', (event) => {
        soundButton.style.left = `${event.clientX - soundButton.offsetWidth / 2}px`;
        soundButton.style.top = `${event.clientY - soundButton.offsetHeight / 2 - 20}px`; // Adjust to position button above cursor
    });

    // Función para mostrar el popup
    window.showPopup = function(group) {
        document.getElementById(`popup-${group}`).style.display = "block";
    }

    // Función para cerrar el popup
    window.closePopup = function(group) {
        document.getElementById(`popup-${group}`).style.display = "none";
    }
});
