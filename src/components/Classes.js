// src/components/Classes.js
import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import Swiper from 'swiper';
import dayGridPlugin from '@fullcalendar/daygrid';

const Classes = () => {
    useEffect(() => {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.swiper-container', {
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
    }, []);

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

    return (
        <main>
            <section id="classes" className="schedule">
                <h2>Horarios de Clases</h2>
                <div id="calendar">
                    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} eventClick={(info) => {
                        const popup = document.getElementById("classPopup");
                        const popupTitle = document.getElementById("popupTitle");
                        const popupTime = document.getElementById("popupTime");
                        const popupDescription = document.getElementById("popupDescription");

                        popupTitle.textContent = info.event.title;
                        popupTime.textContent = "Horario: " + info.event.start.toLocaleString();
                        popupDescription.textContent = info.event.extendedProps.description || "";

                        popup.style.display = "block";
                    }} />
                </div>
            </section>

            <div id="classPopup" className="popup">
                <span className="close-popup" onClick={() => document.getElementById("classPopup").style.display = "none"}>&times;</span>
                <h3 id="popupTitle"></h3>
                <p id="popupTime"></p>
                <p id="popupDescription"></p>
                <a id="popupBtn" href="https://wa.me/5493584257663" target="_blank">
                    <button>Anotarse</button>
                </a>
            </div>
        </main>
    );
};

export default Classes;
