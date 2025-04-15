document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const dateInput = document.getElementById('selectedDate');
    const form = document.getElementById('bookingForm');
    const confirmation = document.getElementById('confirmation');
  
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      height: 500,
      dateClick: function(info) {
        dateInput.value = info.dateStr;
      },
      events: [
        {
          title: 'Web Dev Conference',
          start: '2025-04-20',
          color: '#00bcd4'
        },
        {
          title: 'JavaScript Workshop',
          start: '2025-04-21',
          color: '#00bcd4'
        },
        {
          title: 'New Year Party',
          start: '2025-04-22',
          color: '#00bcd4'
        }
      ]
    });
    calendar.render();
  
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const type = form.eventType.value;
      const attendees = form.attendees.value;
      const date = form.selectedDate.value;
  
      if (!name || !email || !phone || !type || attendees < 1 || !date) {
        alert("Please fill out all fields correctly.");
        return;
      }
  
      confirmation.classList.remove('hidden');
      form.reset();
  
      setTimeout(() => {
        confirmation.classList.add('hidden');
      }, 4000);
    });
  });
  
