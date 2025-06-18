import DataAsJson from './data.json' with {type: 'json'};

let StartFunc = () => {
    var calendarEl = document.getElementById('calendar');

    const events = [{
        title: 'All Day Event',
        start: '2025-03-17'
    },
    {
        title: '2nd',
        start: '2025-03-18'
    }];

    jVarGlobalCalendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2025-03-17',
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: DataAsJson
    });

    jVarGlobalCalendar.render();
};

export { StartFunc };