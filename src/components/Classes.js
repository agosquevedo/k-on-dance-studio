// src/components/Classes.js
import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Classes.css';

const Classes = () => {
    const classSchedule = {
        "Lunes": [
            { title: "Kpop I (Male)", startTime: '18:30:00', endTime: '19:30:00' },
            { title: "Kpop I (Male)", startTime: '19:30:00', endTime: '20:30:00' }
        ],
        "Martes": [
            { title: "Kpop II (Ori)", startTime: '19:30:00', endTime: '20:30:00' },
            { title: "Jazz Contemporáneo (Kena)", startTime: '16:30:00', endTime: '18:30:00' },
            { title: "Street Dance (Leon)", startTime: '18:30:00', endTime: '19:30:00' }
        ],
        "Miércoles": [
            { title: "Kpop I (Male)", startTime: '18:30:00', endTime: '19:30:00' },
            { title: "Kpop I (Male)", startTime: '19:30:00', endTime: '20:30:00' }
        ],
        "Jueves": [
            { title: "Kpop II (Ori)", startTime: '19:30:00', endTime: '20:30:00' },
            { title: "Street Dance (Leon)", startTime: '18:30:00', endTime: '19:30:00' }
        ],
        "Viernes": [
            { title: "Heels Dance (Ori)", startTime: '19:30:00', endTime: '21:30:00' },
            { title: "Formación K-ON", startTime: '16:30:00', endTime: '21:30:00' }
        ],
        "Sábado": [
            { title: "Coreografía Adultos (Leon)", startTime: '11:30:00', endTime: '13:30:00' },
            { title: "Kids ON (Male y Kena)", startTime: '11:30:00', endTime: '13:30:00', description: 'Estrellitas (3 a 6)' },
            { title: "Kids ON (Male y Kena)", startTime: '11:30:00', endTime: '13:30:00', description: 'Kool Kidz (7 a 9)' }
        ],
        "Domingo": []
    };

    const events = [];
    const today = new Date();

    for (let i = 0; i < 365; i++) {
        const eventDate = new Date(today);
        eventDate.setDate(today.getDate() + i);
        const dayName = eventDate.toLocaleString('es-ES', { weekday: 'long' });
        const eventsForDay = classSchedule[dayName.charAt(0).toUpperCase() + dayName.slice(1)];
        if (eventsForDay) {
            eventsForDay.forEach(event => {
                events.push({
                    title: event.title,
                    start: `${eventDate.toISOString().split('T')[0]}T${event.startTime}`,
                    end: `${eventDate.toISOString().split('T')[0]}T${event.endTime}`,
                    description: event.description || '',
                    backgroundColor: '#00ff00'
                });
            });
        }
    }

    // Agregar evento especial del workshop
    events.push({
        title: 'Workshop',
        start: '2024-06-22T18:00:00',
        end: '2024-06-22T20:00:00',
        description: 'Sobremonte 1263',
        backgroundColor: '#ff0000'
    });

    return (
        <main>
            <section id="classes" className="schedule">
                <h2>Horarios de Clases</h2>
                <div id="calendar">
                    <FullCalendar 
                        plugins={[dayGridPlugin, interactionPlugin]} 
                        initialView="dayGridMonth" 
                        events={events}
                        eventClick={(info) => {
                            const popup = document.getElementById("classPopup");
                            const popupTitle = document.getElementById("popupTitle");
                            const popupTime = document.getElementById("popupTime");
                            const popupDescription = document.getElementById("popupDescription");

                            popupTitle.textContent = info.event.title;
                            popupTime.textContent = "Horario: " + info.event.start.toLocaleString();
                            popupDescription.textContent = info.event.extendedProps.description || "";

                            popup.style.display = "block";
                        }}
                    />
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
